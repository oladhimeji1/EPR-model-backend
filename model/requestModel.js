const mongoose = require("mongoose");

const requestModel = mongoose.Schema({
    requestorName: { type: String },
    requestType: { type: String },
    site: { type: String },
    scope: { type: String },
    category: { type: String },
    description: { type: String },
    clientSpecification: { type: String },
    brand : { type: String },
    UOM: { type: String },
    reOrderLevel: { type: String },
    quantity: { type: String },
    unitPrice: { type: String },
    totalCost: { type: String },
    image: { type: String },
    createAt: { type: Date, default: Date.now() },  
});

// Exporting the model directly
module.exports = mongoose.model("requestModel", requestModel);