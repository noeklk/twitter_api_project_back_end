const sessionController = require("../controller/sessionController");

// Exporte la fonction anonyme
module.exports = (app) => {
    app.route("/sessions/connect")
        .get(sessionController.Connect);

    app.route("/sessions/save_access_tokens")
        .get(sessionController.GetOAuthAccessToken);
};
