const twitterController = require("../controller/twitterController");
const jwtMiddleware = require("../middleware/jwtMiddleware");

// Exporte la fonction anonyme
module.exports = (app) => {
    app.route("/twitter/get_user_tweets")
        .get(jwtMiddleware.VerifyUserToken, twitterController.GetUserTweets);

    app.route("/twitter/get_user_infos")
        .get(jwtMiddleware.VerifyUserToken, twitterController.GetUserInfos);

    app.route("/twitter/invalidate_token")
        .post(jwtMiddleware.VerifyUserToken, twitterController.InvalidateUserToken);

};
