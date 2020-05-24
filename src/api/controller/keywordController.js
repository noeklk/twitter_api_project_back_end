// const jwt = require("jsonwebtoken");
const Keyword = require("../model/keywordModel");
const User = require("../model/userModel");

const config = require("../../config");
const { errorMessage } = config;

// Enregistre un keyword pour un user
exports.CreateKeywordByIdUser = (req, res) => {
    try {
        const id_user = req.params.id_user;

        let new_keyword = new Keyword({
            keyword : req.body.keyword,
            tweets_number : req.body.tweets_number,
            id_user : id_user
        });

        new_keyword.save((error, keyword) => {
            if (!error && keyword) {
                res.status(201);
                res.json(keyword);
        
            } else {
                res.status(400);
                console.log(error);
                res.json({ message: `Probleme dans la création du mot ${new_keyword} .` });
            }
        })
    } catch (e) {
        res.status(500);
        console.log(e);
        res.json({ message: errorMessage })
    }
}

// Récupère tous les keywords du user
exports.GetAllKeywordsByIdUser = (req, res) => {
    try {
        const id_user  = req.params.id_user;

        Keyword.find({id_user}, (error, keywords) => {
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

// Récupère un keyword d'un utilisateur
exports.GetKeywoardByIdUserAndIdKeyword = (req, res) => {
    const { id_user } = req.params;
    const { id_keyword } = req.params;
  
    try {
        User.findOne({ _id : id_user }, (error, user) => {
            if (!user) {
                return res.status(400).json({ message: "L'utilisateur n'existe pas" });
             } 
            else {
                Keyword.findById(id_keyword, (error, keyword) => {
                    if (!error) {
                        res.status(200);
                        res.json(keyword);
                    }
                    else {
                        res.status(400);
                        console.log(error);
                        res.json({ message: "Aucun mot trouvé" });
                    }
                })
            }
        })      
    } catch (e) {
        res.status(500);
        console.log(e);
        res.json({ message: errorMessage });
    }
}

// Récupère un keyword de la BD par son id
exports.GetAKeyword = (req, res) => {
    try {
        const id_keyword  = req.params.id_keyword;
        Keyword.findById(id_keyword, (error, keyword) => {
            if (!error) {
                res.status(200);
                res.json(keyword);
            }
            else {
                res.status(400);
                console.log(error);
                res.json({ message: "Aucun mot trouvé" });
            }
        })
        
        // res.json({keyword_id});
    } catch (e) {
        res.status(500);
        console.log(e);
        res.json({ message: errorMessage });
    }
}


// Mise a jour d'un keyword dans la BD par son id
exports.UpdateAKeyword = (req, res) => {
    try {
        const id_keyword  = req.params.id_keyword;
        let updateK = req.body;
        Keyword.findByIdAndUpdate(id_keyword , updateK, {new: true} , (error, keyword) => {
            if (!error) {
                res.status(200);
                res.json(keyword);
            }
            else {
                res.status(400);
                console.log(error);
                res.json({ message: "Aucun mot trouvé" });
            }
        })
        
        // res.json({keyword_id});
    } catch (e) {
        res.status(500);
        console.log(e);
        res.json({ message: errorMessage });
    }
}

// Supprime un keyword dans la BD par son id
exports.DeleteAKeyword = (req, res) => {
    try {
        const id_keyword  = req.params.id_keyword;
        Keyword.findByIdAndDelete(id_keyword , (error, keyword) => {
            if (!error) {
                res.status(200);
                res.json(keyword);
            }
            else {
                res.status(400);
                console.log(error);
                res.json({ message: "Aucun mot trouvé" });
            }
        })
        
        // res.json({keyword_id});
    } catch (e) {
        res.status(500);
        console.log(e);
        res.json({ message: errorMessage });
    }
}