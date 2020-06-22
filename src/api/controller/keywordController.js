const Keyword = require("../model/keywordModel");

const config = require("../../config");
const { errorMessage } = config;

exports.GetAllKeywordsByKeyword = (req, res) => {
    try {
        let keyword = req.params.keyword

        Keyword.find({ keyword }, (error, data) => {
            if (!error) {
                res.status(200);
                res.json(data);
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

// Récupère un keyword de la BD par son id
exports.GetAKeywordById = (req, res) => {
    try {
        const id_keyword = req.params.id_keyword;
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
exports.UpdateAKeywordById = (req, res) => {
    try {
        const id_keyword = req.params.id_keyword;
        let updateK = req.body;
        Keyword.findByIdAndUpdate(id_keyword, updateK, { new: true }, (error, keyword) => {
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
exports.DeleteAKeywordById = (req, res) => {
    try {
        const id_keyword = req.params.id_keyword;
        Keyword.findByIdAndDelete(id_keyword, (error, keyword) => {
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
