exports.GetPipeline = (filterKey, keyword) => {

    // Retourne les stats des dernieres 24h grouper par heure (totale 24)
    if (filterKey == "hourly") {
        return [
            { $match: { keyword: keyword, created_at: { $gt: new Date(Date.now() - 24 * 60 * 60 * 1000) } } },
            { $sort: { created_at: 1 } },
            {
                $group: {
                    _id: { "$hour": "$created_at" },
                    first: { "$first": "$$ROOT" },
                }
            }
        ];
    }
    // Retourne les stats des dernieres 7j grouper par jour (totale 7)
    else if (filterKey == "daily") {
        return [
            { $match: { keyword: keyword, created_at: { $gt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) } } },
            { $sort: { created_at: 1 } },
            {
                $group: {
                    _id: { "$dayOfMonth": "$created_at" },
                    first: { "$first": "$$ROOT" },
                }
            }
        ];
    }
    // Retourne les stats de la l'anneé grouper par mois (totale 12)
    else if (filterKey == "monthly") {
        return [
            { $match: { keyword: keyword, created_at: { $gt: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000) } } },
            { $sort: { created_at: 1 } },
            {
                $group: {
                    _id: { "$month": "$created_at" },
                    first: { "$first": "$$ROOT" },
                }
            }
        ];
    }
    // Retourne les stats de la derniere heure grouper par 2minutes (totale 30)
    else {
        return [
            { $match: { keyword: keyword, created_at: { $gt: new Date(Date.now() - 60 * 60 * 1000) } } },
            { $sort: { created_at: 1 } },
            {
                $group: {
                    _id: {
                        "$toDate": {
                            "$subtract": [
                                { "$toLong": { "$toDate": "$_id" } },
                                { "$mod": [{ "$toLong": { "$toDate": "$_id" } }, 1000 * 60 * 2] }
                            ]
                        }
                    },
                    first: { "$first": "$$ROOT" },
                }
            }
        ];
    }

}