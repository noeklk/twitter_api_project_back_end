const sessionController = require("../controller/sessionController");
const jwtMiddleware = require("../middleware/jwtMiddleware");

// Exporte la fonction anonyme
module.exports = (app) => {
    app.route("/sessions/connect")
        .get(jwtMiddleware.VerifyUserToken, sessionController.Connect);

    app.route("/sessions/save_access_tokens")
        .get(jwtMiddleware.VerifyUserToken, sessionController.GetOAuthAccessToken);
};
