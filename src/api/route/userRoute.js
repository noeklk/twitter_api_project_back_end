const userController = require("../controller/userController");
const jwtMiddleware = require("../middleware/jwtMiddleware");

module.exports = (app) => {
    app.route("/users")
        .get(userController.GetAllUsers);

    app.route("/users/:id_user")
        .get(jwtMiddleware.VerifyUserToken, userController.GetAUserById)
        .put(jwtMiddleware.VerifyUserToken, userController.UpdateAUserById)
        .delete(jwtMiddleware.VerifyUserToken, userController.DeleteAUserById);

    app.route("/users/register")
        .post(userController.UserRegister);

    app.route("/users/login")
        .post(userController.UserLogin);
}