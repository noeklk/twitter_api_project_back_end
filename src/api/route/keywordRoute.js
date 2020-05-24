const keywordController = require("../controller/keywordController");
const jwtMiddleware = require("../middleware/jwtMiddleware");

module.exports = (app) => {

    app.route("/users/:id_user/keyword/")
        .post(jwtMiddleware.VerifyUserToken, keywordController.CreateKeywordByIdUser)

    app.route("/users/:id_user/keywords/")
        .get(jwtMiddleware.VerifyUserToken, keywordController.GetAllByIdUser);

    // app.route("/users/:id_user/keywords/:keyword")
    //     .get(jwtMiddleware.VerifyUserToken, keywordController.GetMultiByIdUser);

    // app.route("/keyword/:keyword_id/")
    //     .get(jwtMiddleware.VerifyUserToken, keywordController.GetAKeyword)
    //     .put(jwtMiddleware.VerifyUserToken, keywordController.UpdateAKeyword)
    //     .delete(jwtMiddleware.VerifyUserToken, keywordController.DeleteAKeyword);
    


}