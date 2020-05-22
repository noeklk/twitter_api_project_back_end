const moduleController = require("../controller/moduleController");
const jwtMiddleware = require("../middleware/jwtMiddleware");

// Exporte la fonction anonyme
module.exports = (app) => {
  app.route("/modules")
    .get(jwtMiddleware.VerifyAdminToken, moduleController.GetAllModules);

  app.route("/modules/:id_module")
    .get(jwtMiddleware.VerifyAdminToken, moduleController.GetAModuleById)
    .put(jwtMiddleware.VerifyAdminToken, moduleController.UpdateAModuleById)
    .delete(jwtMiddleware.VerifyAdminToken, moduleController.DeleteAModuleById);

  app.route("/sessions/:id_session/modules")
    .get(jwtMiddleware.VerifyAdminToken, moduleController.GetAllModulesBySessionId);

  app.route("/intervenants/:id_intervenant/modules")
    .get(jwtMiddleware.VerifyAdminToken, moduleController.GetAllModulesByContributorId);

  app.route("/intervenants/:id_intervenant/sessions/:id_session/modules")
    .post(jwtMiddleware.VerifyAdminOrGuestToken, moduleController.CreateAModuleByContributorIdAndSessionId)
    .get(jwtMiddleware.VerifyAdminOrGuestToken, moduleController.GetAllModulesByContributorIdAndSessionId);
};
