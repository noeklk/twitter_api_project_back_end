const userController = require("../controller/userController");
const jwtMiddleware = require("../middleware/jwtMiddleware");

module.exports = (app) => {
    app.route("/users")
        .get(jwtMiddleware.VerifyAdminOrGuestToken, userController.GetAllUsers);

    app.route("/users/:id_user")
        .get(jwtMiddleware.VerifyAdminOrGuestToken, userController.GetAUserById)
        .put(jwtMiddleware.VerifyAdminToken, userController.UpdateAUserById)
        .delete(jwtMiddleware.VerifyAdminToken, userController.DeleteAUserById);

    app.route("/users/register")
        .post(userController.UserRegister);

    app.route("/users/login")
        .post(userController.UserLogin);
}