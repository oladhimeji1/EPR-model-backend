const mongoose = require("mongoose");
const { create } = require("./userModel");

const materialSchema = mongoose.Schema({
  requestorName: { type: String },
  site: { type: String },
  scope: { type: String },
  category: { type: String },
  description: { type: String },
  specification: { type: String },
  brand: { type: String },
  UOM: { type: String },
  reOrderLevel: { type: String },
  quantity: { type: String },
  unitPrice: { type: String },
  totalCost: { type: String },
  materialImage: { type: String },
  materialcategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "materialcategory",
  },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createAt: { type: Date, default: Date.now() },
});

Materials = mongoose.model("Material", materialSchema);

module.exports = Materials;
