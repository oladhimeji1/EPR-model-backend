const fs = require("fs");
const User = require('../../model/userModel');

const updateProfile = async (req, res) => {
    
    const userId = req.params.id;
    const { email } = req.body;
    try {
        if(email){
            const emailExist = await User.findOne({ email });

            if (emailExist) {
                return res.json({
                type: 'EMAIL_EXIST',
                message: "User with this email already exist",
                });
            }
        } else{
        
            const updatedUser = await User.findByIdAndUpdate(userId,req.body,
            { new: true }
            );

            if (!updatedUser) {
                return res.status(404).json({ message: "User not found" });
            }

            return res.status(200).json({
                type: "SUCCESS",
                message: "User profile updated successfully",
                user: updatedUser,
            });
        }
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

module.exports = updateProfile;
