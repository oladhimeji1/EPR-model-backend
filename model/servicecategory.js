const mongoose = require("mongoose");
const serviceRequestInfo = mongoose.Schema({
  categoryName: { type: String },
  serviceSpecification: { type: String },
  servicePrice: { type: String },
  categoryType: { type: String, default: "service" },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

  createAt: { type: Date, default: Date.now() },
});

ServiceCategory = mongoose.model("ServiceCategory", serviceRequestInfo);

module.exports = ServiceCategory;
