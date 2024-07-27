const { Service } = require('../../model/requestModel');

const getOneServiceById = async (req, res) => {

  const userId = req.params.id;

  try {
    const request = await Service.findById(userId);

    if (!request) {
      return res.status(404).json({ message: "No record found" });
    }

    return res.status(200).json({ request });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

module.exports = getOneServiceById;