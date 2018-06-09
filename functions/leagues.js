/**
* This file contains the constant strings to be used in the main code logic 
* (fulfillment of Google Actions) to allow for easy editing.
* The constant strings contains facts about leagues related to football.
*/

/* eslint quote-props: ["error", "always"] */
/* eslint quotes: ["error", "double"] */

// eslint-disable-next-line quotes
const {Suggestions} = require('actions-on-google');

exports.Leagues = [
  {
    "name": "Bundesliga 1",
    "country": "Germany",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Bundesliga_logo_%282017%29.svg/300px-Bundesliga_logo_%282017%29.svg.png",
    "facts": [
      "The Bundesliga is a professional association football league in Germany and the football league with the highest average stadium attendance worldwide.",
      "At the top of the German football league system, the Bundesliga is Germany's primary football competition.",
      "The Bundesliga comprises 18 teams and operates on a system of promotion and relegation with the 2. Bundesliga.",
      "The Bundesliga was founded in 1962 in Dortmund and the first season started in 1963.",
    ],
  },
  {
    "name": "Ligue 1",
    "country": "France",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/Ligue_1_Logo.svg/1200px-Ligue_1_Logo.svg.png",
    "facts": [
      "Ligue 1, also called Ligue 1 Conforama for sponsorship reasons with Conforama, is a French professional league for men's association football clubs.",
      "Ligue 1 ranks 10th among professional sports leagues in the world by revenue (1,644 € million).",
      "Ligue 1 is contested by 20 clubs and operates on a system of promotion and relegation with Ligue 2.",
      "At the top of the French football league system, it is the country's primary football competition.",
    ],
  },
  {
    "name": "La Liga",
    "country": "Spain",
    "logo": "https://files.laliga.es/seccion_logos/laliga-v-600x600.png",
    "facts": [
      "The Primera División, commonly known as La Liga and as La Liga Santander for sponsorship reasons with Santander, is the men's top professional association football division of the Spanish football league system.",
      "La Liga is contested by 20 teams, with the three lowest-placed teams relegated to the Segunda División and replaced by the top two teams in that division plus the winner of a play-off.",
      "La Liga is one of the most popular professional sports leagues in the world.",
      "Its clubs have won the most UEFA Champions League, UEFA Europa League, UEFA Super Cup, and FIFA Club World Cup titles, and its players have accumulated the highest number of (FIFA) Ballon d'Or awards.",
    ],
  },
  {
    "name": "Premier League",
    "country": "England",
    "logo": "https://images.supersport.com/2017/8/Premier_League_logo2016_300x300.png",
    "facts": [
      "The Premier League is the top level of the English football league system.",
      "Contested by 20 clubs, it operates on a system of promotion and relegation with the English Football League (EFL).",
      "The Premier League is the most-watched sports league in the world.",
      "The competition was formed as the FA Premier League on 20 February 1992.",
    ],
  },
  {
    "name": "Serie A",
    "country": "Italy",
    "logo": "https://4.bp.blogspot.com/-3d5o6B2CVH8/VpkvUqcMVTI/AAAAAAAA2O8/ONQASmjz69U/s550/New-Serie-A-Logo-Revealed%2B%25283%2529.jpg",
    "facts": [
      "Serie A, also called Serie A TIM due to sponsorship by TIM, is a professional league competition for football clubs located at the top of the Italian football league system.",
      "The winner of Serie A is awarded the Coppa Campioni d'Italia.",
      "Serie A is regarded as one of the best football leagues in the world and it is often depicted as the most tactical national league.",
      "Juventus, Milan and Inter, along with Roma, Fiorentina, Lazio and Napoli, are known as the Seven Sisters of Italian football.",
    ],
  },
  {
    "name": "Champions League",
    "country": "Europe",
    "logo": "https://upload.wikimedia.org/wikipedia/lt/thumb/6/66/UEFA_Champions_League.png/625px-UEFA_Champions_League.png",
    "facts": [
      "The UEFA Champions League is an annual continental club football competition organised by the Union of European Football Associations and contested by top-division European clubs.",
      "Real Madrid is the most successful club in the competition's history.",
      "The winner of the UEFA Champions League qualifies for the UEFA Super Cup and the FIFA Club World Cup.",
      "The UEFA Champions League anthem, officially titled simply as “Champions League”, was written by Tony Britten, and is an adaptation of George Frideric Handel’s Zadok the Priest.",
      "Any team that wins the Champions League three years in a row or five times overall wins the right to retain a full-sized replica of the trophy (UEFA retains the original at all times).",
      "The fastest UEFA Champions League goal was scored 10.2 seconds after kick-off by Bayern Munich’s Roy Makaay against Real Madrid in 2007.",
    ],
  },
  {
    "name": "FIFA World Cup",
    "country": "World",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/2018_FIFA_World_Cup.svg/1200px-2018_FIFA_World_Cup.svg.png",
    "facts": [
      "The FIFA World Cup, often simply called the World Cup, is an international association football competition contested by the senior men's national teams of the members of the Fédération Internationale de Football Association (FIFA), the sport's global governing body.",
    ],
  }
];
