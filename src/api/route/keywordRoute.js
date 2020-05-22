const keywordController = require("../controller/keywordController");
const jwtMiddleware = require("../middleware/jwtMiddleware");

module.exports = (app) => {

    app.route("/keyword/:id_user")
        .get(jwtMiddleware.VerifyUserToken, keywordController.GetResultByKeywordAndIdUser)
        .post(jwtMiddleware.VerifyUserToken, keywordController.CreateAKeywordByIdUser)
        .put(jwtMiddlewagre.VerifyUserToken, keywordController.UpdateAKeywordByIdUser)
        .delete(jwtMiddleware.VerifyUserToken, keywordController.DeleteAKeywordByIdUser);
    
}