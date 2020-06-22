const keywordController = require("../controller/keywordController");
const jwtMiddleware = require("../middleware/jwtMiddleware");

module.exports = (app) => {
    app.route("/keywords/:keyword")
        .get(jwtMiddleware.VerifyUserToken, keywordController.GetAllKeywordsByKeyword);

    app.route("/keywords/:id_keyword/")
        .get(jwtMiddleware.VerifyUserToken, keywordController.GetAKeywordById)
        .put(jwtMiddleware.VerifyUserToken, keywordController.UpdateAKeywordById)
        .delete(jwtMiddleware.VerifyUserToken, keywordController.DeleteAKeywordById);

}
