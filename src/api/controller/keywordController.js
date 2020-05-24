// const jwt = require("jsonwebtoken");
const Keyword = require("../model/keywordModel");

const config = require("../../config");
const { errorMessage } = config;

exports.CreateKeywordByIdUser = (req, res) => {
    try {
        let new_keyword = new Keyword({
            keyword : req.body.keyword,
            tweets_number: req.body.tweets_number,
            id_user : req.body.id_user
        });

        new_keyword.save((error, keyword) => {
            if (!error && keyword) {
                res.status(201);
                res.json(keyword);
            } else {
                res.status(400);
                console.log(error);
                res.json({ message: `Le mot ${new_keyword} existe déjà pour cet utilisateur.` });
            }
        })
    } catch (e) {
        res.status(500);
        console.log(e);
        res.json({ message: errorMessage })
    }
}


exports.GetAllByIdUser = (req, res) => {
    try {
        Keyword.find((error, keywords) => {
            if (!error && keywords.length) {
                res.status(200);
                res.json(keywords);
            }
            else {
                res.status(400);
                console.log(error);
                res.json({ message: "Aucun mot trouvé" });
            }
        })
    } catch (e) {
        res.status(500);
        console.log(e);
        res.json({ message: errorMessage });
    }
}



// exports.DeleteAUserById = (req, res) => {
//     const { id_user } = req.params;

//     try {
//         User.findByIdAndDelete(id_user, (error, users) => {
//             if (!error && users) {
//                 res.status(200);
//                 res.json({ message: `La session avec l'id: ${id_user} a été correctement supprimé` });
//             } else {
//                 res.status(400);
//                 console.log(error);
//                 res.json({ message: `L'id de session: ${id_user} est introuvable` });
//             }
//         });
//     } catch (e) {
//         res.status(500);
//         console.log(e);
//         res.json({ message: errorMessage });
//     }
// }