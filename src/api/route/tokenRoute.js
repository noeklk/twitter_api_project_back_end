const tokenController = require("../controller/tokenController");

// Exporte la fonction anonyme
module.exports = (app) => {
  app.route("/token")
    .get(tokenController.CheckAdminOrGuestToken);
};
