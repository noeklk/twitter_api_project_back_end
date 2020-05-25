const express = require("express");
const router = express.Router();
const oauth = require("oauth");
const _twitterConsumerKey = process.env.TWITTER_CONSUMER_KEY;
const _twitterConsumerSecret = process.env.TWITTER_CONSUMER_SECRET;
const twitterCallbackUrl = process.env.TWITTER_CALLBACK_URL;
const consumer = new oauth.OAuth("https://twitter.com/oauth/request_token", "https://twitter.com/oauth/access_token", _twitterConsumerKey, _twitterConsumerSecret, "1.0A", twitterCallbackUrl, "HMAC-SHA1");

router.get("/connect", (req, res) => {
    consumer.getOAuthRequestToken(function (error, oauthToken, oauthTokenSecret) {
        if (error) {
            res.status(500).json({ error });
        } else {
            req.session.oauthRequestToken = oauthToken;
            req.session.oauthRequestTokenSecret = oauthTokenSecret;
            const redirect = {
                redirectUrl: `https://twitter.com/oauth/authorize?oauth_token=${req.session.oauthRequestToken}`
            }
            res.send(redirect);
        }
    });
});

router.get("/saveAccessTokens", (req, res) => {
    consumer.getOAuthAccessToken(
        req.query.oauth_token,
        req.session.oauthRequestTokenSecret,
        req.query.oauth_verifier,
        (error, oauthAccessToken, oauthAccessTokenSecret) => {
            if (!error) {
                req.session.oauthAccessToken = oauthAccessToken;
                req.session.oauthAccessTokenSecret = oauthAccessTokenSecret;

                return res.json({ oauthAccessToken, oauthAccessTokenSecret });
            }
            else {
                res.status(500).json({ message: error })
            }
        });
});

module.exports = router;