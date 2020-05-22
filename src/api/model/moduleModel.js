const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const moduleSchema = new Schema({
    nom_module: {
        type: String,
        required: true
    },
    id_intervenant: {
        type: String,
        required: "il faut un id à l'intervenant"
    },
    id_session: {
        type: String,
        required: "il faut un id à la session"
    },
    date_debut: {
        type: Date,
        required: "il faut une date début du module"
    },
    date_fin: {
        type: Date,
        required: "il faut une date fin du module"
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Module", moduleSchema, "modules");
