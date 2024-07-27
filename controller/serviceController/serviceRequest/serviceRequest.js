const Service = require("../../../model/servicerequestmodel");
const mongoose = require("mongoose");

// const cloudinary = require("../../../config/cloundinaryconfig");

// Create a new service request

const createServiceRequest = async (req, res) => {
  const {
    requestorName,
    site,
    scope,
    category,
    description,
    specification,
    servicePrice,

    createdBy,
    servicecategory,
  } = req.body;

  if (
    !requestorName ||
    !site ||
    !scope ||
    !category ||
    !description ||
    !specification ||
    !servicePrice ||
    !createdBy ||
    !servicecategory
  ) {
    return res.status(400).json({
      message: "Please enter all required fields",
    });
  }

  try {
    const serviceRequest = new Service({
      requestorName,
      site,
      scope,
      category,
      description,
      specification,
      servicePrice,
      createdBy,
      servicecategory,
    });

    const result = await serviceRequest.save();
    return res.status(200).json({
      message: "Service request created successfully",
      serviceRequest: result,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

const updateServiceRequest = async (req, res) => {
  const {
    requestorName,
    site,
    scope,
    category,
    description,
    specification,
    servicePrice,
    image,
    createdBy,
    servicecategory,
  } = req.body;

  if (
    !requestorName ||
    !site ||
    !scope ||
    !category ||
    !description ||
    !specification ||
    !servicePrice ||
    !createdBy ||
    !servicecategory
  ) {
    return res.status(400).json({
      message: "Please enter all required fields",
    });
  }

  try {
    const serviceRequest = await Service.findByIdAndUpdate(
      req.params.id,
      {
        requestorName,
        site,
        scope,
        category,
        description,
        specification,
        servicePrice,
        image,
        createdBy: mongoose.Types.ObjectId(createdBy),
        servicecategory: mongoose.Types.ObjectId(servicecategory),
      },
      { new: true }
    );

    if (!serviceRequest) {
      return res.status(404).json({
        message: "Service request not found",
      });
    }

    return res.status(200).json({
      message: "Service request updated successfully",
      serviceRequest,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// Delete a service request by ID
const deleteServiceRequest = async (req, res) => {
  try {
    const serviceRequest = await Service.findByIdAndDelete(req.params.id);

    if (!serviceRequest) {
      return res.status(404).json({
        message: "Service request not found",
      });
    }

    return res.status(200).json({
      message: "Service request deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// Get a single service request by ID
const getServiceRequest = async (req, res) => {
  try {
    const serviceRequest = await Service.findById(req.params.id)
      .populate("createdBy")
      .populate("servicecategory");

    if (!serviceRequest) {
      return res.status(404).json({
        message: "Service request not found",
      });
    }

    return res.status(200).json(serviceRequest);
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// Get all service requests
const getAllServiceRequests = async (req, res) => {
  try {
    const serviceRequests = await Service.find()
      .populate("createdBy")
      .populate("servicecategory");
    return res.status(200).json(serviceRequests);
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

module.exports = {
  createServiceRequest,
  updateServiceRequest,
  deleteServiceRequest,
  getServiceRequest,
  getAllServiceRequests,
};
