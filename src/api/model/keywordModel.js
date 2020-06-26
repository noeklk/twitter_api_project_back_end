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
    created_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Keyword", keywordSchema, "keywords");