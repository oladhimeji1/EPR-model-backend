const express = require ("express");
const router = express.Router();
// const app = express();

const registerUser = require("../controller/registerUser");
const login = require("../controller/login");
const getOneUserById = require("../controller/getOneUserById");
const getAllUsers = require("../controller/getAllUsers");
const updateProfile = require("../controller/updateProfile");

//user route
router.post("/newuser", registerUser);
router.post("/login", login);

router.get("/user/:id", getOneUserById);
router.get("/users", getAllUsers);

router.put("/updateprofile/:id", updateProfile);

module.exports = router;