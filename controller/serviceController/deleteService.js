const { Service } = require('../../model/userModel');

const deleteService = async (req, res) => {

  const serviceId = req.params.id;

  try {
    const deletedService = await Service.findByIdAndDelete(serviceId);

    if (!deletedService) {
      return res.status(404).json({ message: "Service with this id not found" });
    }

    return res.status(200).json({ message: "Service deleted successfully", user: deletedService });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

module.exports = deleteService;