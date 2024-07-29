const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
  department: { type: String },
  site: { type: String },
  phoneNumber: { type: Number },
  gender: { type: String },
  maritalStatus: { type: String },
  userType: { type: String },
  address: { type: String },
  dateOfBirth: { type: String },
  bankName: { type: String },
  accountNo: { type: String },
  pensionManager: { type: String },
  RSApin: { type: String },
  school: { type: String },
  grade: { type: String },
  qualification: { type: String },
  qualificationPeriod: { type: String },
  professionalCertificate: { type: String },
  educationalCertificate: { type: String },
  professional: { type: String },
  universityFrom: { type: String },
  universityTo: { type: String },
  professionalFrom: { type: String },
  professionalTo: { type: String },
  trainingInstitution: { type: String },
  trainingCertificateType: { type: String },
  trainingFrom: { type: String },
  trainingTo: { type: String },
  trainingCertificate: { type: String },
  image: { type: String },
  createAt: { type: Date, default: Date.now() },
});

// Exporting the model directly
const User = mongoose.model("User", userSchema);
module.exports = User;
