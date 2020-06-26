const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../model/userModel");

const config = require("../../config");
const { errorMessage } = config;

exports.GetAllUsers = (req, res) => {
    try {
        User.find((error, users) => {
            if (!error && users.length) {
                res.status(200);
                res.json(users);
            }
            else {
                res.status(400);
                console.log(error);
                res.json({ message: "Aucun utilisateur trouvé" });
            }
        })
    } catch (e) {
        res.status(500);
        console.log(e);
        res.json({ message: errorMessage });
    }
}

exports.GetAUserById = (req, res) => {
    const { id_user } = req.params;

    try {
        User.findById(id_user, (error, users) => {
            if (!error && users) {
                res.status(200);
                res.json(users);
            } else {
                res.status(400);
                res.json({ message: `L'id de user: ${id_user} est introuvable` });
            }
        })

    } catch (e) {
        res.status(500);
        console.log(e);
        res.json({ message: errorMessage });
    }
}

exports.UserRegister = (req, res) => {
    try {
        let new_user = new User(req.body);
        const { password } = req.body;

        let hashPass = bcrypt.hashSync(password, 10);

        new_user.password = hashPass;

        new_user.save((error, user) => {
            if (!error && user) {
                res.status(201);
                res.json({ message: "L'utilisateur a été corrèctement créé" });
            } else {
                res.status(400);
                console.log(error);
                res.json({ message: "L'utilisateur existe déja" });
            }
        });
    }
    catch (e) {
        res.status(500);
        console.log(e);
        res.json({ message: errorMessage });
    }
}

exports.UserLogin = (req, res) => {
    try {
        const { pseudo } = req.body;
        const { password } = req.body;
        const { USER_JWT_KEY } = process.env;

        if (!pseudo) {
            return res.status(400).json({ message: "Veuillez renseigner un nom d'utilisateur" });
        } else if (!password) {
            return res.status(400).json({ message: "Veuillez renseigner un mot de passe" });
        } else {
            User.findOne({ pseudo }, (error, user) => {
                if (!user) {
                    return res.status(400).json({ message: "L'utilisateur n'existe pas" });
                }
                else if (!bcrypt.compareSync(password, user.password)) {
                    return res.status(400).json({ message: "Le mot de passe est incorrect" });
                } else {

                    jwt.sign({ pseudo }, USER_JWT_KEY, { expiresIn: "10m" }, (error, token) => {
                        if (!error && token) {
                            res.status(200);
                            res.cookie("token", token, { maxAge: 600000, httpOnly: true });
                            res.json({ token, user: { id: user._id } });
                        }
                        else {
                            res.status(500);
                            console.log(error);
                            res.json({ message: errorMessage });
                        }
                    });
                }
            });
        }
    } catch (e) {
        res.status(500);
        console.log(e);
        res.json({ message: errorMessage });
    }
}

exports.UpdateAUserById = (req, res) => {
    const { id_user } = req.params;
    const { password } = req.body;

    try {
        let hashPass = bcrypt.hashSync(password, 10);
        req.body.password = hashPass;

        User.findOneAndUpdate(id_user, req.body, { new: true }, (error, users) => {
            if (!error && users) {
                res.status(200);
                console.log(res);
                res.json({ message: `L'id d'utilisateur: ${id_user} a bien été modifié` });
            }
            else {
                res.status(400);
                console.log(error);
                res.json({ message: `L'id d'utilisateur: ${id_user} est introuvable` });
            }
        });
    } catch (e) {
        res.status(500);
        console.log(e);
        res.json({ message: errorMessage });
    }
}

exports.DeleteAUserById = (req, res) => {
    const { id_user } = req.params;

    try {
        User.findByIdAndDelete(id_user, (error, users) => {
            if (!error && users) {
                res.status(200);
                res.json({ message: `La session avec l'id: ${id_user} a été correctement supprimé` });
            } else {
                res.status(400);
                console.log(error);
                res.json({ message: `L'id de session: ${id_user} est introuvable` });
            }
        });
    } catch (e) {
        res.status(500);
        console.log(e);
        res.json({ message: errorMessage });
    }
}