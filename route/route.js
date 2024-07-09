const express = require ("express");
const router = express.Router();
// const app = express();

const registerUser = require("../controller/usersController/registerUser");
const login = require("../controller/usersController/login");
const getOneUserById = require("../controller/usersController/getOneUserById");
const getAllUsers = require("../controller/usersController/getAllUsers");
const updateProfile = require("../controller/usersController/updateProfile");
const deleteUser = require("../controller/usersController/deleteUser");
const updateUserPhoto = require("../controller/usersController/updateUserPhoto");
const getImage = require("../controller/usersController/getImage");
const updateQualificationCertificate = require("../controller/usersController/updateQualificationCertificate");
const updateTrainingCertificate = require("../controller/usersController/updateTrainingCertificate");
const uploadRequest = require("../controller/servicesController/uploadrequest");
const getAllRequest = require("../controller/servicesController/getAllRequests");
const updateRequest = require("../controller/servicesController/updateRequest");
const getOneRequestById = require("../controller/servicesController/getOneRequestById");
const updateMaterialPhoto = require("../controller/servicesController/updateMaterialPhoto");
const updateServicePhoto = require("../controller/servicesController/updateServicePhoto");

//user route
router.post("/newuser", registerUser);
router.post("/login", login);

router.get("/users", getAllUsers);
router.get("/user/:id", getOneUserById);
router.get("/images/:id", getImage);

router.put("/updateprofile/:id", updateProfile);
router.put("/user/updatepic/:id", updateUserPhoto);
router.put("/user/qualificationcertificate/:id", updateQualificationCertificate);
router.put("/user/trainingcertificate/:id", updateTrainingCertificate);

router.delete("/user/:id", deleteUser);


// Request routes
router.post("/newrequest", uploadRequest);

router.get("/all-request", getAllRequest);
router.get("/request/:id", getOneRequestById);

router.put("/request/:id", updateRequest);
router.put("/request/material-image/:id", updateMaterialPhoto);
router.put("/request/service-image/:id", updateServicePhoto);


module.exports = router;