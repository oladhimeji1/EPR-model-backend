const mongoose = require("mongoose");

const materialSchema = mongoose.Schema({
    requestorName: { type: String },
    site: { type: String },
    scope: { type: String },
    category: { type: String },
    description: { type: String },
    specification: { type: String },
    brand : { type: String },
    UOM: { type: String },
    reOrderLevel: { type: String },
    quantity: { type: String },
    unitPrice: { type: String },
    totalCost: { type: String },
    image: { type: String },
    createAt: { type: Date, default: Date.now() },  
});

const serviceSchema = mongoose.Schema({
    requestorName: { type: String },
    site: { type: String },
    scope: { type: String },
    category: { type: String },
    description: { type: String },
    specification: { type: String },
    // servicePrice: { type: String },
    image: { type: String },
    // item: { type: String },
    // itemPrice: { type: String },
})

const materialRequestInfo = mongoose({
    categoryName: { type: String },
    specification: { type: String },
    item: { type: String },
    itemPrice: { type: String },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
})

const serviceRequestInfo = mongoose({
    categoryName: { type: String },
    serviceSpecification: { type: String },
    servicePrice: { type: String },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
})

// Exporting the model directly
const Materials = mongoose.model("Material", materialSchema);
const Service = mongoose.model("Service", serviceSchema);
const materialInfo = mongoose.model("materialRequestInfo", materialRequestInfo);
const serviceInfo = mongoose.model("serviceRequestInfo", serviceRequestInfo);

module.exports = {Materials, Service, materialInfo, serviceInfo};