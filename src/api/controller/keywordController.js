// const jwt = require("jsonwebtoken");
const Keyword = require("../model/keywordModel");

const config = require("../../config");
const { errorMessage } = config;

// Enregistre un keyword pour un user
exports.CreateKeywordByIdUser = (req, res) => {
    try {
        let new_keyword = new Keyword({
            keyword : req.body.keyword,
            tweets_number: req.body.tweets_number,
            id_user : req.params.id_user
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

// Récupère tous les keywords du user
exports.GetAllKeywordsByIdUser = (req, res) => {
    try {
        let id_user  = req.params.id_user;
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
exports.GetKeywoardByIdUser = (req, res) => {
    try {
        let infos_keyword  = req.params;
        
        Keyword.find({infos_keyword}, (error, keyword) => {
            if (!error && keyword.length) {
                res.status(200);
                res.json(keyword);
            }
            else {
                res.status(400);
                console.log(error);
                res.json({ message: "Aucun mot trouvé" });
            }
            
        })
        
        // res.json({infos_keyword});
        
    } catch (e) {
        res.status(500);
        console.log(e);
        res.json({ message: errorMessage });
    }

}

// Tous les keywords enregistrés dans la BD
exports.GetAllKeywoards = (req, res) => {
    try {
        Keyword.find({}, (error, keyword) => {
            if (!error && keyword.length) {
                res.status(200);
                res.json(keyword);
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

// Récupère un keyword de la BD par son id
exports.GetAKeyword = (req, res) => {
    try {
        let keyword_id  = req.params.keyword_id;
        Keyword.findById(keyword_id, (error, keyword) => {
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
        let keyword_id  = req.params.keyword_id;
        let updateK = req.body;
        Keyword.findByIdAndUpdate(keyword_id , updateK, {new: true} , (error, keyword) => {
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
        let keyword_id  = req.params.keyword_id;
        Keyword.findByIdAndDelete(keyword_id , (error, keyword) => {
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