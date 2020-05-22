const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    note: {
        type: Number,
        min: 0,
        max: 20,
        required: "Il faut une note pour le module"
    },
    message: {
        type: String,
        required: "Il faut laisser une appréciation pour le module"
    },
    id_etudiant: {
        type: String,
        required: "La note doit provenir d'un id étudiant"

    },
    id_module: {
        type: String,
        required: "La note doit provenir d'un id module"
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Note", noteSchema, "notes");
