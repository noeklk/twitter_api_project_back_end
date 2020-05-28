const twitterController = require("../controller/twitterController");
const jwtMiddleware = require("../middleware/jwtMiddleware");

// Exporte la fonction anonyme
module.exports = (app) => {
    app.route("/twitter/get_user_tweets")
        .get(jwtMiddleware.VerifyUserToken, twitterController.GetUserTweets);

    app.route("/twitter/get_user_infos")
        .get(jwtMiddleware.VerifyUserToken, twitterController.GetUserInfos);
    // Where On Earth IDentifier
    // France : 580778
    app.route("/twitter/trends/:woeid")
        .get(twitterController.GetKeywordTrendByCountry);

    app.route("/twitter/woeids")
        .get(twitterController.GetWoeids);

    app.route("/twitter/invalidate_token")
        .post(jwtMiddleware.VerifyUserToken, twitterController.InvalidateUserToken);
};
