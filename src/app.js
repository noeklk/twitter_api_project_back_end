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
    consumer_key:         'your key',
    consumer_secret:      'your secret',
    access_token:         'your token',
    access_token_secret:  'your secret token'
});

// test CRON
const job = schedule.scheduleJob('1 * * * * *', () => {
    console.log('execute job');

    // max 100
    T.get('search/tweets', { q: '#Happiness', count: 10 })
    .catch(function (err) {
        console.log('caught error', err.stack);
    })
    .then(function (result) {
        // console.log(element.created_at);
        for (let element of result.data['statuses']) {
            console.log(element.created_at);
            console.log(JSON.stringify(result.data, null, 2));
        }
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