const jwt = require("jsonwebtoken");

const config = require("../../config");
const { errorMessage } = config;

const { USER_JWT_KEY } = process.env;

exports.CheckUserToken = (req, res) => {
    let token = req.headers.authorization ? req.headers.authorization : req.cookies.token;

    try {
        if (!token) {
            res.status(403);
            res.json({ message: "Vous n'avez pas de token d'authentificaton" });
        }
        else {
            jwt.verify(token, USER_JWT_KEY, (error, result) => {
                if (!error && result) {
                    res.status(200);
                    res.json({ message: "Token valide" });
                }
                else {
                    res.status(403);
                    res.json({ message: "Token non valide" });
                }
            });
        }
    } catch (e) {
        res.status(500);
        res.json({ message: errorMessage });
    }
}