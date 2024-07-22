const mongoose = require("mongoose");
const materialRequestInfo = mongoose.Schema({
  itemname: { type: String },
  specification: { type: String },

  itemPrice: { type: String },
  categoryType: { type: String, default: "material" },
  createAt: { type: Date, default: Date.now() },

  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
});

MaterialCategory = mongoose.model("MaterialCategory", materialRequestInfo);
module.exports = MaterialCategory;
