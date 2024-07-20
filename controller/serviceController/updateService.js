const { Service } = require('../../model/requestModel');

const updateService = async (req, res) => {
    
  const requestId = req.params.id;
    try {
        const updatedReqInfo = await Service.findByIdAndUpdate(
        requestId,
        req.body
        );

        if (!updatedReqInfo) {
            return res.status(404).json({ message: "Record not found" });
        }

        return res.status(200).json({
            message: "Service request updated successfully",
            reqInfo: updatedReqInfo,
        });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

module.exports = updateService;