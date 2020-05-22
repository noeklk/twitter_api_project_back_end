const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    nom: {
        type: String,
        required: "Le nom est un champ obligatoire"
    },
    prenom: {
        type: String,
        required: "Le prenom est un champ obligatoire"
    },
    role: {
        type: String,
        enum: ["etudiant", "intervenant", "admin"],
        required: "Le role est un champ obligatoire"
    },
    pseudo: {
        type: String,
        required: function () {
            if (this.pseudo === "" || this.pseudo === undefined) {
                this.pseudo = `${this.prenom}.${this.nom}`;
            }
        },
        unique: true
    },
    password: {
        type: String,
        required: function () {
            if (this.role === "intervenant") {
                this.password = undefined;
            } else {
                return "Le mot de passe est un champ obligatoire";
            }
        }
    },
    admin_code: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("User", userSchema, "users");