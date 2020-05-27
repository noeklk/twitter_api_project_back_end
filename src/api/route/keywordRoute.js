const keywordController = require("../controller/keywordController");
const jwtMiddleware = require("../middleware/jwtMiddleware");

module.exports = (app) => {
    app.route("/users/:id_user/keywords")
        .post(jwtMiddleware.VerifyUserToken, keywordController.CreateKeywordByIdUser)
        .get(jwtMiddleware.VerifyUserToken, keywordController.GetAllKeywordsByIdUser);

    app.route("/users/:id_user/keywords/:id_keyword")
        .get(jwtMiddleware.VerifyUserToken, keywordController.GetKeywordByIdUserAndIdKeyword);

    app.route("/keywords/:id_keyword/")
        .get(jwtMiddleware.VerifyUserToken, keywordController.GetAKeyword)
        .put(jwtMiddleware.VerifyUserToken, keywordController.UpdateAKeyword)
        .delete(jwtMiddleware.VerifyUserToken, keywordController.DeleteAKeyword);

}