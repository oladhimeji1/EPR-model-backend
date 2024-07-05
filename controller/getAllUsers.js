
const fs = require('fs');

const getAllUsers = async (req, res) => {
   
    fs.readFile(`json/users.json`, { encoding: "utf8" }, (err, data) => {
        if (err) {
            return res.status(500).json({ message: "Internal server error", error: err.message });
        } else {
            res.status(200).send(data);
        }
    });
    
};

module.exports = getAllUsers;