/**
* This file contains the constant strings to be used in the main code logic 
* (fulfillment of Google Actions) to allow for easy editing.
* The constant strings contains facts teams related to football.
*/

// Note:- (✔) indicate team players added

/* eslint quote-props: ["error", "always"] */
/* eslint quotes: ["error", "double"] */

// eslint-disable-next-line quotes
const {Suggestions} = require('actions-on-google');

exports.Teams = [
  /* Football Clubs */
  { 
    "name": "AC Milan",/*✔*/
    "synonyms": [ "A.C. Milan", "Milan", "ACM", "AC Milan" ],
    "league": "Serie A",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/2000px-Logo_of_AC_Milan.svg.png",
    "facts": [
      "AC Milan is a professional football club based in Italy, that competes in Serie A.",
    ],
  },
  { 
    "name": "Amiens",
    "synonyms": [ "Amiens", "Amiens SC", "ASC" ],
    "league": "Ligue 1",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Amiens_SC_Logo.svg/1200px-Amiens_SC_Logo.svg.png",
    "facts": [
      "Amiens is a professional football club based in France, that competes in Ligue 1.",
    ],
  },
  { 
    "name": "Angers",
    "synonyms": [ "Angers", "Angers SCO", "SCO" ],
    "league": "Ligue 1",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Angers_SCO_logo.svg/1200px-Angers_SCO_logo.svg.png",
    "facts": [
      "Angers is a professional football club based in France, that competes in Ligue 1.",
    ],
  },
  { 
    "name": "Arsenal",/*✔*/
    "synonyms": [ "Arsenal", "Arsenal F.C.", "AFC", "Arsenal FC" ],
    "league": "Premier League",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/1200px-Arsenal_FC.svg.png",
    "facts": [
      "Arsenal is a professional football club based in England, that competes in Premier League.",
    ],
  },
  { 
    "name": "Atalanta",
    "synonyms": [ "Atalanta", "Atalanta BC", "ATA" ],
    "league": "Serie A",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/AtalantaBC.svg/1200px-AtalantaBC.svg.png",
    "facts": [
      "Atalanta is a professional football club based in Italy, that competes in Serie A.",
    ],
  },
  { 
    "name": "Atletico Madrid",/*✔*/
    "synonyms": 
     [ "Atlético Madrid",
       "Atlético",
       "Club Atlético de Madrid",
       "ATM",
       "Atletico",
       "Atletico Madrid" ],
    "league": "La Liga",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Atletico_Madrid_2017_logo.svg/1200px-Atletico_Madrid_2017_logo.svg.png",
    "facts": [
      "Atlético Madrid is a professional football club based in Spain, that competes in La Liga.",
    ],
  },
  { 
    "name": "Augsburg",
    "synonyms": [ "Augsburg", "FC Augsburg", "FCA" ],
    "league": "Bundesliga 1",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/e/e1/Wappen_FC_Augsburg_1969.png",
    "facts": [
      "Augsburg is a professional football club based in Germany, that competes in Bundesliga.",
    ],
  },
  { 
    "name": "Barcelona",/*✔*/
    "synonyms": [ "Barcelona", "Barca", "Barça", "FC Barcelona", "FCB" ],
    "league": "La Liga",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png",
    "facts": [
      "Barcelona is a professional football club based in Spain, that competes in La Liga.",
    ],
  },
  { 
    "name": "Bayern Munich",/*✔*/
    "synonyms": 
     [ "Bayern Munich",
       "Bayern",
       "FC Bayern Munich",
       "FC Bayern München",
       "BAY" ],
    "league": "Bundesliga 1",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Logo_FC_Bayern_M%C3%BCnchen_%282002%E2%80%932017%29.svg/2000px-Logo_FC_Bayern_M%C3%BCnchen_%282002%E2%80%932017%29.svg.png",
    "facts": [
      "Bayern Munich is a professional football club based in Germany, that competes in Bundesliga.",
    ],
  },
  { 
    "name": "Benevento",
    "synonyms": [ "Benevento", "Benevento Calcio", "BEN" ],
    "league": "Serie A",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/c/cf/9189-benevento.png",
    "facts": [
      "Benevento is a professional football club based in Italy, that competes in Serie A.",
    ],
  },
  { 
    "name": "Bilbao",
    "synonyms": 
     [ "Bilbao",
       "Athletic Club",
       "Athletic Bilbao",
       "Athletic",
       "ATH",
       "BIL" ],
    "league": "La Liga",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Club_Athletic_Bilbao_logo.svg/1200px-Club_Athletic_Bilbao_logo.svg.png",
    "facts": [
      "Bilbao is a professional football club based in Spain, that competes in La Liga.",
    ],
  },
  { 
    "name": "Bologna",
    "synonyms": [ "Bologna", "Bologna FC", "BOL" ],
    "league": "Serie A",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/Bolognafc.svg/1200px-Bolognafc.svg.png",
    "facts": [
      "Bologna is a professional football club based in Italy, that competes in Serie A.",
    ],
  },
  { 
    "name": "Bordeaux",
    "synonyms": [ "Bordeaux", "FC Girondins de Bordeaux", "GdB" ],
    "league": "Ligue 1",
    "logo": "https://vignette.wikia.nocookie.net/fifa/images/5/5f/Bordeaux.png",
    "facts": [
      "Bordeaux is a professional football club based in France, that competes in Ligue 1.",
    ],
  },
  { 
    "name": "Borussia Dortmund",/*✔*/
    "synonyms": [ "Borussia Dortmund", "Dortmund", "Borussia", "BVB" ],
    "league": "Bundesliga 1",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/2000px-Borussia_Dortmund_logo.svg.png",
    "facts": [
      "Borussia Dortmund is a professional football club based in Germany, that competes in Bundesliga.",
    ],
  },
  { 
    "name": "Bournemouth",
    "synonyms": [ "Bournemouth", "AFC Bournemouth", "AFCB" ],
    "league": "Premier League",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/AFC_Bournemouth.svg/200px-AFC_Bournemouth.svg.png",
    "facts": [
      "Bournemouth is a professional football club based in England, that competes in Premier League.",
    ],
  },
  { 
    "name": "Bremen",
    "synonyms": [ "Bremen", "Werder Bremen", "SVW" ],
    "league": "Bundesliga 1",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/SV-Werder-Bremen-Logo.svg/2000px-SV-Werder-Bremen-Logo.svg.png",
    "facts": [
      "Bremen is a professional football club based in Germany, that competes in Bundesliga.",
    ],
  },
  { 
    "name": "Brighton",
    "synonyms": [ "Brighton", "Brighton & Hove Albion", "BHAFC" ],
    "league": "Premier League",
    "logo": "https://vignette.wikia.nocookie.net/fifa/images/0/05/Brighton_%26_Hove_Albion_logo..png/revision/latest?cb=20161223191226",
    "facts": [
      "Brighton is a professional football club based in England, that competes in Premier League.",
    ],
  },
  { 
    "name": "Burnley",
    "synonyms": [ "Burnley", "Burnley FC", "BFC" ],
    "league": "Premier League",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/6/62/Burnley_F.C._Logo.svg/1200px-Burnley_F.C._Logo.svg.png",
    "facts": [
      "Burnley is a professional football club based in England, that competes in Premier League.",
    ],
  },
  { 
    "name": "Caen",
    "synonyms": [ "Caen", "SM Caen", "SMC" ],
    "league": "Ligue 1",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/SM_Caen_2016_logo.svg/1200px-SM_Caen_2016_logo.svg.png",
    "facts": [
      "Caen is a professional football club based in France, that competes in Ligue 1.",
    ],
  },
  { 
    "name": "Cagliari",
    "synonyms": [ "Cagliari", "Cagliari Calcio", "CAG" ],
    "league": "Serie A",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/6/61/Cagliari_Calcio_1920.svg/1200px-Cagliari_Calcio_1920.svg.png",
    "facts": [
      "Cagliari is a professional football club based in Italy, that competes in Serie A.",
    ],
  },
  { 
    "name": "Celta Vigo",
    "synonyms": [ "Celta Vigo", "RC Celta de Vigo", "CEL", "VIG" ],
    "league": "La Liga",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/RC_Celta_de_Vigo_logo.svg/1200px-RC_Celta_de_Vigo_logo.svg.png",
    "facts": [
      "Celta Vigo is a professional football club based in Spain, that competes in La Liga.",
    ],
  },
  { 
    "name": "Chelsea",/*✔*/
    "synonyms": [ "Chelsea", "Chelsea F.C.", "CFC", "Chelsea FC" ],
    "league": "Premier League",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/1200px-Chelsea_FC.svg.png",
    "facts": [
      "Chelsea is a professional football club based in England, that competes in Premier League.",
    ],
  },
  { 
    "name": "Chievo Verona",
    "synonyms": [ "Chievo", "AC Chievo Verona", "CHI" ],
    "league": "Serie A",
    "logo": "https://upload.wikimedia.org/wikipedia/en/4/4a/Chievo-verona-logo.png",
    "facts": [
      "Chievo Verona is a professional football club based in Italy, that competes in Serie A.",
    ],
  },
  { 
    "name": "Crotone",
    "synonyms": [ "Crotone", "FC Crotone", "CRO" ],
    "league": "Serie A",
    "logo": "https://upload.wikimedia.org/wikipedia/en/2/27/FC_Crotone_Logo.png",
    "facts": [
      "Crotone is a professional football club based in Italy, that competes in Serie A.",
    ],
  },
  { 
    "name": "Crystal Palace",
    "synonyms": [ "Crystal Palace", "Crystal", "Crystal Palace FC", "CRY" ],
    "league": "Premier League",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Crystal_Palace_FC_logo.svg/1200px-Crystal_Palace_FC_logo.svg.png",
    "facts": [
      "Crystal Palace is a professional football club based in England, that competes in Premier League.",
    ],
  },
  { 
    "name": "Deportivo Alaves",
    "synonyms": 
     [ "Deportivo Alavés",
       "Alavés",
       "ALA",
       "Alaves",
       "Deportivo Alaves" ],
    "league": "La Liga",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Deportivo_Alaves_logo.svg/300px-Deportivo_Alaves_logo.svg.png",
    "facts": [
      "Deportivo Alavés is a professional football club based in Spain, that competes in La Liga.",
    ],
  },
  { 
    "name": "Deportivo La Coruna",
    "synonyms": 
     [ "Deportivo",
       "RC Deportivo La Coruna",
       "LAC",
       "Deportivo La Coruna" ],
    "league": "La Liga",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/RC_Deportivo_La_Coru%C3%B1a_logo.svg/1200px-RC_Deportivo_La_Coru%C3%B1a_logo.svg.png",
    "facts": [
      "Deportivo La Coruna is a professional football club based in Spain, that competes in La Liga.",
    ],
  },
  { 
    "name": "Dijon",
    "synonyms": [ "Dijon", "Dijon FCO", "DFCO" ],
    "league": "Ligue 1",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Dijon_FCO_logo.svg/1200px-Dijon_FCO_logo.svg.png",
    "facts": [
      "Dijon is a professional football club based in France, that competes in Ligue 1.",
    ],
  },
  { 
    "name": "Eibar",
    "synonyms": [ "Eibar", "SD Eibar", "EIB" ],
    "league": "La Liga",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SD_Eibar_logo_2016.svg/1200px-SD_Eibar_logo_2016.svg.png",
    "facts": [
      "Eibar is a professional football club based in Spain, that competes in La Liga.",
    ],
  },
  { 
    "name": "Espanyol",
    "synonyms": [ "Espanyol", "RCD Espanyol", "ESP" ],
    "league": "La Liga",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Rcd_espanyol_logo.svg/1200px-Rcd_espanyol_logo.svg.png",
    "facts": [
      "Espanyol is a professional football club based in Spain, that competes in La Liga.",
    ],
  },
  { 
    "name": "Everton",
    "synonyms": [ "Everton", "Everton FC", "EFC" ],
    "league": "Premier League",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/Everton_FC_logo.svg/1200px-Everton_FC_logo.svg.png",
    "facts": [
      "Everton is a professional football club based in England, that competes in Premier League.",
    ],
  },
  { 
    "name": "Ferrara",
    "synonyms": [ "Ferrara", "SPAL Ferrara", "SPA", "SPAL" ],
    "league": "Serie A",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Spal2013_logo.svg/1200px-Spal2013_logo.svg.png",
    "facts": [
      "Ferrara is a professional football club based in Italy, that competes in Serie A.",
    ],
  },
  { 
    "name": "Fiorentina",
    "synonyms": [ "Fiorentina", "ACF Fiorentina", "FIO" ],
    "league": "Serie A",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/ACF_Fiorentina_2.svg/1200px-ACF_Fiorentina_2.svg.png",
    "facts": [
      "Fiorentina is a professional football club based in Italy, that competes in Serie A.",
    ],
  },
  { 
    "name": "Frankfurt",
    "synonyms": [ "Frankfurt", "Eintracht Frankfurt", "SGE" ],
    "league": "Bundesliga 1",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Eintracht_Frankfurt_Logo.svg/1200px-Eintracht_Frankfurt_Logo.svg.png",
    "facts": [
      "Frankfurt is a professional football club based in Germany, that competes in Bundesliga.",
    ],
  },
  { 
    "name": "Freiburg",
    "synonyms": [ "Freiburg", "SC Freiburg", "SCF" ],
    "league": "Bundesliga 1",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/SC_Freiburg_logo.svg/1200px-SC_Freiburg_logo.svg.png",
    "facts": [
      "Freiburg is a professional football club based in Germany, that competes in Bundesliga.",
    ],
  },
  { 
    "name": "Genoa",
    "synonyms": [ "Genoa", "Genoa CFC", "GEN" ],
    "league": "Serie A",
    "logo": "https://upload.wikimedia.org/wikipedia/en/4/4e/Genoa_cfc.png",
    "facts": [
      "Genoa is a professional football club based in Italy, that competes in Serie A.",
    ],
  },
  { 
    "name": "Getafe",
    "synonyms": [ "Getafe", "Getafe CF", "FCG" ],
    "league": "La Liga",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/Getafe_logo.png/190px-Getafe_logo.png",
    "facts": [
      "Getafe is a professional football club based in Spain, that competes in La Liga.",
    ],
  },
  { 
    "name": "Girona",
    "synonyms": [ "Girona", "Girona FC", "GFC" ],
    "league": "La Liga",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/For_article_Girona_FC.svg/1200px-For_article_Girona_FC.svg.png",
    "facts": [
      "Girona is a professional football club based in Spain, that competes in La Liga.",
    ],
  },
  { 
    "name": "Gladbach",
    "synonyms": 
     [ "Gladbach",
       "Borussia Mönchengladbach",
       "BMG",
       "Bor. Mönchengladbach" ],
    "league": "Bundesliga 1",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Borussia_M%C3%B6nchengladbach_logo.svg/2000px-Borussia_M%C3%B6nchengladbach_logo.svg.png",
    "facts": [
      "Gladbach is a professional football club based in Germany, that competes in Bundesliga.",
    ],
  },
  { 
    "name": "Guingamp",
    "synonyms": [ "Guingamp", "EA Guingamp", "EAG" ],
    "league": "Ligue 1",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/2/24/En-Avant-Guingamp-840.png",
    "facts": [
      "Guingamp is a professional football club based in France, that competes in Ligue 1.",
    ],
  },
  { 
    "name": "Hamburger SV",
    "synonyms": [ "Hamburger SV", "Hamburger", "HSV" ],
    "league": "Bundesliga 1",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/HSV-Logo.svg/2000px-HSV-Logo.svg.png",
    "facts": [
      "Hamburger SV is a professional football club based in Germany, that competes in Bundesliga.",
    ],
  },
  { 
    "name": "Hannover",
    "synonyms": [ "Hannover", "Hannover 96", "H96" ],
    "league": "Bundesliga 1",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Hannover_96_Logo.svg/1200px-Hannover_96_Logo.svg.png",
    "facts": [
      "Hannover is a professional football club based in Germany, that competes in Bundesliga.",
    ],
  },
  { 
    "name": "Hellas Verona",
    "synonyms": [ "Verona", "H. Verona", "Hellas Verona FC", "Hellas", "Hellas Verona" ],
    "league": "Serie A",
    "logo": "https://vignette.wikia.nocookie.net/fifa/images/7/7f/Hellas_Verona_FC_logo..png",
    "facts": [
      "Hellas Verona is a professional football club based in Italy, that competes in Serie A.",
    ],
  },
  { 
    "name": "Hertha",
    "synonyms": [ "Hertha", "Hertha BSC", "BSC" ],
    "league": "Bundesliga 1",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Hertha_BSC_Logo_2012.svg/1200px-Hertha_BSC_Logo_2012.svg.png",
    "facts": [
      "Hertha is a professional football club based in Germany, that competes in Bundesliga.",
    ],
  },
  { 
    "name": "Hoffenheim",
    "synonyms": [ "Hoffenheim", "TSG 1899 Hoffenheim", "TSG" ],
    "league": "Bundesliga 1",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Logo_TSG_Hoffenheim.svg/2000px-Logo_TSG_Hoffenheim.svg.png",
    "facts": [
      "Hoffenheim is a professional football club based in Germany, that competes in Bundesliga.",
    ],
  },
  { 
    "name": "Huddersfield",
    "synonyms": [ "Huddersfield", "Huddersfield Town", "HTAFC" ],
    "league": "Premier League",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Huddersfield_Town_A.F.C._logo.svg/1200px-Huddersfield_Town_A.F.C._logo.svg.png",
    "facts": [
      "Huddersfield is a professional football club based in England, that competes in Premier League.",
    ],
  },
  { 
    "name": "Internazionale Milano",/*✔*/
    "synonyms": [ "Inter", "Inter Milan", "FC Internazionale Milano", "INT", "Internazionale", "Internazionale Milano" ],
    "league": "Serie A",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Inter_Mailand.svg/2000px-Inter_Mailand.svg.png",
    "facts": [
      "Inter Milan is a professional football club based in Italy, that competes in Serie A.",
    ],
  },
  { 
    "name": "Juventus",/*✔*/
    "synonyms": [ "Juventus", "Juve", "JUV", "Juventus Turin" ],
    "league": "Serie A",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Juventus_FC_2017_logo.svg/2000px-Juventus_FC_2017_logo.svg.png",
    "facts": [
      "Juventus is a professional football club based in Italy, that competes in Serie A.",
    ],
  },
  { 
    "name": "FC Koln",
    "synonyms": [ "Köln", "FC Köln", "EFFZEH", "Koln", "FC Koln", "1. FC Köln" ],
    "league": "Bundesliga 1",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/FC_Cologne_logo.svg/1200px-FC_Cologne_logo.svg.png",
    "facts": [
      "Köln is a professional football club based in Germany, that competes in Bundesliga.",
    ],
  },
  { 
    "name": "Las Palmas",
    "synonyms": [ "Las Palmas", "UD Las Palmas", "LPA" ],
    "league": "La Liga",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/2/20/UD_Las_Palmas_logo.svg/1200px-UD_Las_Palmas_logo.svg.png",
    "facts": [
      "Las Palmas is a professional football club based in Spain, that competes in La Liga.",
    ],
  },
  { 
    "name": "Lazio",
    "synonyms": [ "Lazio", "SS Lazio", "LAZ" ],
    "league": "Serie A",
    "logo": "http://upload.wikimedia.org/wikipedia/de/thumb/4/47/Lazio_Rom.svg/500px-Lazio_Rom.svg.png",
    "facts": [
      "Lazio is a professional football club based in Italy, that competes in Serie A.",
    ],
  },
  { 
    "name": "Leganes",
    "synonyms": [ "Leganes", "CD Leganes", "LEG" ],
    "league": "La Liga",
    "logo": "http://upload.wikimedia.org/wikipedia/en/thumb/0/02/Club_Deportivo_Leganés.png/180px-Club_Deportivo_Leganés.png",
    "facts": [
      "Leganes is a professional football club based in Spain, that competes in La Liga.",
    ],
  },
  { 
    "name": "Leicester City",
    "synonyms": [ "Leicester City", "Foxes", "Leicester City FC", "LCFC" ],
    "league": "Premier League",
    "logo": "http://upload.wikimedia.org/wikipedia/en/6/63/Leicester02.png",
    "facts": [
      "Leicester City is a professional football club based in England, that competes in Premier League.",
    ],
  },
  { 
    "name": "Leipzig",
    "synonyms": [ "Leipzig", "Red Bull Leipzig", "RBL" ],
    "league": "Bundesliga 1",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/f/fd/RB_Leipzig.png",
    "facts": [
      "Leipzig is a professional football club based in Germany, that competes in Bundesliga.",
    ],
  },
  { 
    "name": "Levante",
    "synonyms": [ "Levante", "Levante UD", "LUD" ],
    "league": "La Liga",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Levante_Uni%C3%B3n_Deportiva%2C_S.A.D._logo.svg/1200px-Levante_Uni%C3%B3n_Deportiva%2C_S.A.D._logo.svg.png",
    "facts": [
      "Levante is a professional football club based in Spain, that competes in La Liga.",
    ],
  },
  { 
    "name": "Leverkusen",
    "synonyms": [ "Leverkusen", "Bayer Leverkusen", "B04", "Bayer 04 Leverkusen" ],
    "league": "Bundesliga 1",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/5/59/Bayer_04_Leverkusen_logo.svg/1200px-Bayer_04_Leverkusen_logo.svg.png",
    "facts": [
      "Leverkusen is a professional football club based in Germany, that competes in Bundesliga.",
    ],
  },
  { 
    "name": "Lille",
    "synonyms": [ "Lille", "OSC Lille", "LOSC" ],
    "league": "Ligue 1",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ab/Lille_OSC_logo.svg/1200px-Lille_OSC_logo.svg.png",
    "facts": [
      "Lille is a professional football club based in France, that competes in Ligue 1.",
    ],
  },
  { 
    "name": "Liverpool",/*✔*/
    "synonyms": [ "Liverpool", "Liverpool F.C.", "LFC", "Liverpool FC" ],
    "league": "Premier League",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/1200px-Liverpool_FC.svg.png",
    "facts": [
      "Liverpool is a professional football club based in England, that competes in Premier League.",
    ],
  },
  { 
    "name": "Lyon",
    "synonyms": [ "Lyon", "Olympique Lyonnais", "OLY" ],
    "league": "Ligue 1",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/Olympique_Lyonnais.svg/1200px-Olympique_Lyonnais.svg.png",
    "facts": [
      "Lyon is a professional football club based in France, that competes in Ligue 1.",
    ],
  },
  { 
    "name": "Mainz",
    "synonyms": [ "Mainz", "FSV Mainz 05", "FSV Mainz", "M05", "1. FSV Mainz 05" ],
    "league": "Bundesliga 1",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/FSV_Mainz_05_Logo.svg/2000px-FSV_Mainz_05_Logo.svg.png",
    "facts": [
      "Mainz is a professional football club based in Germany, that competes in Bundesliga.",
    ],
  },
  { 
    "name": "Malaga",
    "synonyms": [ "Málaga", "Málaga CF", "MAL", "Malaga", "Malaga CF" ],
    "league": "La Liga",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/M%C3%A1laga_CF.svg/1200px-M%C3%A1laga_CF.svg.png",
    "facts": [
      "Málaga is a professional football club based in Spain, that competes in La Liga.",
    ],
  },
  { 
    "name": "Manchester City",/*✔*/
    "synonyms": 
     [ "Manchester City",
       "City",
       "Manchester City F.C.",
       "Man City",
       "MCFC",
       "Manchester City FC" ],
    "league": "Premier League",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png",
    "facts": [
      "Manchester City is a professional football club based in England, that competes in Premier League.",
    ],
  },
  { 
    "name": "Manchester United",/*✔*/
    "synonyms": 
     [ "Manchester United",
       "United",
       "Manchester United F.C.",
       "MUFC",
       "Man U",
       "Manchester United FC" ],
    "league": "Premier League",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1200px-Manchester_United_FC_crest.svg.png",
    "facts": [
      "Manchester United is a professional football club based in England, that competes in Premier League.",
    ],
  },
  { 
    "name": "Marseille",/*✔*/
    "synonyms": [ "Marseille", "Olympique de Marseille", "OM" ],
    "league": "Ligue 1",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Olympique_Marseille_logo.svg/2000px-Olympique_Marseille_logo.svg.png",
    "facts": [
      "Marseille is a professional football club based in France, that competes in Ligue 1.",
    ],
  },
  { 
    "name": "Metz",
    "synonyms": [ "Metz", "FC Metz", "FCM" ],
    "league": "Ligue 1",
    "logo": "https://vignette.wikia.nocookie.net/fifa/images/5/5b/FC_Metz_logo..png",
    "facts": [
      "Metz is a professional football club based in France, that competes in Ligue 1.",
    ],
  },
  { 
    "name": "Monaco",/*✔*/
    "synonyms": [ "Monaco", "AS Monaco FC", "ASM" ],
    "league": "Ligue 1",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/AS_Monaco_FC.svg/1200px-AS_Monaco_FC.svg.png",
    "facts": [
      "Monaco is a professional football club based in France, that competes in Ligue 1.",
    ],
  },
  { 
    "name": "Montpellier",
    "synonyms": [ "Montpellier", "Montpellier Hérault SC", "MHSC" ],
    "league": "Ligue 1",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/3/3c/HSC_Montpellier_Logo.png",
    "facts": [
      "Montpellier is a professional football club based in France, that competes in Ligue 1.",
    ],
  },
  { 
    "name": "Nantes",
    "synonyms": [ "Nantes", "FC Nantes", "FCN" ],
    "league": "Ligue 1",
    "logo": "https://vignette.wikia.nocookie.net/fifa/images/d/db/FC_Nantes_logo..png",
    "facts": [
      "Nantes is a professional football club based in France, that competes in Ligue 1.",
    ],
  },
  { 
    "name": "Napoli",/*✔*/
    "synonyms": [ "Napoli", "SSC Napoli", "NAP" ],
    "league": "Serie A",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/S.S.C._Napoli_logo.svg/2000px-S.S.C._Napoli_logo.svg.png",
    "facts": [
      "Napoli is a professional football club based in Italy, that competes in Serie A.",
    ],
  },
  { 
    "name": "Newcastle",
    "synonyms": [ "Newcastle", "Newcastle United FC", "NUFC" ],
    "league": "Premier League",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Newcastle_United_Logo.svg/1200px-Newcastle_United_Logo.svg.png",
    "facts": [
      "Newcastle is a professional football club based in England, that competes in Premier League.",
    ],
  },
  { 
    "name": "Nice",
    "synonyms": [ "Nice", "OGC Nice", "NIC" ],
    "league": "Ligue 1",
    "logo": "https://vignette.wikia.nocookie.net/fifa/images/0/05/OGC_Nice_logo.png",
    "facts": [
      "Nice is a professional football club based in France, that competes in Ligue 1.",
    ],
  },
  { 
    "name": "PSG",/*✔*/
    "synonyms": 
     [ "PSG",
       "Paris Saint-Germain",
       "Paris Saint-Germain F.C.",
       "Paris Saint-Germain FC" ],
    "league": "Ligue 1",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/1200px-Paris_Saint-Germain_F.C..svg.png",
    "facts": [
      "PSG is a professional football club based in France, that competes in Ligue 1.",
    ],
  },
  { 
    "name": "Real Betis",
    "synonyms": [ "Real Betis", "Betis", "BET" ],
    "league": "La Liga",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Real_betis_logo.svg/1200px-Real_betis_logo.svg.png",
    "facts": [
      "Real Betis is a professional football club based in Spain, that competes in La Liga.",
    ],
  },
  { 
    "name": "Real Madrid",/*✔*/
    "synonyms": 
     [ "Real Madrid",
       "Madrid",
       "Real Madrid C.F.",
       "MAD",
       "RM",
       "Real Madrid CF" ],
    "league": "La Liga",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png",
    "facts": [
      "Real Madrid is a professional football club based in Spain, that competes in La Liga.",
    ],
  },
  { 
    "name": "Real Sociedad",
    "synonyms": [ "Real Sociedad", "Real Sociedad de Fútbol", "RSS" ],
    "league": "La Liga",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Real_Sociedad_logo.svg/1200px-Real_Sociedad_logo.svg.png",
    "facts": [
      "Real Sociedad is a professional football club based in Spain, that competes in La Liga.",
    ],
  },
  { 
    "name": "Rennes",
    "synonyms": [ "Rennes", "Stade Rennais FC", "Rennais", "REN" ],
    "league": "Ligue 1",
    "logo": "https://vignette.wikia.nocookie.net/fifa/images/3/37/Stade_Rennais_FC..png",
    "facts": [
      "Rennes is a professional football club based in France, that competes in Ligue 1.",
    ],
  },
  { 
    "name": "Roma",/*✔*/
    "synonyms": [ "Roma", "A.S. Roma", "ROM", "AS Roma" ],
    "league": "Serie A",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/AS_Roma_logo_%281997%29.svg/170px-AS_Roma_logo_%281997%29.svg.png",
    "facts": [
      "Roma is a professional football club based in Italy, that competes in Serie A.",
    ],
  },
  { 
    "name": "Sampdoria",
    "synonyms": [ "Sampdoria", "UC Sampdoria", "SAM" ],
    "league": "Serie A",
    "logo": "https://upload.wikimedia.org/wikipedia/en/f/f7/Sampdoria_badge.png",
    "facts": [
      "Sampdoria is a professional football club based in Italy, that competes in Serie A.",
    ],
  },
  { 
    "name": "Sassuolo",
    "synonyms": [ "Sassuolo", "US Sassuolo Calcio", "SAS" ],
    "league": "Serie A",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/US_Sassuolo_Calcio_logo.svg/1200px-US_Sassuolo_Calcio_logo.svg.png",
    "facts": [
      "Sassuolo is a professional football club based in Italy, that competes in Serie A.",
    ],
  },
  { 
    "name": "Schalke",
    "synonyms": [ "Schalke", "FC Schalke 04", "S04" ],
    "league": "Bundesliga 1",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/FC_Schalke_04_Logo.svg/2000px-FC_Schalke_04_Logo.svg.png",
    "facts": [
      "Schalke is a professional football club based in Germany, that competes in Bundesliga.",
    ],
  },
  { 
    "name": "Sevilla",/*✔*/
    "synonyms": [ "Sevilla", "Sevilla FC", "SEV" ],
    "league": "La Liga",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/8/86/Sevilla_cf_200px.png/180px-Sevilla_cf_200px.png",
    "facts": [
      "Sevilla is a professional football club based in Spain, that competes in La Liga.",
    ],
  },
  { 
    "name": "Southampton",
    "synonyms": [ "Southampton", "Southampton FC", "SFC" ],
    "league": "Premier League",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/FC_Southampton.svg/1200px-FC_Southampton.svg.png",
    "facts": [
      "Southampton is a professional football club based in England, that competes in Premier League.",
    ],
  },
  { 
    "name": "Stoke City",
    "synonyms": [ "Stoke City", "Stoke", "Stoke City FC", "SCFC" ],
    "league": "Premier League",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Stoke_City_FC.svg/1200px-Stoke_City_FC.svg.png",
    "facts": [
      "Stoke City is a professional football club based in England, that competes in Premier League.",
    ],
  },
  { 
    "name": "Strasbourg",
    "synonyms": [ "Strasbourg", "RC Strasbourg Alsace", "RCSA" ],
    "league": "Ligue 1",
    "logo": "https://upload.wikimedia.org/wikipedia/en/9/97/Rcstrasbourg.png",
    "facts": [
      "Strasbourg is a professional football club based in France, that competes in Ligue 1.",
    ],
  },
  { 
    "name": "Stuttgart",
    "synonyms": [ "Stuttgart", "VfB Stuttgart", "VFB" ],
    "league": "Bundesliga 1",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/VfB_Stuttgart_1893_Logo.svg/2000px-VfB_Stuttgart_1893_Logo.svg.png",
    "facts": [
      "Stuttgart is a professional football club based in Germany, that competes in Bundesliga.",
    ],
  },
  { 
    "name": "St. Etienne",
    "synonyms": 
     [ "St. Etienne",
       "AS Saint-Étienne",
       "ETI",
       "ASSE",
       "Saint Etienne",
       "AS Saint Etienne" ],
    "league": "Ligue 1",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Logo_AS_Saint-%C3%89tienne.svg/2000px-Logo_AS_Saint-%C3%89tienne.svg.png",
    "facts": [
      "St. Etienne is a professional football club based in France, that competes in Ligue 1.",
    ],
  },
  { 
    "name": "Swansea",
    "synonyms": [ "Swansea", "Swans", "Swansea City FC", "SWA" ],
    "league": "Premier League",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/9/9c/SWANSEA_CITY_FC.png",
    "facts": [
      "Swansea is a professional football club based in England, that competes in Premier League.",
    ],
  },
  { 
    "name": "Torino",
    "synonyms": [ "Torino", "Torino FC", "TOR" ],
    "league": "Serie A",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Torino_FC_Logo.svg/1200px-Torino_FC_Logo.svg.png",
    "facts": [
      "Torino is a professional football club based in Italy, that competes in Serie A.",
    ],
  },
  { 
    "name": "Tottenham Hotspur",/*✔*/
    "synonyms": 
     [ "Tottenham Hotspur",
       "Spurs",
       "Tottenham",
       "Tottenham Hotspur F.C.",
       "THFC",
       "Tottenham Hotspur FC" ],
    "league": "Premier League",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Tottenham_Hotspur.svg/1200px-Tottenham_Hotspur.svg.png",
    "facts": [
      "Tottenham Hotspur is a professional football club based in England, that competes in Premier League.",
    ],
  },
  { 
    "name": "Toulouse",
    "synonyms": [ "Toulouse", "Toulouse FC", "TOU" ],
    "league": "Ligue 1",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Toulouse_FC_logo.svg/1200px-Toulouse_FC_logo.svg.png",
    "facts": [
      "Toulouse is a professional football club based in France, that competes in Ligue 1.",
    ],
  },
  { 
    "name": "Troyes",
    "synonyms": [ "Troyes", "ES Troyes AC", "ESTAC" ],
    "league": "Ligue 1",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/ES_Troyes_AC.svg/2000px-ES_Troyes_AC.svg.png",
    "facts": [
      "Troyes is a professional football club based in France, that competes in Ligue 1.",
    ],
  },
  { 
    "name": "Udinese",
    "synonyms": [ "Udinese", "Udinese Calcio", "UDI" ],
    "league": "Serie A",
    "logo": "https://upload.wikimedia.org/wikipedia/en/f/f2/Udinese_calcio.png",
    "facts": [
      "Udinese is a professional football club based in Italy, that competes in Serie A.",
    ],
  },
  { 
    "name": "Valencia",
    "synonyms": [ "Valencia", "Valencia CF", "VAL" ],
    "league": "La Liga",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Valenciacf.svg/1200px-Valenciacf.svg.png",
    "facts": [
      "Valencia is a professional football club based in Spain, that competes in La Liga.",
    ],
  },
  { 
    "name": "Villarreal",
    "synonyms": [ "Villarreal", "Villarreal CF", "VCF" ],
    "league": "La Liga",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Villarreal_CF_logo.svg/1200px-Villarreal_CF_logo.svg.png",
    "facts": [
      "Villarreal is a professional football club based in Spain, that competes in La Liga.",
    ],
  },
  { 
    "name": "Watford",
    "synonyms": [ "Watford", "Watford FC", "WAT" ],
    "league": "Premier League",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Watford.svg/1200px-Watford.svg.png",
    "facts": [
      "Watford is a professional football club based in England, that competes in Premier League.",
    ],
  },
  { 
    "name": "West Bromwich",
    "synonyms": [ "West Bromwich Albion FC", "WBA", "West Bromwich" ],
    "league": "Premier League",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/West_Bromwich_Albion.svg/1200px-West_Bromwich_Albion.svg.png",
    "facts": [
      "West Bromwich is a professional football club based in England, that competes in Premier League.",
    ],
  },
  { 
    "name": "West Ham",
    "synonyms": [ "West Ham", "West Ham United FC", "WHU" ],
    "league": "Premier League",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/West_Ham_United_FC_logo.svg/1200px-West_Ham_United_FC_logo.svg.png",
    "facts": [
      "West Ham is a professional football club based in England, that competes in Premier League.",
    ],
  },
  { 
    "name": "Wolfsburg",
    "synonyms": [ "Wolfsburg", "VfL Wolfsburg", "WOB" ],
    "league": "Bundesliga 1",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/5/56/VfL_Wolfsburg_Logo.png",
    "facts": [
      "Wolfsburg is a professional football club based in Germany, that competes in Bundesliga.",
    ],
  },
  /* National Football Teams */
  {
    "value": "Argentina",
    "synonyms": [
      "Argentina"
    ],
    "league": "FIFA World Cup",
    "logo": "https://i.pinimg.com/originals/9b/2c/88/9b2c8886e3cd7c43133a4cbe77299e1f.jpg",
    "facts": [
      "The Argentina national football team represents Argentina in football and is controlled by the Argentine Football Association (AFA), the governing body for football in Argentina.",
      "Argentina's home stadium is Estadio Monumental Antonio Vespucio Liberti in Buenos Aires.",
    ],
  },
  {
    "value": "Australia",
    "synonyms": [
      "Australia"
    ],
    "league": "FIFA World Cup",
    "logo": "https://i.pinimg.com/originals/c6/25/67/c62567a06cff7c841cb74be8f2269ede.png",
    "facts": [
      "The Australian national soccer team represents Australia in international men's soccer. Officially nicknamed the Socceroos, the team is controlled by the governing body for soccer in Australia, Football Federation Australia (FFA), which is currently a member of the Asian Football Confederation (AFC) and the regional ASEAN Football Federation (AFF) since leaving the Oceania Football Confederation (OFC) in 2006.",
      "Australia is the only national team to have been a champion of two confederations, having won the OFC Nations Cup four times between 1980 and 2004, as well as the AFC Asian Cup at the 2015 event on home soil.",
    ],
  },
  {
    "value": "Belgium",
    "synonyms": [
      "Belgium"
    ],
    "league": "FIFA World Cup",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Belgium_urbsfa.png/200px-Belgium_urbsfa.png",
    "facts": [
      "The Belgian national football team has officially represented Belgium in association football since their maiden match in 1904. The squad is under the global jurisdiction of FIFA and is governed in Europe by UEFA—both of which were co-founded by the Belgian team's supervising body, the Royal Belgian Football Association (RBFA).",
    ],
  },
  {
    "value": "Brazil",
    "synonyms": [
      "Brazil"
    ],
    "league": "FIFA World Cup",
    "logo": "https://www.vectorportal.com/img_novi/cbf_3686.jpg",
    "facts": [
      "The Brazil national football team represents Brazil in international men's association football. Brazil is administered by the Brazilian Football Confederation (CBF), the governing body for football in Brazil.",
      "They have been a member of the FIFA since 1923 and member of the CONMEBOL since 1916.",
    ],
  },
  {
    "value": "Colombia",
    "synonyms": [
      "Colombia"
    ],
    "league": "FIFA World Cup",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/6/61/Federacion_Colombiana_de_Futbol_logo.svg/1200px-Federacion_Colombiana_de_Futbol_logo.svg.png",
    "facts": [
      "The Colombia national football team represents Colombia in international football competitions and is overseen by the Colombian Football Federation.",
      "It is a member of the CONMEBOL and is currently ranked sixteenth in the FIFA World Rankings. The team are nicknamed Los Cafeteros due to the coffee production in their country.",
    ],
  },
  {
    "value": "Costa Rica",
    "synonyms": [
      "Costa Rica"
    ],
    "league": "FIFA World Cup",
    "logo": "https://upload.wikimedia.org/wikipedia/en/f/f5/Costa_Rica_football_association.png",
    "facts": [
      "The Costa Rica national football team is a national association football team of Costa Rica. It is administered by the Costa Rican Football Federation (FEDEFUTBOL), the governing body for football in Costa Rica.",
      "They have been a member of the International Federation of Association Football (FIFA) since 1927, a member of the Confederation of North, Central American and Caribbean Association Football (CONCACAF) since 1961, and a member of the Central American Football Union (UNCAF) since 1990.",
    ],
  },
  {
    "value": "Croatia",
    "synonyms": [
      "Croatia"
    ],
    "league": "FIFA World Cup",
    "logo": "https://i.pinimg.com/originals/ee/0d/af/ee0daf514946eb01fbf5740534d710a3.jpg",
    "facts": [
      "The Croatia national football team represents Croatia in international football. The team is controlled by the Croatian Football Federation, the nation's governing body of football.",
      "The modern Croatian team was formed in 1990, shortly before the nation's independence from Yugoslavia, and by 1993 was recognized by both FIFA and UEFA.",
    ],
  },
  {
    "value": "Denmark",
    "synonyms": [
      "Denmark"
    ],
    "league": "FIFA World Cup",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/Dansk_Boldspil-Union_logo.svg/1200px-Dansk_Boldspil-Union_logo.svg.png",
    "facts": [
      "The Denmark national football team represents Denmark in association football and is controlled by the Danish Football Association (DBU), the governing body for the football clubs which are organized under DBU.",
      "Denmark's home ground is Parken Stadium in the Østerbro district of Copenhagen, and their head coach is Åge Hareide.",
    ],
  },
  {
    "value": "Egypt",
    "synonyms": [
      "Egypt"
    ],
    "league": "FIFA World Cup",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Egypt_FA.png/200px-Egypt_FA.png",
    "facts": [
      "The Egypt national football team, known as The Pharaohs, represents Egypt in men's International association football and is governed by the Egyptian Football Association (EFA) founded in 1921, the governing body for football in Egypt.",
      "The team's historical stadium is Cairo International Stadium but since 2012 the team has played most home games at Borg El Arab Stadium of Alexandria. The current team manager is Héctor Cúper.",
    ],
  },
  {
    "value": "England",
    "synonyms": [
      "England"
    ],
    "league": "FIFA World Cup",
    "logo": "https://i.pinimg.com/originals/0b/96/1f/0b961fb2ec43796db92224904900309d.jpg",
    "facts": [
      "The England national football team represents England in international football and is controlled by The Football Association, the governing body for football in England.",
      "England are one of the two oldest national teams in football; alongside Scotland, whom they played in the world's first international football match in 1872.",
      "England's home ground is Wembley Stadium, London, and their headquarters is at St George's Park, Burton upon Trent.",
    ],
  },
  {
    "value": "France",
    "synonyms": [
      "France"
    ],
    "league": "FIFA World Cup",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/Equipe_de_France_de_football_Logo.png/230px-Equipe_de_France_de_football_Logo.png",
    "facts": [
      "The France national football team represents France in international football and is controlled by the French Football Federation, also known as FFF, or in French: Fédération française de football.",
      "The team's colours are blue, white and red, and the coq gaulois its symbol. France are colloquially known as Les Bleus (The Blues).",
    ],
  },
  {
    "value": "Germany",
    "synonyms": [
      "Germany"
    ],
    "league": "FIFA World Cup",
    "logo": "https://qph.fs.quoracdn.net/main-qimg-f2810ae9e9f8eded0e8b41603c131e64",
    "facts": [
      "The Germany national football team is the men's football team that has represented Germany in international competition since 1908.[4] It is governed by the German Football Association (Deutscher Fußball-Bund), founded in 1900.",
    ],
  },
  {
    "value": "Hungary",
    "synonyms": [
      "Hungary"
    ],
    "league": "FIFA World Cup",
    "logo": "https://ftcbk.files.wordpress.com/2009/11/mlsz-cimer.jpg",
    "facts": [
      "The Hungary national football team represents Hungary in international football and is controlled by the Hungarian Football Federation.",
      "Hungary has a respectable football history, having won three Olympic titles, finishing runners-up in the 1938 and 1954 World Cups, and third in the 1964 UEFA European Football Championship.",
    ],
  },
  {
    "value": "Iceland",
    "synonyms": [
      "Iceland"
    ],
    "league": "FIFA World Cup",
    "logo": "https://upload.wikimedia.org/wikipedia/en/a/a5/Iceland_FA.png",
    "facts": [
      "The Iceland men's national football team represents Iceland in international football. The team is controlled by the Football Association of Iceland.",
    ],
  },
  {
    "value": "India",
    "synonyms": [
      "India"
    ],
    "league": "FIFA World Cup",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/All_India_Football_Federation_2016.png/200px-All_India_Football_Federation_2016.png",
    "facts": [
      "The India national football team represents India in international football and is controlled by the All India Football Federation.",
    ],
  },
  {
    "value": "Iran",
    "synonyms": [
      "Iran"
    ],
    "league": "FIFA World Cup",
    "logo": "https://i.pinimg.com/originals/f0/3d/95/f03d954c2d57f7ef9e2b238a952dbe66.png",
    "facts": [
      "The Iran national football team, also known as Team Melli, represents Iran in international football competitions and is governed by the Iran Football Federation.",
    ],
  },
  {
    "value": "Italy",
    "synonyms": [
      "Italy"
    ],
    "league": "FIFA World Cup",
    "logo": "https://i.pinimg.com/236x/5c/f4/8b/5cf48b3156f1b18251b8b246d00fb4fa--soccer-logo-futbol-soccer.jpg",
    "facts": [
      "The Italy national football team represents Italy in association football and is controlled by the Italian Football Federation (FIGC), the governing body for football in Italy.",
      "The national football team is known as Gli Azzurri from the traditional colour of Italian national teams and athletes representing Italy.",
    ],
  },
  {
    "value": "Japan",
    "synonyms": [
      "Japan"
    ],
    "league": "FIFA World Cup",
    "logo": "https://upload.wikimedia.org/wikipedia/en/d/d4/JFA_Japan_national_team_logo_2017.png",
    "facts": [
      "The Japan national football team represents Japan in association football and is operated by the Japan Football Association (JFA), the governing body for association football in Japan. The current head coach is Akira Nishino.",
      "Japan is the only team from outside the Americas to participate in the Copa América, having been invited in 1999 and 2011.",
    ],
  },
  {
    "value": "Korea Republic",
    "synonyms": [
      "Korea Republic"
    ],
    "league": "FIFA World Cup",
    "logo": "https://vignette.wikia.nocookie.net/supersmashbrosbowl/images/8/8b/Emblem_of_Korea_Football_Association.svg.png",
    "facts": [
      "The Korea Republic national football team represents South Korea in international association football and is controlled by the Korea Football Association.",
      "The team is commonly nicknamed \"The Reds\" by both fans and the media due to the color of their primary kit. The national team's supporting group is officially referred to as the Red Devils.",
    ],
  },
  {
    "value": "Mexico",
    "synonyms": [
      "Mexico"
    ],
    "league": "FIFA World Cup",
    "logo": "https://upload.wikimedia.org/wikipedia/en/c/ce/Selecci%C3%B3n_Nacional_de_M%C3%A9xico_%28logo%29.png",
    "facts": [
      "The Mexico national football team represents Mexico in international football. It is fielded by the Mexican Football Federation, the governing body of football in Mexico, and competes as a member of CONCACAF, which encompasses the countries of North and Central America, and the Caribbean.",
      "Mexico's home stadium is the Estadio Azteca in Mexico City, and the head coach is Juan Carlos Osorio.",
    ],
  },
  {
    "value": "Morocco",
    "synonyms": [
      "Morocco"
    ],
    "league": "FIFA World Cup",
    "logo": "https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/092014/frmf.jpg",
    "facts": [
      "The Morocco national football team, nicknamed \"Lions of the Atlas\", is the national team of Morocco. It is currently managed by Hervé Renard.",
      "Winners of the African Nations Cup in 1976, they were the first African team to win a group at the World Cup, which they did in 1986, finishing ahead of Portugal, Poland, and England.",
    ],
  },
  {
    "value": "Nigeria",
    "synonyms": [
      "Nigeria"
    ],
    "league": "FIFA World Cup",
    "logo": "https://i.pinimg.com/originals/ce/7c/85/ce7c855cf6443a96194d37fe43737486.jpg",
    "facts": [
      "The Nigeria national football team represents Nigeria in international association football and is controlled by the Nigeria Football Federation (NFF).",
    ],
  },
  {
    "value": "Panama",
    "synonyms": [
      "Panama"
    ],
    "league": "FIFA World Cup",
    "logo": "https://www.vectorportal.com/img_novi/Panama_FA_2.jpg",
    "facts": [
      "The Panama national football team represents Panama in international football. The team is controlled by the governing body for football in Panama, Panamanian Football Federation, which is a member of CONCACAF and the regional UNCAF.",
      "Panama qualified for the FIFA World Cup for the first time for the 2018 tournament in Russia.",
    ],
  },
  {
    "value": "Peru",
    "synonyms": [
      "Peru"
    ],
    "league": "FIFA World Cup",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/3/36/Fpf-logo.svg/1200px-Fpf-logo.svg.png",
    "facts": [
      "The Peru national football team has represented Peru in international football since 1927. Organised by the Peruvian Football Federation (FPF), it is one of the 10 members of FIFA's South American Football Confederation (CONMEBOL).",
      "The team plays most of its home matches at the Estadio Nacional in Lima, the country's capital.",
    ],
  },
  {
    "value": "Poland",
    "synonyms": [
      "Poland"
    ],
    "league": "FIFA World Cup",
    "logo": "https://i.pinimg.com/originals/a4/ec/2e/a4ec2e15a54aea968f02647540f9657e.jpg",
    "facts": [
      "The Poland national football team represents Poland in association football and is controlled by the Polish Football Association, the governing body for football in Poland.",
      "Poland's home ground is the National Stadium in Warsaw and their current head coach is Adam Nawałka.",
    ],
  },
  {
    "value": "Portugal",
    "synonyms": [
      "Portugal"
    ],
    "league": "FIFA World Cup",
    "logo": "https://i.pinimg.com/236x/5d/de/60/5dde60c9946822c22b30c725291b9552--wallpaper-pictures-hd-wallpaper.jpg",
    "facts": [
      "The Portugal national football team represents Portugal in international men's association football competition since 1921. It is controlled by the Portuguese Football Federation, the governing body for football in Portugal.",
    ],
  },
  {
    "value": "Russia",
    "synonyms": [
      "Russia"
    ],
    "league": "FIFA World Cup",
    "logo": "https://i.pinimg.com/originals/d1/26/81/d12681139bcb3d02ea9e2b8a7b9f66ac.jpg",
    "facts": [
      "The Russia national football team represents Russia in association football and is controlled by the Russian Football Union, the governing body for football in Russia.",
      "Russia's home ground is the Luzhniki Stadium in Moscow.",
    ],
  },
  {
    "value": "Saudi Arabia",
    "synonyms": [
      "Saudi Arabia"
    ],
    "league": "FIFA World Cup",
    "logo": "https://seeklogo.com/images/S/saudi-arabia-national-football-team-logo-2CB919B927-seeklogo.com.png",
    "facts": [
      "The Saudi Arabia national football team represents Saudi Arabia in international football.",
      "The team's colours are green and white. Saudi Arabia are known as Al-Suqour (The Falcons), and Al-Akhdhar (The Green).",
    ],
  },
  {
    "value": "Senegal",
    "synonyms": [
      "Senegal"
    ],
    "league": "FIFA World Cup",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/FSF_Nouveau_Logo.jpg/200px-FSF_Nouveau_Logo.jpg",
    "facts": [
      "The Senegal national football team, nicknamed the Lions of Teranga, is the national team of Senegal and is controlled by the Fédération Sénégalaise de Football.",
    ],
  },
  {
    "value": "Serbia",
    "synonyms": [
      "Serbia"
    ],
    "league": "FIFA World Cup",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/Fudbalski_savez_Srbije.svg/1200px-Fudbalski_savez_Srbije.svg.png",
    "facts": [
      "The Serbia national football team represents Serbia in association football and is controlled by the Football Association of Serbia, the governing body for football in the country.",
      "Both FIFA and UEFA consider the Serbian national team to be the direct and sole successor of the Yugoslavia and Serbia and Montenegro teams.",
    ],
  },
  {
    "value": "Spain",
    "synonyms": [
      "Spain"
    ],
    "league": "FIFA World Cup",
    "logo": "https://seeklogo.com/images/S/spain-national-football-team-logo-A1188D78D2-seeklogo.com.png",
    "facts": [
      "The Spain national football team represents Spain in men's International association football and is controlled by the Royal Spanish Football Federation, the governing body for football in Spain.",
      "Spain became a member of FIFA in 1904 even though the Spanish Football Federation was first established in 1909.",
    ],
  },
  {
    "value": "Sweden",
    "synonyms": [
      "Sweden"
    ],
    "league": "FIFA World Cup",
    "logo": "https://seeklogo.com/images/S/sweden-national-football-team-logo-8254BB86F9-seeklogo.com.png",
    "facts": [
      "The Sweden national football team represents Sweden in association football and is controlled by the Swedish Football Association, the governing body for football in Sweden.",
      "Sweden's home ground is Friends Arena in the Stockholm urban area and the team is led by Janne Andersson.",
    ],
  },
  {
    "value": "Switzerland",
    "synonyms": [
      "Switzerland"
    ],
    "league": "FIFA World Cup",
    "logo": "https://seeklogo.com/images/S/switzerland-national-football-team-logo-E8D88FEC71-seeklogo.com.png",
    "facts": [
      "The Switzerland national football team is the national football team of Switzerland. The team is controlled by the Swiss Football Association.",
    ],
  },
  {
    "value": "Tunisia",
    "synonyms": [
      "Tunisia"
    ],
    "league": "FIFA World Cup",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Logo_federation_tunisienne_de_football-copy.svg/1200px-Logo_federation_tunisienne_de_football-copy.svg.png",
    "facts": [
      "The Tunisia national football team, nicknamed Les Aigles de Carthage (The Eagles of Carthage or The Carthage Eagles), is the national team of Tunisia and is controlled by the Tunisian Football Federation.",
    ],
  },
  {
    "value": "Uruguay",
    "synonyms": [
      "Uruguay"
    ],
    "league": "FIFA World Cup",
    "logo": "https://ae01.alicdn.com/kf/HTB1WxdGIXXXXXXHXVXXq6xXFXXXI/WORLD-CUP-Uruguay-NATIONAL-FOOTBALL-TEAM-LOGO-LIGHT-FOR-CHEERING-SOCCER-FANS-LUMINOUS-ELECTRONIC-CUSTOMIZED-CAR.jpg_640x640.jpg",
    "facts": [
      "The Uruguay national football team represents Uruguay in international association football and is controlled by the Uruguayan Football Association, the governing body for football in Uruguay. The current head coach is Óscar Tabárez.",
      "The Uruguayan team is commonly referred to as La Celeste (The Sky Blue).",
    ],
  },
]