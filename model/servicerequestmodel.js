const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema({
  requestorName: { type: String },
  site: { type: String },
  scope: { type: String },
  category: { type: String },
  description: { type: String },
  specification: { type: String },

  servicePrice: { type: String },
  image: { type: String },

  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "user" },

  servicecategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "servicecategory",
  },

  createAt: { type: Date, default: Date.now() },
});
Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
