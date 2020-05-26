// Importation des libraires
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const schedule = require('node-schedule');
const Twit = require("twit");

// Ref : https://developer.twitter.com/en/docs/tweets/rules-and-filtering/guides/build-standard-queries

const T = new Twit({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});
// max 100
let word = ['ipssi', 'tpmp', 'nike'];

const keywordsParse = (keywordsList) => {
    let keyListString = keywordsList.toString();
    console.log(keyListString);
}

keywordsParse(word);


// test CRON
const job = schedule.scheduleJob('/10 * * * * *', () => {
    console.log('execute job');

    // max 100
    let word = ['ipssi', 'tpmp', 'nike'];

    const keywordsParse = (keywordsList) => {
        let keyListString = keywordsList.toString();
        console.log(keyListString);
    }

    keywordsParse(word);

    // TODO: Functions pour incrémenter les mots
     T.get('search/tweets', { q: `#${word}`, count: 2 })
    .catch(function (err) {
        console.log('caught error', err.stack);
    })
    .then(function (result) {
        const parseData = [];
        for (let element of result.data['statuses']) {
            parseData.push({
                date: element.created_at,
                idTweet: element.id,
                keyword: word
            })
        }

        console.log('data parsed', parseData);
    }); 
});


// Configuration réseau
const app = express();
const hostname = "0.0.0.0";
const port = 3000;

// Connexion BDD
// protocole://service/nom_bdd
mongoose.connect("mongodb://mongo/" + process.env.DB_NAME, { useNewUrlParser: true, useUnifiedTopology: true });

// Configuration mongoose
mongoose.set("useCreateIndex", true);

// Permet l'envoi d'objet js en json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Permet le parse du cookie dans les headers
app.use(cookieParser());

// Permet l'usage de l'api en local et l'envoi des headers
app.use(cors());

// Check la validé du token
const tokenRoute = require("./api/route/tokenRoute");
tokenRoute(app);

// Importe la fonction anonyme dans la constante
const userRoute = require("./api/route/userRoute");
const keywordRoute = require("./api/route/keywordRoute");
// Utilise la fonction anonyme contenu dans la constante
userRoute(app);
keywordRoute(app);

app.listen(port, hostname);