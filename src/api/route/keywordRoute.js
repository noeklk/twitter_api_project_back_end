const keywordController = require("../controller/keywordController");
const jwtMiddleware = require("../middleware/jwtMiddleware");

module.exports = (app) => {
    app.route("/users/:id_user/keywords")
        .post(jwtMiddleware.VerifyUserToken, keywordController.CreateKeywordByIdUser)
        .get(jwtMiddleware.VerifyUserToken, keywordController.GetAllKeywordsByIdUser);

    app.route("/users/:id_user/keywords/:keyword")
        .get(jwtMiddleware.VerifyUserToken, keywordController.GetKeywordByIdUserAndKeyword);

    app.route("/keywords/:id_keyword/")
        .get(jwtMiddleware.VerifyUserToken, keywordController.GetAKeywordById)
        .put(jwtMiddleware.VerifyUserToken, keywordController.UpdateAKeywordById)
        .delete(jwtMiddleware.VerifyUserToken, keywordController.DeleteAKeywordById);

}