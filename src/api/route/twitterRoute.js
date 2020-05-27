const twitterController = require("../controller/twitterController");
const jwtMiddleware = require("../middleware/jwtMiddleware");

// Exporte la fonction anonyme
module.exports = (app) => {
    app.route("/twitter/get_user_tweets")
        .get(jwtMiddleware.VerifyUserToken, twitterController.GetUserTweets);

};
