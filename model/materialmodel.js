const mongoose = require("mongoose");

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
  image: { type: String },
  materialcategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "materialcategory",
  },
  createAt: { type: Date, default: Date.now() },
});

Material = mongoose.model("Material", materialSchema);

module.exports = Material;
