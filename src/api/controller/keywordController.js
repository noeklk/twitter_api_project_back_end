const jwt = require("jsonwebtoken");
const User = require("../model/userModel");

const config = require("../../config");
const { errorMessage } = config;

// exports.CreateAUser = (req, res) => {
//     try {
//         let new_user = new User(req.body);

//         new_user.save((error, user) => {
//             if (!error && user) {
//                 res.status(201);
//                 res.json(user);
//             } else {
//                 res.status(400);
//                 console.log(error);
//                 res.json({ message: `L'utilisateur à l'identifiant: ${new_user.pseudo} existe déjà` });
//             }
//         })
//     } catch (e) {
//         res.status(500);
//         console.log(e);
//         res.json({ message: errorMessage })
//     }
// }

// exports.GetAllUsers = (req, res) => {
//     try {
//         User.find((error, users) => {
//             if (!error && users.length) {
//                 res.status(200);
//                 res.json(users);
//             }
//             else {
//                 res.status(400);
//                 console.log(error);
//                 res.json({ message: "Aucun utilisateur trouvé" });
//             }
//         })
//     } catch (e) {
//         res.status(500);
//         console.log(e);
//         res.json({ message: errorMessage });
//     }
// }

// exports.GetAUserById = (req, res) => {
//     const { id_user } = req.params;

//     try {
//         User.findById(id_user, (error, users) => {
//             if (!error && users) {
//                 res.status(200);
//                 res.json(users);
//             } else {
//                 res.status(400);
//                 res.json({ message: `L'id de user: ${id_user} est introuvable` });
//             }
//         })

//     } catch (e) {
//         res.status(500);
//         console.log(e);
//         res.json({ message: errorMessage });
//     }
// }


// exports.DeleteAUserById = (req, res) => {
//     const { id_user } = req.params;

//     try {
//         User.findByIdAndDelete(id_user, (error, users) => {
//             if (!error && users) {
//                 res.status(200);
//                 res.json({ message: `La session avec l'id: ${id_user} a été correctement supprimé` });
//             } else {
//                 res.status(400);
//                 console.log(error);
//                 res.json({ message: `L'id de session: ${id_user} est introuvable` });
//             }
//         });
//     } catch (e) {
//         res.status(500);
//         console.log(e);
//         res.json({ message: errorMessage });
//     }
// }