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
} = require('actions-on-google');

const {values, concat, random, randomPop} = require('./utils');
const facts = require('./facts');

const app = dialogflow({
    debug: true,
    init: () => ({
        data: {
            PLAYERS: facts.Players.reduce((obj, player) => {
                obj[player.name] = player.facts.slice();
                return obj;
            }, {}),
            TEAMS: facts.Teams.reduce((obj, team) => {
                obj[team.name] = team.facts.slice();
                return obj;
            }, {}),
            LEAGUES: facts.Leagues.reduce((obj, league) => {
                obj[league.name] = league.facts.slice();
                return obj;
            }, {}),
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
app.intent('FIFA-Facts', (conv, {player, team, league}) => {console.log("FIFA-Facts Intent");
    const fact_prefix = "Okay, here's a fact about ";
    
    // Check if any parameter is set or not 
    if (player) {
        const {PLAYERS} = conv.data;
        conv.ask(new SimpleResponse({
            speech: fact_prefix + player + ".\n" + random(PLAYERS[player]),
            text: random(PLAYERS[player]),
        }));
    }
    else if (team) {
        const {TEAMS} = conv.data;
        conv.ask(new SimpleResponse({
            speech: fact_prefix + team + ".\n" + random(TEAMS[team]),
            text: random(TEAMS[team]),
        }));
    }
    else if (league) {
        const {LEAGUES} = conv.data;
        conv.ask(new SimpleResponse({
            speech: fact_prefix + league + ".\n" + random(LEAGUES[league]),
            text: random(LEAGUES[league]),
        }));
    }
    else {
        conv.ask("Sorry! I don't know any fact related to FIFA");
    }
    
});

/**
 * Respond with a particular team's or a team pair's previous match result 
 * and upcoming/current match details.
 * Arguments:- 
 *      team1: Any league/national football team (REQUIRED) 
 *      team2: Any league/national football team (OPTIONAL) 
 */
app.intent('Match-Score', (conv, {team1, team2}) => {console.log("Match-Score Intent");
    // Check if a single team or a pair of team is given 
    if (team1) {
        return getPreviousUpcomingTeamFixtures(team1, team2).then((fixtures) => {
            var previous_fixture = fixtures['previous_fixture'];
            var upcoming_fixture = fixtures['upcoming_fixture'];
            var previous_fixture_details = '';
            var upcoming_fixture_details = '';
            if (previous_fixture)
                previous_fixture_details = previous_fixture['homeTeamName'] + ' VS ' + previous_fixture['awayTeamName'] + '\n\t' + previous_fixture['result']['goalsHomeTeam'] + ' - ' + previous_fixture['result']['goalsAwayTeam'] + '\n';
            if (upcoming_fixture)
                upcoming_fixture_details = upcoming_fixture['homeTeamName'] + ' VS ' + upcoming_fixture['awayTeamName'] + '\n\t on ' + upcoming_fixture['date'] + '\n';
            conv.ask(new SimpleResponse({
                speech: previous_fixture_details + '\n' + upcoming_fixture_details,
                text: previous_fixture_details + '\n' + upcoming_fixture_details,
            }));
            //conv.ask(new BasicCard({
            //    title: previous_fixture['homeTeamName'] + '        ' + previous_fixture['awayTeamName'],
            //    //subtitle: previous_fixture['result']['goalsHomeTeam'] + '  -  ' + previous_fixture['result']['goalsAwayTeam'],
            //    image: new Image({
            //        url: 'http://upload.wikimedia.org/wikipedia/de/3/3f/Real_Madrid_Logo.svg',
            //        alt:  previous_fixture['homeTeamName'] + ' VS ' + previous_fixture['awayTeamName'],
            //        display: 'WHITE',
            //    }),
            //    //text: '__' + previous_fixture['homeTeamName'] + '__  __' + previous_fixture['awayTeamName'] + '__  \n' + 
            //    text: '__' + previous_fixture['result']['goalsHomeTeam'] + '__  -  __' + previous_fixture['result']['goalsAwayTeam'] + '__',
            //}));
            conv.ask(new List({
                items: {
                    'previous_match': {
                        title: previous_fixture['homeTeamName'] + '        ' + previous_fixture['awayTeamName'],
                        description: previous_fixture['result']['goalsHomeTeam'] + '  -  ' + previous_fixture['result']['goalsAwayTeam'],
                        image: new Image({
                            url: 'http://upload.wikimedia.org/wikipedia/de/3/3f/Real_Madrid_Logo.svg',
                            alt:  previous_fixture['homeTeamName'] + ' VS ' + previous_fixture['awayTeamName'],
                            display: 'WHITE',
                        }),
                    },
                    'upcoming_match': {
                        title: upcoming_fixture['homeTeamName'] + '        ' + upcoming_fixture['awayTeamName'],
                        description: upcoming_fixture['result']['goalsHomeTeam'] + '  -  ' + upcoming_fixture['result']['goalsAwayTeam'],
                        image: new Image({
                            url: 'http://upload.wikimedia.org/wikipedia/de/3/3f/Real_Madrid_Logo.svg',
                            alt:  previous_fixture['homeTeamName'] + ' VS ' + previous_fixture['awayTeamName'],
                            display: 'WHITE',
                        }),
                    },
                },
            }));
/* For Reference
            conv.ask(new BasicCard({
                text: `This is a basic card.  Text in a basic card can include "quotes" and
                most other unicode characters including emoji 📱.  Basic cards also support
                some markdown formatting like *emphasis* or _italics_, **strong** or
                __bold__, and ***bold itallic*** or ___strong emphasis___ as well as other
                things like line  \nbreaks`, // Note the two spaces before '\n' required for
                                             // a line break to be rendered in the card.
                subtitle: 'This is a subtitle',
                title: 'Title: this is a title',
                buttons: new Button({
                  title: 'This is a button',
                  url: 'https://assistant.google.com/',
                }),
                image: new Image({
                  url: 'http://upload.wikimedia.org/wikipedia/de/3/3f/Real_Madrid_Logo.svg',
                  alt: 'Image alternate text',
                  display: 'CROPPED',
                }),
            }));
*/
            return fixtures;
        }).catch((error) => {
            conv.ask("I am not able to connect to the servers at the moment. Please come back later after some time to get the latest updates on your favourite teams.");
        });
    }
    else {
        conv.ask("Sorry! I didn't get that. Can you say it again?")
    }
    console.log('Done');
    
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
            path: path
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
            path: path
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
