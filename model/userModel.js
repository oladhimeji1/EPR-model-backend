const mongoose = require("mongoose");

const UserModel = mongoose.Schema({
    name: { type: String },
    email: { type: String },
    department: { type: String },
    site: { type: String },
    phoneNumber: { type: String },
    gender: { type: String },
    maritalStatus: { type: String },
    address: { type: String },
    dateOfBirth: { type: String },
    bankName: { type: String },
    accountNo: { type: String },
    pensionManager: { type: String },
    RSApin: { type: String },
    // Qualification – name, period, certificate
    // Training -  name, period, certificate
    Photo: { type: String },
    createAt: { type: Date, default: Date.now() },
});

// Exporting the model directly
module.exports = mongoose.model("UserModel", UserModel);