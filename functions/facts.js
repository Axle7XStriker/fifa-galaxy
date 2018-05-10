/**
* This file contains the constant strings to be used in the main code logic 
* (fulfillment of Google Actions) to allow for easy editing.
* The constant strings contains facts about players/teams/leagues related 
* to football.
*/

/* eslint quote-props: ["error", "always"] */
/* eslint quotes: ["error", "double"] */

// eslint-disable-next-line quotes
const {Suggestions} = require('actions-on-google');

exports.Players = [
  {
    "name": "Lionel Messi",
    "full_name": "Lionel Andrés Messi Cuccittini",
    "date_of_birth": "24 June 1987",
    "nationality": "Argentina",
    "club": "Barcelona",
    "playing_position": "Forward",
    "facts": [
      "His full name is Luis Lionel Andres Messi.",
      "Messi was born on June 24, 1987 in Rosario, Argentina.",
      "Messi shares his birthplace with the Argentinian revolutionary Che Guevera.",
      "His family is of middle-class Italian origin. His father, Jorge, was a steelworker, and he also coached the local youth football team.",
      "His international debut for Argentina lasted just 47 seconds when he received a red card after coming on as a substitute",
      "At the age of 17, he made his league debut against RCD Espanyol and became the third youngest person ever to play on Barcelona. At that time he was also the youngest player to ever score for Barcelona.",
      "Messi is a Goodwill Ambassador for UNICEF. He also works in support of people suffering from Fragile X Syndrome which is a kind of autism",
      "Whenever he scores a goal, his simple celebration of raising his arms in the air is a gesture of gratitude to his grandmother who passed away when he was 10",
      "Messi is the youngest player to be nominated for FIFA World Player of the Year",
      "He is the first player to win the FIFA World Player of the Year 4 year in a row",
      "Messi holds the world record for most goals in one year.",
    ],
    "fact_prefix": "Okay, here's a fact about Lionel Messi.",
  },
  {
    "name": "Cristiano Ronaldo",
    "full_name": "Cristiano Ronaldo dos Santos Aveiro",
    "date_of_birth": "5 February 1985",
    "nationality": "Portugal",
    "club": "Real Madrid",
    "playing_position": "Forward",
    "facts": [
      "His full name is Cristiano Ronaldo dos Santos Aveiro",
      "Ronaldo was born on February 5, 1985 in Madeira, Portugal.",
      "He got the name \"Ronaldo\" after then-U.S. president Ronald Reagan, who was his father's favourite actor.",
      "He is the top scorer of the Portugal national team, playing 147 games and scoring 79 goals.",
      "At 17 years old, he made his debut with Portugal's national team against Kazakhstan.",
      "The speed of Ronaldos free kick is a whopping 130km/hour, or 31.1m/second.",
      "Ronaldo is currently the highest paid soccer player in the world.",
      "Ronaldo has a fashion boutique based out of his hometown, Madeira, Portugal. Its called CR7, a combination of his initials and jersey number.",
      "Ronaldo was expelled from school for throwing a chair at the teacher.",
      "He is the only player to win four European Golden Shoe awards.",
    ],
    "fact_prefix": "Okay, here's a fact about Cristiano Ronaldo.",
  },
  {
    "name": "Neymar",
    "full_name": "Neymar da Silva Santos Júnior",
    "date_of_birth": "5 February 1992",
    "nationality": "Brazil",
    "club": "PSG",
    "playing_position": "Forward",
    "facts": [
      "His full name is Neymar da Silva Santos Júnior",
      "Neymar was born on February 5, 1992 in Mogi das Cruzes, Brazil.",
      "He is the only Brazilian athlete to be featured on the cover of TIME magazine",
      "Each year, Neymar organizes a charity match with fellow Brazilian footballer Nenê in Nenê’s hometown of Jundiaí, with the purpose of raising food for needy families.",
      "Neymar has only played for Santos before moving to Barcelona.",
      "The Brazilian became father to David Lucca when he was just 19 years old.",
      "He played futsal and street pickup games growing up in Sao Paulo, Brazil, and began his career playing for Santos's junior team when he was 11.",
      "In 2012, he was featured on the cover of the Pro Evolution Soccer video game along with Cristiano Ronaldo.",
      "His footballing idols are Cristiano Ronaldo, Wayne Rooney, Andres Iniesta and Xavi.",
      "Neymar is the 11th-highest scorer of all time for the Brazilian national team.",
    ],
    "fact_prefix": "Okay, here's a fact about Neymar.",
  },
  {
    "name": "Gareth Bale",
    "full_name": "Gareth Frank Bale",
    "date_of_birth": "16 July 1989",
    "nationality": "Welsh",
    "club": "Real Madrid",
    "playing_position": "Forward",
    "facts": [
      "His full name is Gareth Frank Bale",
      "Gareth Frank Bale was born on July 16, 1989, in Cardiff, Wales.",
      "His father Frank is a school teacher and his mother Debbi is an operation manager.",
      "Bale’s hero is “Manchester United” international, Ryan Giggs a fellow Welshman.",
      "He lives in Madrid with his partner Emma Rhys-Jones and his daughter Alba Violet.",
      "He attended Églways Newydd, Primary School at Whitchurch, Cardiff. At school, he was keen at athletic, rugby and hockey besides football.",
      "Bale scored his first goal in the league, from a free kick against “Derby County.” The match ended in a 2-2 draw.",
    ],
    "fact_prefix": "Okay, here's a fact about Gareth Bale.",
  },
  {
    "name": "Luis Suárez",
    "full_name": "Luis Alberto Suárez Díaz",
    "date_of_birth": "24 January 1987",
    "nationality": "Uruguay",
    "club": "Barcelona",
    "playing_position": "Forward",
    "facts": [
      "His full name is Luis Alberto Suárez Díaz",
    ],
    "fact_prefix": "Okay, here's a fact about Luis Suárez.",
  },
  {
    "name": "Karim Benzema",
    "full_name": "Karim Mostafa Benzema",
    "date_of_birth": "19 December 1987",
    "nationality": "France",
    "club": "Real Madrid",
    "playing_position": "Forward",
    "facts": [
      "His full name is Karim Mostafa Benzema",
    ],
    "fact_prefix": "Okay, here's a fact about Karim Benzema.",
  },
  {
    "name": "Sergio Ramos",
    "full_name": "Sergio Ramos García",
    "date_of_birth": "30 March 1986",
    "nationality": "Spain",
    "club": "Real Madrid",
    "playing_position": "Defender",
    "facts": [
      "His full name is Sergio Ramos García",
    ],
    "fact_prefix": "Okay, here's a fact about Sergio Ramos.",
  },
  {
    "name": "Andrés Iniesta",
    "full_name": "Andrés Iniesta Luján",
    "date_of_birth": "11 May 1984",
    "nationality": "Spain",
    "club": "Barcelona",
    "playing_position": "Midfielder",
    "facts": [
      "His full name is Andrés Iniesta Luján",
    ],
    "fact_prefix": "Okay, here's a fact about Andrés Iniesta.",
  },
  {
    "name": "Zinedine Zidane",
    "full_name": "Zinedine Yazid Zidane",
    "date_of_birth": "23 June 1972",
    "nationality": "France",
    "club": "Real Madrid",
    "playing_position": "Manager",
    "facts": [
      "His full name is Zinedine Yazid Zidane",
    ],
    "fact_prefix": "Okay, here's a fact about Zinedine Zidane.",
  },
  {
    "name": "Ronaldinho",
    "full_name": "Ronaldo de Assis Moreira",
    "date_of_birth": "21 March 1980",
    "nationality": "Brazil",
    "club": "PSG",
    "playing_position": "Midfielder",
    "facts": [
      "His full name is Ronaldo de Assis Moreira",
    ],
    "fact_prefix": "Okay, here's a fact about Ronaldinho.",
  },
  {
    "name": "Marcelo",
    "full_name": "Marcelo Vieira da Silva Júnior",
    "date_of_birth": "12 May 1988",
    "nationality": "Brazil",
    "club": "Real Madrid",
    "playing_position": "Defender",
    "facts": [
      "His full name is Marcelo Vieira da Silva Júnior",
    ],
    "fact_prefix": "Okay, here's a fact about Marcelo.",
  },
  {
    "name": "Paulo Dybala",
    "full_name": "Paulo Bruno Exequiel Dybala",
    "date_of_birth": "15 November 1993",
    "nationality": "Argentina",
    "club": "Juventus",
    "playing_position": "Forward",
    "facts": [
      "His full name is Paulo Bruno Exequiel Dybala",
    ],
    "fact_prefix": "Okay, here's a fact about Paulo Dybala.",
  },
  {
    "name": "Zlatan Ibrahimović",
    "full_name": "Zlatan Ibrahimović",
    "date_of_birth": "3 October 1981",
    "nationality": "Sweden",
    "club": "LA Galaxy",
    "playing_position": "Forward",
    "facts": [
      "",
    ],
    "fact_prefix": "Okay, here's a fact about Zlatan Ibrahimović.",
  },
  {
    "name": "Keylor Navas",
    "full_name": "Keylor Antonio Navas Gamboa",
    "date_of_birth": "15 December 1986",
    "nationality": "Costa Rica",
    "club": "Real Madrid",
    "playing_position": "Goalkeeper",
    "facts": [
      "His full name is Keylor Antonio Navas Gamboa",
    ],
    "fact_prefix": "Okay, here's a fact about Keylor Navas.",
  },
  {
    "name": "Marco Asensio",
    "full_name": "Marco Asensio Willemsen",
    "date_of_birth": "21 January 1996",
    "nationality": "Spain",
    "club": "Real Madrid",
    "playing_position": "Midfielder",
    "facts": [
      "His full name is Marco Asensio Willemsen",
    ],
    "fact_prefix": "Okay, here's a fact about Marco Asensio.",
  },
  {
    "name": "Isco",
    "full_name": "Francisco Román Alarcón Suárez",
    "date_of_birth": "21 April 1992",
    "nationality": "Spain",
    "club": "Real Madrid",
    "playing_position": "Midfielder",
    "facts": [
      "His full name is Francisco Román Alarcón Suárez",
    ],
    "fact_prefix": "Okay, here's a fact about Isco.",
  },
  {
    "name": "Luka Modrić",
    "full_name": "Luka Modrić",
    "date_of_birth": "9 September 1985",
    "nationality": "Croatia",
    "club": "Real Madrid",
    "playing_position": "Midfielder",
    "facts": [
      "",
    ],
    "fact_prefix": "Okay, here's a fact about Luka Modrić.",
  },
  {
    "name": "Toni Kroos",
    "full_name": "Toni Kroos",
    "date_of_birth": "4 January 1990",
    "nationality": "German",
    "club": "Real Madrid",
    "playing_position": "Midfielder",
    "facts": [
      "",
    ],
    "fact_prefix": "Okay, here's a fact about Toni Kroos.",
  },
  {
    "name": "Casemiro",
    "full_name": "Carlos Henrique Casimiro",
    "date_of_birth": "23 February 1992",
    "nationality": "Brazil",
    "club": "Real Madrid",
    "playing_position": "Midfielder",
    "facts": [
      "His full name is Carlos Henrique Casimiro",
    ],
    "fact_prefix": "Okay, here's a fact about Casemiro.",
  },
  {
    "name": "Raphaël Varane",
    "full_name": "Raphaël Xavier Varane",
    "date_of_birth": "25 April 1993",
    "nationality": "France",
    "club": "Real Madrid",
    "playing_position": "Defender",
    "facts": [
      "His full name is Raphaël Xavier Varane",
    ],
    "fact_prefix": "Okay, here's a fact about Raphaël Varane.",
  },
  {
    "name": "Mateo Kovačić",
    "full_name": "Mateo Kovačić",
    "date_of_birth": "6 May 1994",
    "nationality": "Croatia",
    "club": "Real Madrid",
    "playing_position": "Midfielder",
    "facts": [
      "",
    ],
    "fact_prefix": "Okay, here's a fact about Mateo Kovačić.",
  },
  {
    "name": "Lucas Vázquez",
    "full_name": "Lucas Vázquez Iglesias",
    "date_of_birth": "1 July 1991",
    "nationality": "Spain",
    "club": "Real Madrid",
    "playing_position": "Forward",
    "facts": [
      "His full name is Lucas Vázquez Iglesias",
    ],
    "fact_prefix": "Okay, here's a fact about Lucas Vázquez.",
  },
  {
    "name": "Nacho",
    "full_name": "José Ignacio Fernández Iglesias",
    "date_of_birth": "18 January 1990",
    "nationality": "Spain",
    "club": "Real Madrid",
    "playing_position": "Defender",
    "facts": [
      "His full name is José Ignacio Fernández Iglesias",
    ],
    "fact_prefix": "Okay, here's a fact about Nacho.",
  },
  {
    "name": "Carvajal",
    "full_name": "Daniel Carvajal Ramos",
    "date_of_birth": "11 January 1992",
    "nationality": "Spain",
    "club": "Real Madrid",
    "playing_position": "Defender",
    "facts": [
      "His full name is Daniel Carvajal Ramos",
    ],
    "fact_prefix": "Okay, here's a fact about Carvajal.",
  },
  {
    "name": "Kiko Casilla",
    "full_name": "Francisco Casilla Cortés",
    "date_of_birth": "2 October 1986",
    "nationality": "Spain",
    "club": "Real Madrid",
    "playing_position": "Goalkeeper",
    "facts": [
      "His full name is Francisco Casilla Cortés",
    ],
    "fact_prefix": "Okay, here's a fact about Kiko Casilla.",
  },
  {
    "name": "Philippe Coutinho",
    "full_name": "Philippe Coutinho Correia",
    "date_of_birth": "12 June 1992",
    "nationality": "Brazil",
    "club": "Barcelona",
    "playing_position": "Midfielder",
    "facts": [
      "His full name is Philippe Coutinho Correia",
    ],
    "fact_prefix": "Okay, here's a fact about Philippe Coutinho.",
  },
];

exports.Teams = [

];

exports.Leagues = [

];