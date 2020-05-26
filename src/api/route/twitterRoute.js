const twitterController = require("../controller/twitterController");

// Exporte la fonction anonyme
module.exports = (app) => {
    app.route("/twitter/get_user_tweets")
        .get(twitterController.GetUserTweets);

};
