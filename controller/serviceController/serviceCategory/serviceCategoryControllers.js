const Service = require("../../../model/servicecategory");

// Create a new category
const createServiceCategory = async (req, res) => {
  const { categoryName, serviceSpecification, servicePrice } = req.body;
  if (!categoryName || !serviceSpecification || !servicePrice) {
    return res.status(400).json({
      message: "Please enter all required fields",
    });
  }
  try {
    const category = new Service({
      categoryName,
      serviceSpecification,
      servicePrice,
    });
    const result = await category.save();
    return res.status(200).json({
      message: "Category created successfully",
      category: result,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

// Find one category by ID
const findServiceCategoryById = async (req, res) => {
  try {
    const category = await Service.findById(req.params.id);
    if (!category) {
      return res.status(404).json({
        message: "Category not found",
      });
    }
    return res.status(200).json(category);
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// Find all categories
const findAllServiceCategories = async (req, res) => {
  try {
    const categories = await Service.find();
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// Update a category by ID
const updateServiceCategory = async (req, res) => {
  const { categoryName, serviceSpecification, servicePrice } = req.body;
  if (!categoryName || !serviceSpecification || !servicePrice) {
    return res.status(400).json({
      message: "Please enter all required fields",
    });
  }
  try {
    const category = await Service.findByIdAndUpdate(
      req.params.id,
      {
        categoryName,
        serviceSpecification,
        servicePrice,
      },
      { new: true }
    );
    if (!category) {
      return res.status(404).json({
        message: "Category not found",
      });
    }
    return res.status(200).json({
      message: "Category updated successfully",
      category,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// Delete a category by ID
const deleteServiceCategory = async (req, res) => {
  try {
    const category = await Service.findByIdAndDelete(req.params.id);
    if (!category) {
      return res.status(404).json({
        message: "Category not found",
      });
    }
    return res.status(200).json({
      message: "Category deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

module.exports = {
  createServiceCategory,
  findServiceCategoryById,
  findAllServiceCategories,
  updateServiceCategory,
  deleteServiceCategory,
};
