const Request = require('../../model/requestModel');

const updateRequest = async (req, res) => {
    
  const userId = req.params.id;
    try {
        const updatedUser = await Request.findByIdAndUpdate(
        userId,
        req.body
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "record not found" });
        }

        return res.status(200).json({
            message: "Record updated successfully",
            user: updatedUser,
        });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

module.exports = updateRequest;
