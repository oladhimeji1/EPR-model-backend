// const { Materials } = require("../../model/requestModel");
const Materials = require("../../model/materialmodel");

const updateRequest = async (req, res) => {
  const requestId = req.params.id;
  try {
    const updatedReqInfo = await Materials.findByIdAndUpdate(
      requestId,
      req.body
    );

    if (!updatedReqInfo) {
      return res.status(404).json({ message: "record not found" });
    }

    return res.status(200).json({
      message: "Material request updated successfully",
      reqInfo: updatedReqInfo,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

module.exports = updateRequest;
