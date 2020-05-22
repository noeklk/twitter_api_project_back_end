const noteController = require("../controller/noteController");
const jwtMiddleware = require("../middleware/jwtMiddleware");

// Exporte la fonction anonyme
module.exports = (app) => {
  app.route("/notes/")
    .get(jwtMiddleware.VerifyAdminToken, noteController.GetAllNotes);

  app.route("/notes/:id_note")
    .get(jwtMiddleware.VerifyAdminToken, noteController.GetANoteById)
    .put(jwtMiddleware.VerifyAdminToken, noteController.UpdateANoteById)
    .delete(jwtMiddleware.VerifyAdminToken, noteController.DeleteANoteById);

  app.route("/modules/:id_module/notes")
    .get(jwtMiddleware.VerifyAdminToken, noteController.GetAllNotesByModuleId);

  app.route("/etudiants/:id_etudiant/notes")
    .get(jwtMiddleware.VerifyAdminOrGuestToken, noteController.GetAllNotesByStudentId);

  app.route("/etudiants/:id_etudiant/modules/:id_module/notes")
    .post(jwtMiddleware.VerifyAdminOrGuestToken, noteController.CreateANoteByStudentIdAndModuleId)
    .get(jwtMiddleware.VerifyAdminOrGuestToken, noteController.GetAllNotesByModuleIdAndStudentId);

  app.route("/modules/:id_module/notes/average")
  .get(jwtMiddleware.VerifyAdminToken, noteController.GetNotesAverageByModuleId)
};
