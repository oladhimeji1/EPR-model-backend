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
const uploadRequest = require("../controller/materialController/uploadrequest");
const getAllRequest = require("../controller/materialController/getAllRequests");
const updateRequest = require("../controller/materialController/updateRequest");
const getOneRequestById = require("../controller/materialController/getOneRequestById");
const updateMaterialPhoto = require("../controller/materialController/updateMaterialPhoto");
const deleteMaterial = require("../controller/materialController/deleteMaterial");
const getAllService = require("../controller/serviceController/getAllService");
const uploadService = require("../controller/serviceController/uploadService");
const getOneServiceById = require("../controller/serviceController/getOneServiceById");
const updateService = require("../controller/serviceController/updateService");
const updateServicePhoto = require("../controller/serviceController/updateServicePhoto");
const deleteService = require("../controller/serviceController/deleteService");

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


// Materials Request routes
router.post("/new-material-request", uploadRequest);

router.get("/all-materials", getAllRequest);
router.get("/material/:id", getOneRequestById);

router.put("/material/:id", updateRequest);
router.put("/material/material-image/:id", updateMaterialPhoto);

router.delete("/material/:id", deleteMaterial );


// Service requests routes
router.post("/new-service-request", uploadService);

router.get("/all-service", getAllService);
router.get("/service/:id", getOneServiceById);

router.put("/service/:id", updateService);
router.put("/service/service-image/:id", updateServicePhoto);

router.delete("/service/:id", deleteService );

module.exports = router;