const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const keywordSchema = new Schema({
    keyword: {
        type: String,
        required: true
    },
    tweets_number: {
        type: Number,
        required: true
    },
    id_user: {
        type: String,
        required: "Le keyword doit provenir d'un utilisateur"
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Keyword", keywordSchema, "keywords");