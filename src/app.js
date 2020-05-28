// Importation des libraires
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const schedule = require('node-schedule');

// Ref : https://developer.twitter.com/en/docs/tweets/rules-and-filtering/guides/build-standard-queries

const keywordsParse = (keyword) => {
    let regex = /[#]/g;
    let isMatch = keyword.match(regex);
    return !isMatch ? "#".concat(keyword) : keyword;
}
const session = require("express-session");

// Configuration réseau
const app = express();
const hostname = "0.0.0.0";
const port = 3000;

// Connexion BDD
// protocole://service/nom_bdd
mongoose.connect("mongodb://mongo/" + process.env.DB_NAME, { useNewUrlParser: true, useUnifiedTopology: true });

// Configuration mongoose
mongoose.set("useCreateIndex", true);

// CRON Keywords
// const job = schedule.scheduleJob('/10 * * * * *', () => {
//     console.log('execute job');
//     let word = 'tpmp';

//     T.get('trends/place', { id: 615702 })
//     .catch(function (err) {
//         console.log('caught error', err.stack);
//     })
//     .then(function (result) {
//         // console.log(JSON.stringify(result.data, null, 2));
//         // insérer ou mettre à jour tous les mots clés tendance (50)
//         // Attention, l'api retourne parfois un tweet_volume null, ignorer

//         for (let keyword of result.data[0].trends) {
//             console.log("keyword : " + keyword.name + " tweets : " + keyword.tweet_volume);
//         }

//     }); 
// });

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


app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: true }));
app.use((req, res, next) => {
    res.locals.session = req.session;
    next();
});

const sessionRoute = require("./api/route/sessionRoute");
sessionRoute(app);

const twitterRoute = require("./api/route/twitterRoute");
twitterRoute(app);

app.listen(port, hostname);