const keywordController = require("../controller/keywordController");
const jwtMiddleware = require("../middleware/jwtMiddleware");

module.exports = (app) => {

    app.route("/keyword/user/:id_user")
        .post(jwtMiddleware.VerifyUserToken, keywordController.CreateKeywordByIdUser)

    app.route("/keywords/user/:id_user")
        .get(jwtMiddleware.VerifyUserToken, keywordController.GetAllByIdUser)

    app.route("/keywords/:keyword/user/:id_user")
        .get(jwtMiddleware.VerifyUserToken, keywordController.getMultiByIdUser)

    app.route("/keyword/:keyword_id/")
        .get(jwtMiddleware.VerifyUserToken, keywordController.GetAKeyword)
        .put(jwtMiddlewagre.VerifyUserToken, keywordController.UpdateAKeyword)
        .delete(jwtMiddleware.VerifyUserToken, keywordController.DeleteAKeyword);
    
}