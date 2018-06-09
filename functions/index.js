/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/

/**
 * This file contains the fulfillment logic (backend) for FIFA Galaxy (Google Action).
 * Returns a response depending upond the particular intent's actions and parameters 
 * passed in the request to the function.
 */
'use strict';

const functions = require('firebase-functions');
const util = require('util');
const http = require('http');
const {
    dialogflow, 
    Suggestions, 
    BasicCard, 
    Button, 
    Image, 
    List, 
    TableCard,
    SimpleResponse,
    MediaResponse,
    Carousel,
    BrowseCarousel,
    BrowseCarouselItem,
} = require('actions-on-google');

const {values, concat, random, randomPop} = require('./utils');
const players = require('./players');
const teams = require('./teams');
const leagues = require('./leagues');

const app = dialogflow({
    debug: true,
    init: () => ({
        data: {
            PLAYERS: players.Players.reduce((obj, player) => {
                obj[player.name] = player;
                return obj;
            }, {}),
            TEAMS: teams.Teams.reduce((obj, team) => {
                obj[team.name] = team;
                return obj;
            }, {}),
            LEAGUES: leagues.Leagues.reduce((obj, league) => {
                obj[league.name] = league;
                return obj;
            }, {}),
            FIFA: [
                "In 1986, FIFA banned shirt swapping because they did not want players being barechested on the field.",
                "India qualified for the 1950 World Cup but withdrew when they realised that playing barefoot was against the rules.",
                "Only eight nations have won the World Cup; Brazil, Italy, Germany, Argentina, Uruguay, England, Spain and France.",
                "Russia’s Oleg Slanko holds the record for most individual goals in a single match, netting five goals against Cameroon in 1994.",
                "Lucien Laurent of France scored the first goal in World Cup history on July 13, 1930.",
                "The oldest goal scorer in the World Cup was Roger Milla, who was 42 in 1994 when he scored a goal for Cameroon against Russia.",
                "The highest scoring game in World Cup history was in 1954, when Austria defeated Switzerland 7-5.",
                "Of all countries that have appeared in the World Cup, Indonesia has played the least number of matches – just one in 1938.",
                "Mexico has the most World Cup losses (25), though they do also have 14 wins and 14 draws.",
                "Only 13 teams competed in the first World Cup: Argentina, Belgium, Brazil, Bolivia, Chile, France, Mexico, Paraguay, Peru, Romania, the United States, Uruguay, and Yugoslavia.",
                "Only Brazil has qualified to compete in every World Cup since the tournament began in 1930."
            ],
        },
    })
});

/**
 * Respond with a fact related to a player/team/league or any random fact 
 * related to FIFA.
 * Arguments:- 
 *      player: Any football player (OPTIONAL) 
 *      team: Any league/national football team (OPTIONAL) 
 *      league: Any league related to football (OPTIONAL) 
 */
app.intent('FIFA-Facts', (conv, {player, team, league}) => {
    console.log("FIFA-Facts Intent");
    var fact;
    // Check if any parameter is set or not 
    if (player) {
        const {PLAYERS} = conv.data;
        fact = random(PLAYERS[player]['facts']);
        if (fact) {
            conv.ask(new SimpleResponse({
                speech: "Okay, here's a fact about " + PLAYERS[player]['name'] + ".\n" + fact,
                text: PLAYERS[player]['fact_prefix'],
            }));
            conv.ask(new BasicCard({
                title: player,
                subtitle: "Footballer",
                text: fact,
                image: new Image({
                  url: PLAYERS[player]['image_url'],
                  alt: player,
                }),
            }));
        }
        else {
            conv.ask("Sorry! I don't know about " + player + ".");
        }
    }
    else if (team) {
        const {TEAMS} = conv.data;
        fact = random(TEAMS[team]['facts']);
        if (fact) {
            conv.ask(new SimpleResponse({
                speech: "Okay, here's a fact about " + TEAMS[team]['name'] + ".\n" + fact,
                text: TEAMS[team]['fact_prefix'],
            }));
            conv.ask(new BasicCard({
                title: team,
                subtitle: "Football Club",
                text: fact,
                image: new Image({
                  url: TEAMS[team]['logo'],
                  alt: team,
                }),
            }));
        }
        else {
            conv.ask("Sorry! I don't know about " + team + ".");
        }
    }
    else if (league) {
        const {LEAGUES} = conv.data;
        fact = random(LEAGUES[league]['facts']);
        if (fact) {
            conv.ask(new SimpleResponse({
                speech: "Okay, here's a fact about " + LEAGUES[league]['name'] + ".\n" + fact,
                text: LEAGUES[league]['fact_prefix'],
            }));
            conv.ask(new BasicCard({
                title: league,
                subtitle: "Football League",
                text: fact,
                image: new Image({
                  url: LEAGUES[league]['logo'],
                  alt: league,
                }),
            }));
        }
        else {
            conv.ask("Sorry! I don't know about " + league + ".");
        }
    }
    else {
        const {FIFA} = conv.data;
        conv.ask(random(FIFA));
    }
    
});

/**
 * Respond with a particular team's or a team pair's previous match result 
 * and upcoming/current match details.
 * Arguments:- 
 *      team1: Any league/national football team (REQUIRED) 
 *      team2: Any league/national football team (OPTIONAL) 
 */
app.intent('Match-Score', (conv, {team1, team2}) => {
    console.log("Match-Score Intent");
    const {TEAMS, LEAGUES} = conv.data;
    var home_team, away_team;
    // Check if a single team or a pair of team is given 
    if (team1) {
        return getPreviousUpcomingTeamFixtures(team1, team2).then((fixtures) => {
            var previous_fixture = fixtures['previous_fixture'];
            var upcoming_fixture = fixtures['upcoming_fixture'];
            var previous_fixture_date, upcoming_fixture_date;
            
            if (!previous_fixture && !upcoming_fixture) {
                conv.ask("There are no matches scheduled for the given team currently.");
                return fixtures;
            }
            
            /* Simple Response */
            conv.ask(jsonToSpeechText(fixtures, team1, team2));

            if (!upcoming_fixture) {
                home_team = '', away_team = '';
                for (let i=0; i<teams.Teams.length; i++) {
                    if (!home_team && teams.Teams[i]['synonyms'].indexOf(previous_fixture['homeTeamName']) !== -1) 
                        home_team = teams.Teams[i]['name'];
                    if (!away_team && teams.Teams[i]['synonyms'].indexOf(previous_fixture['awayTeamName']) !== -1) 
                        away_team = teams.Teams[i]['name'];
                }
                previous_fixture_date = new Date(previous_fixture['date']);
                conv.ask(new BasicCard({
                    title: "Scores & Fixtures",
                    //subtitle: "Previous Fixture",
                    image: new Image({
                        url: getLeagueImageUrl(previous_fixture['homeTeamName'], previous_fixture['awayTeamName'], previous_fixture_date, conv.data.LEAGUES),
                        alt:  previous_fixture['homeTeamName'] + ' VS ' + previous_fixture['awayTeamName'],
                    }),
                    text: "__" + home_team + "__  " + previous_fixture['result']['goalsHomeTeam'] + "  ⚽  " + 
                        previous_fixture['result']['goalsAwayTeam'] + "  __" + away_team + "__",
                }));
            }
            else if (!previous_fixture) {
                home_team = '', away_team = '';
                for (let i=0; i<teams.Teams.length; i++) {
                    if (!home_team && teams.Teams[i]['synonyms'].indexOf(upcoming_fixture['homeTeamName']) !== -1) 
                        home_team = teams.Teams[i]['name'];
                    if (!away_team && teams.Teams[i]['synonyms'].indexOf(upcoming_fixture['awayTeamName']) !== -1) 
                        away_team = teams.Teams[i]['name'];
                }
                upcoming_fixture_date = new Date(upcoming_fixture['date']);
                conv.ask(new BasicCard({
                    title: "Scores & Fixtures",
                    //subtitle: "Upcoming Fixture",
                    image: new Image({
                        url: getLeagueImageUrl(upcoming_fixture['homeTeamName'], upcoming_fixture['awayTeamName'], upcoming_fixture_date, conv.data.LEAGUES),
                        alt:  upcoming_fixture['homeTeamName'] + ' VS ' + upcoming_fixture['awayTeamName'],
                    }),
                    text: "__" + home_team + "__  VS  __" + away_team + "__  \n" + 
                        upcoming_fixture_date.toLocaleString(undefined, {
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric', 
                            hour: 'numeric', 
                            minute: 'numeric', 
                            hour12: true, 
                            timeZoneName: 'short', 
                        }),
                }));
            }
            else {
                home_team = '', away_team = '';
                for (let i=0; i<teams.Teams.length; i++) {
                    if (!home_team && teams.Teams[i]['synonyms'].indexOf(previous_fixture['homeTeamName']) !== -1) 
                        home_team = teams.Teams[i]['name'];
                    if (!away_team && teams.Teams[i]['synonyms'].indexOf(previous_fixture['awayTeamName']) !== -1) 
                        away_team = teams.Teams[i]['name'];
                }
                previous_fixture_date = new Date(previous_fixture['date']);
                upcoming_fixture_date = new Date(upcoming_fixture['date']);
                var previous_match = "previous_fixture;" + JSON.stringify(previous_fixture);
                var upcoming_match = "upcoming_fixture;" + JSON.stringify(upcoming_fixture);
                var list_items = {};
                list_items[previous_match] = {
                    title: home_team + "   " + previous_fixture['result']['goalsHomeTeam'] + "  ⚽  " + 
                        previous_fixture['result']['goalsAwayTeam'] + "   " + away_team,
                    description: previous_fixture_date.toLocaleString(undefined, {
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric', 
                    }),
                    image: new Image({
                        url: getLeagueImageUrl(previous_fixture['homeTeamName'], previous_fixture['awayTeamName'], previous_fixture_date, conv.data.LEAGUES),
                        alt:  previous_fixture['homeTeamName'] + " VS " + previous_fixture['awayTeamName'],
                    }),
                };
                home_team = '', away_team = '';
                for (let i=0; i<teams.Teams.length; i++) {
                    if (!home_team && teams.Teams[i]['synonyms'].indexOf(upcoming_fixture['homeTeamName']) !== -1) 
                        home_team = teams.Teams[i]['name'];
                    if (!away_team && teams.Teams[i]['synonyms'].indexOf(upcoming_fixture['awayTeamName']) !== -1) 
                        away_team = teams.Teams[i]['name'];
                }
                list_items[upcoming_match] = {
                    title: home_team + "  VS  " + away_team,
                    description: upcoming_fixture_date.toLocaleString(undefined, {
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric', 
                        hour: 'numeric', 
                        minute: 'numeric', 
                        hour12: true, 
                        timeZoneName: 'short', 
                    }),
                    image: new Image({
                        url: getLeagueImageUrl(upcoming_fixture['homeTeamName'], upcoming_fixture['awayTeamName'], upcoming_fixture_date, conv.data.LEAGUES),
                        alt:  upcoming_fixture['homeTeamName'] + " VS " + upcoming_fixture['awayTeamName'],
                    }),
                };
                /* List Select to display fixtures */
                conv.ask(new List({
                    items: list_items,
                }));
            }

            return fixtures;
        }).catch((error) => {
            console.log(error);
            conv.ask("I am not able to connect to the servers at the moment. Please come back later after some time to get the latest updates on your favourite teams.");
        });
    }
    else {
        conv.ask("Sorry! I didn't get that. Can you say it again?");
    }
    
});

/**
 * React to the fixture (match) selection in the list select response
 * of the Match-Score intent.
 */
app.intent('Match-Selected', (conv, params, option) => {
    console.log("Match-Selected Intent");
    if (option) {
        var speech_text_response = "";
        var fixture_type = option.split(';')[0];
        var fixture = JSON.parse(option.split(';')[1]);
        var fixture_date = new Date(fixture['date']);
        var fixture_date_string = fixture_date.toLocaleString(undefined, {
            weekday: 'long', 
            month: 'long', 
            day: 'numeric', 
        });
        var fixture_time_string = fixture_date.toLocaleString(undefined, {
            hour: 'numeric', 
            minute: 'numeric', 
            hour12: true, 
        });
        var home_team = '', away_team = '';
        for (let i=0; i<teams.Teams.length; i++) {
            if (!home_team && teams.Teams[i]['synonyms'].indexOf(fixture['homeTeamName']) !== -1) 
                home_team = teams.Teams[i]['name'];
            if (!away_team && teams.Teams[i]['synonyms'].indexOf(fixture['awayTeamName']) !== -1) 
                away_team = teams.Teams[i]['name'];
        }
        if (fixture_type === 'previous_fixture') {
            console.log('Previous Fixture Selected');
            speech_text_response += "In the last match, " + home_team + " went up against " + away_team + " which ended " + 
                                    fixture['result']['goalsHomeTeam'] + " - " + fixture['result']['goalsAwayTeam'];
            if (fixture['result']['goalsHomeTeam'] > fixture['result']['goalsAwayTeam']) 
                speech_text_response += " with " + home_team + "'s win.\n";
            else if (fixture['result']['goalsHomeTeam'] < fixture['result']['goalsAwayTeam']) 
                speech_text_response += " with " + away_team + "'s win.\n";
            else 
                speech_text_response += " in a draw.\n";
            
            conv.ask(speech_text_response);
            conv.ask(new BasicCard({
                title: "Scores & Fixtures",
                //subtitle: "Previous Fixture",
                image: new Image({
                    url: getLeagueImageUrl(fixture['homeTeamName'], fixture['awayTeamName'], fixture_date, conv.data.LEAGUES),
                    alt:  fixture['homeTeamName'] + ' VS ' + fixture['awayTeamName'],
                }),
                text: "__" + fixture['homeTeamName'] + "__  " + fixture['result']['goalsHomeTeam'] + "  ⚽  " + 
                    fixture['result']['goalsAwayTeam'] + "  __" + fixture['awayTeamName'] + "__",
            }));
        }
        else if (fixture_type === 'upcoming_fixture') {
            console.log('Upcoming Fixture Selected');
            speech_text_response += home_team + " will go up against " + away_team + " on " + fixture_date_string + " at " + 
                                    fixture_time_string + ".";

            conv.ask(speech_text_response);
            conv.ask(new BasicCard({
                title: "Scores & Fixtures",
                //subtitle: "Upcoming Fixture",
                image: new Image({
                    url: getLeagueImageUrl(fixture['homeTeamName'], fixture['awayTeamName'], fixture_date, conv.data.LEAGUES),
                    alt:  fixture['homeTeamName'] + ' VS ' + fixture['awayTeamName'],
                }),
                text: "__" + fixture['homeTeamName'] + "__  VS  __" + fixture['awayTeamName'] + "__  \n" + 
                    fixture_date.toLocaleString(undefined, {
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric', 
                        hour: 'numeric', 
                        minute: 'numeric', 
                        hour12: true, 
                        timeZoneName: 'short', 
                    }),
            }));
        }
    }
    else {
        conv.ask("You did not select any fixture from the list or have selected an unknown fixture.");
    }
});

exports.fifaGalaxy = functions.https.onRequest(app);


/**
 * Action specific helper functions to be used in the intent handlers 
 * to allow for easy editing.
 */

/**
 * Make an HTTP request to the football-data.org API to get the name and 
 * ID of the given team.
 * Arguments:- 
 *      team: Any league/national football team 
 * Returns: JSON with name and ID of the given team 
 */
function getTeamNameAndId(team) {
    return new Promise((resolve, reject) => {
        const host = 'api.football-data.org';
        const path = '/v1/teams?name=' + escape(team);
        var team_name_id;
        http.get({
            host: host,
            path: path,
            headers: { 'X-Auth-Token': '7ec2b4ec0a5a426885f1bf55362d73de' }
        }, (raw_response) => {
            let body = ''; // var to store the raw response chunks
            raw_response.on('data', (raw_response_chunk) => { body += raw_response_chunk; }); // store each raw response chunk
            raw_response.on('end', () => {
                // After all the data has been received parse the JSON for desired data
                var parsed_response = JSON.parse(body);
                if (parsed_response['count'] === 1) {
                    team_name_id = {
                        'id': parsed_response['teams'][0]['id'],
                        'name': parsed_response['teams'][0]['name']
                    };
                }
                else {
                    var given_team = parsed_response['teams'].reduce((res_team, team) => {
                        return (team.id < res_team.id) ? team : res_team;
                    });
                    team_name_id = {
                        'id': given_team['id'],
                        'name': given_team['name']
                    };
                }
                console.log(team_name_id);
                resolve(team_name_id);
            });
            raw_response.on('error', (error) => {
                // If there is any error while handling the http GET request, handle the error appropriately
                console.log(`Error while calling the football-data.org API: ${error}`);
                reject(error);
            });
        });
    });
}

/**
 * Make an HTTP request to the football-data.org API to get the fixtures 
 * of the given team.
 * Arguments:- 
 *      team_id: ID of any league/national football team 
 * Returns: JSON with season, count and fixtures of the given team 
 */
function getTeamFixtures(team_id) {
    return new Promise((resolve, reject) => {
        const host = 'api.football-data.org';
        const path = '/v1/teams/' + team_id + '/fixtures/';
        http.get({
            host: host,
            path: path,
            headers: { 'X-Auth-Token': '7ec2b4ec0a5a426885f1bf55362d73de' }
        }, (raw_response) => {
            let body = ''; // var to store the raw response chunks
            raw_response.on('data', (raw_response_chunk) => { body += raw_response_chunk; }); // store each raw response chunk
            raw_response.on('end', () => {
                // After all the data has been received parse the JSON for desired data
                var parsed_response = JSON.parse(body);
                var team_fixtures = {
                    'season': parsed_response['season'],
                    'count': parsed_response['count'],
                    'fixtures': parsed_response['fixtures']
                };
                console.log(team_fixtures);
                resolve(team_fixtures);
            });
            raw_response.on('error', (error) => {
                // If there is any error while handling the http GET request, handle the error appropriately
                console.log(`Error while calling the football-data.org API: ${error}`);
                reject(error);
            });
        });
    });
}

/**
 * Get the previous and the upcoming/current match details of the 
 * given team or a team pair.
 * Arguments:- 
 *      team1: Any league/national football team (REQUIRED) 
 *      team2: Any league/national football team (OPTIONAL) 
 * Returns: JSON with previous and upcoming/current match details 
 */
function getPreviousUpcomingTeamFixtures(team1, team2 = null) {
    return new Promise((resolve, reject) => {
        getTeamNameAndId(team1).then((team1_name_id) => {
            if (!team1_name_id['id']) {
                return null;
            }
            return getTeamFixtures(team1_name_id['id']);
        }).then((team1_fixtures) => {
            var previous_fixture, upcoming_fixture;
            var fixtures;
            if (team2) {
                getTeamNameAndId(team2).then((team2_name_id) => {
                    if (!team2_name_id['id']) {
                        return null;
                    }
                    for (let i = 0; i < team1_fixtures['fixtures'].length; i++) {
                        if (team1_fixtures['fixtures'][i]['status'] === 'FINISHED' && 
                            (team1_fixtures['fixtures'][i]['awayTeamName'] === team2_name_id['name'] ||
                             team1_fixtures['fixtures'][i]['homeTeamName'] === team2_name_id['name']))
                            previous_fixture = team1_fixtures['fixtures'][i];
                    }
                    for (let i = (team1_fixtures['fixtures'].length - 1); i >= 0; i--) {
                        if (team1_fixtures['fixtures'][i]['status'] !== 'FINISHED' &&
                            (team1_fixtures['fixtures'][i]['awayTeamName'] === team2_name_id['name'] ||
                             team1_fixtures['fixtures'][i]['homeTeamName'] === team2_name_id['name']))
                            upcoming_fixture = team1_fixtures['fixtures'][i];
                    }
                    fixtures = {
                        'previous_fixture': previous_fixture,
                        'upcoming_fixture': upcoming_fixture
                    };
                    console.log(fixtures);
                    resolve(fixtures);
                    return fixtures;
                }).catch((error) => {
                    //console.log(error);
                    reject(error);
                });
            }
            else {
                for (let i = 0; i < team1_fixtures['fixtures'].length; i++) {
                    if (team1_fixtures['fixtures'][i]['status'] === 'FINISHED')
                        previous_fixture = team1_fixtures['fixtures'][i];
                }
                for (let i = (team1_fixtures['fixtures'].length - 1); i >= 0; i--) {
                    if (team1_fixtures['fixtures'][i]['status'] !== 'FINISHED')
                        upcoming_fixture = team1_fixtures['fixtures'][i];
                }
                fixtures = {
                    'previous_fixture': previous_fixture,
                    'upcoming_fixture': upcoming_fixture
                };
                console.log(fixtures);
                resolve(fixtures);
            }
            return fixtures;
        }).catch((error) => {
            //console.log(error);
            reject(error);
        });
    });
}

/**
 * Get league name of the given team.
 * Arguments:- 
 *      team: Any league/national football team 
 * Returns:- League's name of the given team 
 */
function getLeagueName(team) {
    for (var i=0; i<teams.Teams.length; i++) {
        if (teams.Teams[i]['synonyms'].indexOf(team) !== -1) 
            return teams.Teams[i]['league'];
    }
    return null;
}

/**
 * Get the image url of the league to which the given 
 * pair of teams belong.
 * Arguments:-
 *      team1: Any league/national football team 
 *      team2: Any league/national football team 
 *      date: Date of the fixture 
 *      LEAGUES: List of all the leagues along with their data 
 * Returns: URL of the image of the league 
 */
function getLeagueImageUrl(team1, team2, date, LEAGUES) {
    var league1 = getLeagueName(team1);
    var league2 = getLeagueName(team2);
    if (league1 === league2) 
        return LEAGUES[league1]['logo'];
    else {
        if (date.getMonth() > 4 && date.getMonth() < 7)
            return "https://eplfootballmatch.com/wp-content/uploads/2017/03/international-friendly-match-2z8pgeckcwr9lg4nwfo8i2-535x300.jpg";
        else
            return LEAGUES['Champions League']['logo'];
    }
}

/**
 * Get the speech/text response for the Google assistant according to 
 * the JSON response passed as a parameter to the function 
 * (Match-Score Intent).
 * Arguments:- 
 *      json_response: JSON response to be converted to speech/text response 
 *      team1: Any league/national football team (REQUIRED)
 *      team2: Any league/national football team (OPTIONAL)
 * Returns:- Speech/Text response for the Google Assistant 
 */
function jsonToSpeechText(json_response, team1, team2) {
    if (json_response['previous_fixture']) {
        var previous_fixture_date = new Date(json_response['previous_fixture']['date']);
        var previous_fixture_date_string = previous_fixture_date.toLocaleString(undefined, {
            weekday: 'long', 
            month: 'long', 
            day: 'numeric', 
        });
        // Previous Fixture Response 
        var speech_text_response = "In the last match, " + team1 + " went up against ";
        var home_team = '', away_team = '';
        var team1_goals, team2_goals;
        for (let i=0; i<teams.Teams.length; i++) {
            if (!home_team && teams.Teams[i]['synonyms'].indexOf(json_response['previous_fixture']['homeTeamName']) !== -1) 
                home_team = teams.Teams[i]['name'];
            if (!away_team && teams.Teams[i]['synonyms'].indexOf(json_response['previous_fixture']['awayTeamName']) !== -1) 
                away_team = teams.Teams[i]['name'];
        }

        if (team1 === home_team) {
            speech_text_response += away_team + ", which ended " + json_response['previous_fixture']['result']['goalsHomeTeam'] + 
                                    " - " + json_response['previous_fixture']['result']['goalsAwayTeam'];
            team1_goals = json_response['previous_fixture']['result']['goalsHomeTeam'];
            team2_goals = json_response['previous_fixture']['result']['goalsAwayTeam'];
        }
        else {
        speech_text_response += home_team + ", which ended " + json_response['previous_fixture']['result']['goalsAwayTeam'] + 
                                " - " + json_response['previous_fixture']['result']['goalsHomeTeam'];
        team1_goals = json_response['previous_fixture']['result']['goalsAwayTeam'];
        team2_goals = json_response['previous_fixture']['result']['goalsHomeTeam'];
        }
    
        if (team1_goals > team2_goals) 
                speech_text_response += " with " + team1 + "'s win.\n";
        else if (team1_goals < team2_goals) 
            speech_text_response += " with " + (!team2 ? (team1 + "'s loss.\n") : (team2 + "'s win.\n"));
        else 
            speech_text_response += " in a draw.\n";
    }
    else if (json_response['upcoming_fixture']) {
        let upcoming_fixture_date = new Date(json_response['upcoming_fixture']['date']);
        let upcoming_fixture_date_string = upcoming_fixture_date.toLocaleString(undefined, {
            weekday: 'long', 
            month: 'long', 
            day: 'numeric', 
        });
        let upcoming_fixture_time_string = upcoming_fixture_date.toLocaleString(undefined, {
            hour: 'numeric', 
            minute: 'numeric', 
            hour12: true, 
        });
        // Upcoming Fixture Response Only (No Previous Fixture Response)
        home_team = '', away_team = '';
        for (let i=0; i<teams.Teams.length; i++) {
            if (!home_team && teams.Teams[i]['synonyms'].indexOf(json_response['upcoming_fixture']['homeTeamName']) !== -1) 
                home_team = teams.Teams[i]['name'];
            if (!away_team && teams.Teams[i]['synonyms'].indexOf(json_response['upcoming_fixture']['awayTeamName']) !== -1) 
                away_team = teams.Teams[i]['name'];
        }
        if (team2)
            speech_text_response += home_team + " will go up against " + away_team + " on " + upcoming_fixture_date_string + " at " + 
                                    upcoming_fixture_time_string + ".";
        else
            speech_text_response += team1 + " will go up against " + (team1 === home_team ? away_team : home_team) + 
                                    " on " + upcoming_fixture_date_string + " at " + upcoming_fixture_time_string + ".";
        
        return speech_text_response;
    }
    if (json_response['upcoming_fixture']) {
        var upcoming_fixture_date = new Date(json_response['upcoming_fixture']['date']);
        var upcoming_fixture_date_string = upcoming_fixture_date.toLocaleString(undefined, {
            weekday: 'long', 
            month: 'long', 
            day: 'numeric', 
        });
        var upcoming_fixture_time_string = upcoming_fixture_date.toLocaleString(undefined, {
            hour: 'numeric', 
            minute: 'numeric', 
            hour12: true, 
        });
        // Upcoming Fixture Response 
        home_team = '', away_team = '';
        for (let i=0; i<teams.Teams.length; i++) {
            if (!home_team && teams.Teams[i]['synonyms'].indexOf(json_response['upcoming_fixture']['homeTeamName']) !== -1) 
                home_team = teams.Teams[i]['name'];
            if (!away_team && teams.Teams[i]['synonyms'].indexOf(json_response['upcoming_fixture']['awayTeamName']) !== -1) 
                away_team = teams.Teams[i]['name'];
        }
        if (!team2)
            speech_text_response += "The club's next game will be on " + upcoming_fixture_date_string + " at " + 
                                    upcoming_fixture_time_string + ", where they will take on " + 
                                    (team1 === home_team ? away_team : home_team) + ".";
        else 
            speech_text_response += "Their next game wil be on " + upcoming_fixture_date_time + ".";
    }

    return speech_text_response;
}