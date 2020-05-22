const jwt = require("jsonwebtoken");

const config = require("../../config");
const { errorMessage } = config;

const { ADMIN_JWT_KEY } = process.env;
const { GUEST_JWT_KEY } = process.env;

exports.CheckAdminOrGuestToken = (req, res) => {
    let token = req.headers.authorization ? req.headers.authorization : req.cookies.token;

    try {
        if (!token) {
            res.status(403);
            res.json({ message: "Vous n'avez pas de token d'authentificaton" });
        }
        else {
            jwt.verify(token, GUEST_JWT_KEY, (error, result) => {
                if (!error && result) {
                    res.status(200);
                    res.json({ message: "Token valide" });
                }
                else {
                    jwt.verify(token, ADMIN_JWT_KEY, (error, result) => {
                        if (!error && result) {
                            res.status(200);
                            res.json({ message: "Token valide" });
                        }
                        else {
                            res.status(403);
                            res.json({ message: "Token non valide" });
                        }
                    })
                }
            });
        }
    } catch (e) {
        res.status(500);
        res.json({ message: errorMessage });
    }
}