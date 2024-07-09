const Request = require('../../model/requestModel');

const getAllRequest = async (req, res) => {
   
    try {
        
        const users = await Request.find();
        return res.status(200).json({ users });
    } catch (error) {

        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
    
};

module.exports = getAllRequest;