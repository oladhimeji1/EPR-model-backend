
const fs = require('fs');
const User = require('../model/userModel');

const getAllUsers = async (req, res) => {
   
    try {
        
        const users = await User.find();
        return res.status(200).json({ users });
    } catch (error) {

        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
    
};

module.exports = getAllUsers;