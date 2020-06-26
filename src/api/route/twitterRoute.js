const twitterController = require("../controller/twitterController");
const jwtMiddleware = require("../middleware/jwtMiddleware");

// Exporte la fonction anonyme
module.exports = (app) => {
    app.route("/twitter/trends/france")
        .get(jwtMiddleware.VerifyUserToken, twitterController.GetFranceTrend);

    app.route("/twitter/get_user_tweets")
        .get(jwtMiddleware.VerifyUserToken, twitterController.GetUserTweets);

    app.route("/twitter/get_user_infos")
        .get(jwtMiddleware.VerifyUserToken, twitterController.GetUserInfos);
    // Where On Earth IDentifier
    // France : 580778
    app.route("/twitter/trends/:woeid")
        .get(jwtMiddleware.VerifyUserToken, twitterController.GetKeywordTrendByCountry);

    app.route("/twitter/woeids")
        .get(jwtMiddleware.VerifyUserToken, twitterController.GetWoeids);


    app.route("/twitter/invalidate_token")
        .post(twitterController.InvalidateUserToken);

    app.route("/twitter/update_status")
        .post(jwtMiddleware.VerifyUserToken, twitterController.UpdateStatus);

};
