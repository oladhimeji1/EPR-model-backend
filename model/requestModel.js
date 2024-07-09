const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceSchema = mongoose.Schema({
    requestorName: { type: String },
    requestType: { type: String },
    site: { type: String },
    scope: { type: String },
    category: { type: String },
    description: { type: String },
    clientSpecification: { type: String },
    serviceSpecification: { type: String },
    servicePrice: { type: String },
    brand : { type: String },
    UOM: { type: String },
    reOrderLevel: { type: String },
    quantity: { type: String },
    unitPrice: { type: String },
    totalCost: { type: String },
    materialImage: { type: String },
    serviceImage: { type: String },
    item: { type: String },
    itemPrice: { type: String },
    createAt: { type: Date, default: Date.now() },  
});

// Exporting the model directly
const Request = mongoose.model("Request", serviceSchema);
module.exports = Request;