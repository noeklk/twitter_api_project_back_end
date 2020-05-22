// Importation des libraires
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

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
const noteRoute = require("./api/route/noteRoute");
const moduleRoute = require("./api/route/moduleRoute");
const sessionRoute = require("./api/route/sessionRoute");
const userRoute = require("./api/route/userRoute");
// Utilise la fonction anonyme contenu dans la constante
noteRoute(app);
moduleRoute(app);
sessionRoute(app);
userRoute(app);

app.listen(port, hostname);