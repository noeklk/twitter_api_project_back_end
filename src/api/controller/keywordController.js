const Keyword = require("../model/keywordModel");

const config = require("../../config");
const { errorMessage } = config;


exports.GetAllKeywordsByKeyword = (req, res) => {
    try {
        let keyword = req.params.keyword;
        const filterKey = req.query.filter ? req.query.filter : "";
        let pipeline = getPipeline(filterKey, keyword);
        
        Keyword.aggregate(pipeline, (error, data) => {
            if (!error) {
                res.status(200);
                res.json(data);
            }
            else {
                res.status(400);
                console.log(error);
                res.json({ message: "Aucun mot trouvé" });
            }
        });

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

function getPipeline(filterKey, keyword) {

    // Retourne les stats des dernieres 24h grouper par heure (totale 24)
    if (filterKey == "hourly"){
        return [
            { $match: {keyword: keyword , created_at : { $gt: new Date(Date.now() - 24*60*60*1000) } } },
            { $sort: { created_at: 1 } },
            { 
                $group: {
                    _id: { "$hour": "$created_at" },
                    first: {"$first": "$$ROOT"},
                } 
            }
        ];
    }
    // Retourne les stats des dernieres 7j grouper par jour (totale 7)
    else if (filterKey == "daily") {
        return [
            { $match: {keyword: keyword , created_at : { $gt: new Date(Date.now() - 7*24*60*60*1000) } } },
            { $sort: { created_at: 1 } },
            { 
                $group: {
                    _id: { "$dayOfMonth": "$created_at" },
                    first: {"$first": "$$ROOT"},
                } 
            }
        ];
    }
    // Retourne les stats de la l'anneé grouper par mois (totale 12)
    else if (filterKey == "monthly") {
        return [
            { $match: {keyword: keyword , created_at : { $gt: new Date(Date.now() - 365*24*60*60*1000) } } },
            { $sort: { created_at: 1 } },
            { 
                $group: {
                    _id: { "$month": "$created_at" },
                    first: {"$first": "$$ROOT"},
                } 
            }
        ];
    }
    // Retourne les stats de la derniere heure grouper par 2minutes (totale 30)
    else {
        return [
            { $match: {keyword: keyword , created_at : { $gt: new Date(Date.now() - 60*60*1000) } } },
            { $sort: { created_at: 1 } },
            { 
                $group: {
                    _id: {
                        "$toDate": {
                            "$subtract": [
                                { "$toLong": { "$toDate": "$_id" }  },
                                { "$mod": [ { "$toLong": { "$toDate": "$_id" } }, 1000 * 60 * 2 ] }
                            ]
                        }
                    },
                    first: {"$first": "$$ROOT"},
                } 
            }
        ];
    }
    
}