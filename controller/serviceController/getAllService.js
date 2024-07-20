const { Service } = require('../../model/requestModel');

const getAllService = async (req, res) => {
   
    try {

        const users = await Service.find();
        return res.status(200).json({ users });
    
    } catch (error) {

        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
    
};

module.exports = getAllService;