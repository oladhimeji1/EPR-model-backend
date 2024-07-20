const { Materials } = require('../../model/userModel');

const deleteMaterial = async (req, res) => {

  const materialId = req.params.id;

  try {
    const deletedMaterial = await Materials.findByIdAndDelete(materialId);

    if (!deletedMaterial) {
      return res.status(404).json({ message: "Material with this id not found" });
    }

    return res.status(200).json({ message: "Material deleted successfully", user: deletedMaterial });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

module.exports = deleteMaterial;