const sessionController = require("../controller/sessionController");
const jwtMiddleware = require("../middleware/jwtMiddleware");

// Exporte la fonction anonyme
module.exports = (app) => {
  app.route("/sessions")
    .get(jwtMiddleware.VerifyAdminOrGuestToken, sessionController.GetAllSessions)
    .post(jwtMiddleware.VerifyAdminToken, sessionController.CreateASession);

  app.route("/sessions/:id_session")
    .get(jwtMiddleware.VerifyAdminOrGuestToken, sessionController.GetASessionById)
    .put(jwtMiddleware.VerifyAdminToken, sessionController.UpdateASessionById)
    .delete(jwtMiddleware.VerifyAdminToken, sessionController.DeleteASessionById);

    app.route("/sessions/annee/:annee")
    .get(jwtMiddleware.VerifyAdminOrGuestToken, sessionController.GetAllSessionsByYear);
};
