const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    pseudo: {
        type: String,
        required: "Pseudo obligatoire",
        unique: true
    },
    password: {
        type: String,
        required: "Mot de passe obligatoire"
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("User", userSchema, "users");