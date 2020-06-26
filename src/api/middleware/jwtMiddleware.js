const jwt = require("jsonwebtoken");

const config = require("../../config");
const { errorMessage } = config;

const { USER_JWT_KEY } = process.env;

exports.VerifyUserToken = (req, res, next) => {
    let token = req.headers.authorization ? req.headers.authorization : req.cookies.token;

    try {
        if (token) {
            jwt.verify(token, USER_JWT_KEY, (error, result) => {
                if (!error && result) {
                    next();
                }
                else {
                    res.status(403);
                    res.json({ message: "Vous n'avez pas les autorisations nécessaire pour exécuter cette action" })
                }
            })
        }
        else {
            res.status(403);
            res.json({ message: "Vous n'avez pas de token d'authentificaton" });
        }
    } catch (e) {
        res.status(500);
        res.json({ message: errorMessage });
    }
}