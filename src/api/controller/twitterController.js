const express = require("express");
const router = express.Router();
const T = require("twit");

function GenerateTwitClient(accessToken, accessTokenSecret) {
    const twit = new T({
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        access_token: accessToken,
        access_token_secret: accessTokenSecret
    });

    return twit;
}

router.get("/get_tweets", (req, res) => {

    let accessToken = req.headers.accesstoken;
    let accessTokenSecret = req.headers.accesstokensecret;

    const twit = GenerateTwitClient(accessToken, accessTokenSecret);

    try {
        twit.get("statuses/home_timeline", (err, data, response) => {
            console.log("data", data);
            // console.log("response", response);
            if (!err) {
                res.status(200).json({ data });
            } else {
                res.status(400).json({ message: "Erreur API" });
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Erreur API" });
    }

});

module.exports = router;