// Importation des libraires
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const session = require("express-session");
const trendsCron = require("./api/cron/trendsCron");

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

// Cron qui save toute les tendances dans la db toutes les 30 secondes
trendsCron();

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