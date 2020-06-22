const twitClientHelper = require("../helper/twitClientHelper");

exports.GetUserTweets = (req, res) => {
    const twit = twitClientHelper.GenerateTwitClient(req);

    try {
        twit.get("statuses/user_timeline", (err, data) => {
            if (!err) {
                res.status(200).json(data);
            } else {
                res.status(400).json({ message: err });
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Erreur API" });
    }
};

exports.GetUserInfos = (req, res) => {
    const twit = twitClientHelper.GenerateTwitClient(req);

    try {
        twit.get("account/verify_credentials", (err, data) => {
            if (!err) {
                res.status(200).json(data);
            } else {
                res.status(400).json({ message: err });
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Erreur API" });
    }
};

// Récupère tous les keywords tendances d'un woeid
exports.GetKeywordTrendByCountry = (req, res) => {
    const { woeid } = req.params;
    const twit = twitClientHelper.GenerateTwitClient(req);

    try {
        twit.get("trends/place", { id: woeid }, (err, data) => {
            if (!err) {
                res.status(200).json(data);
            } else {
                res.status(400).json({ message: err });
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Erreur API" });
    }
};

exports.GetFranceTrend = (req, res) => {
    const twit = twitClientHelper.GenerateTwitClient(req);

    try {
        twit.get("trends/place", { id: "580778" }, (err, data) => {
            if (!err) {
                res.status(200).json(data);
            } else {
                res.status(400).json({ message: err });
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Erreur API" });
    }
}

exports.InvalidateUserToken = (req, res) => {
    const twit = twitClientHelper.GenerateTwitClient(req);

    try {
        twit.post("oauth/invalidate_token", (err, data) => {
            if (!err) {
                res.status(200).json(data);
            } else {
                res.status(400).json({ message: err });
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Erreur API" });
    }
};

// Récupère tous les woeids qu'utilise twitter
exports.GetWoeids = (req, res) => {
    const twit = twitClientHelper.GenerateTwitClient(req);

    try {
        twit.get("trends/available", (err, data) => {
            if (!err) {
                res.status(200).json(data);
            } else {
                res.status(400).json({ message: err });
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Erreur API" });
    }
};

// Post un tweet (update status)
exports.UpdateStatus = (req, res) => {
    const twit = twitClientHelper.GenerateTwitClient(req);

    try {
        twit.post("statuses/update", { status: req.body.status }, (err, data) => {
            if (!err) {
                res.status(200).json(data);
            } else {
                res.status(400).json({ message: err });
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Erreur API" });
    }
};
