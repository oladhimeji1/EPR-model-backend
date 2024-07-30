// const { Materials } = require("../../model/requestModel");
const Materials = require("../../model/materialmodel");
const getAllRequest = async (req, res) => {
  try {
    const users = await Materials.find();
    return res.status(200).json({ users });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

module.exports = getAllRequest;
