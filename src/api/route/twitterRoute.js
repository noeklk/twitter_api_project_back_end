const twitterController = require("../controller/twitterController");
const jwtMiddleware = require("../middleware/jwtMiddleware");

// Exporte la fonction anonyme
module.exports = (app) => {
    app.route("/twitter/get_user_tweets")
        .get(jwtMiddleware.VerifyUserToken, twitterController.GetUserTweets);

    // Where On Earth IDentifier
    // France : 580778
    app.route("/twitter/trends/:woeid")
        .get(twitterController.GetKeywordTrendByCountry);

    app.route("/twitter/woeids")
        .get(twitterController.GetWoeids);
};
