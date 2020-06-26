const T = require("twit");

function GetAccessTokensFromRequestHeaders(req) {
    let accessTokens = {
        accessToken: req.headers.accesstoken,
        accessTokenSecret: req.headers.accesstokensecret
    }

    return accessTokens;
}

exports.GenerateTwitClient = (req) => {
    let accessTokens = GetAccessTokensFromRequestHeaders(req);

    const twit = new T({
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        access_token: accessTokens.accessToken,
        access_token_secret: accessTokens.accessTokenSecret
    });

    return twit;
}

exports.GenerateTwitAppOnlyClient = () => {
    const twit = new T({
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        app_only_auth: true
    });

    return twit;
}