const express = require ("express");
const router = express.Router();
// const app = express();

const registerUser = require("../controller/registerUser");
const login = require("../controller/login");
const getOneUserById = require("../controller/getOneUserById");
const getAllUsers = require("../controller/getAllUsers");
const updateProfile = require("../controller/updateProfile");
const deleteUser = require("../controller/deleteUser");
const updateUserPhoto = require("../controller/updateUserPhoto");
const getImage = require("../controller/getImage");

//user route
router.post("/newuser", registerUser);
router.post("/login", login);

router.get("/users", getAllUsers);
router.get("/user/:id", getOneUserById);
router.get("/images/:id", getImage);

router.put("/updateprofile/:id", updateProfile);
router.put("/user/updatepic/:id", updateUserPhoto);

router.delete("/user/:id", deleteUser);

module.exports = router;