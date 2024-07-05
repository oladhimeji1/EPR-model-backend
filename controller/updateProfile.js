const fs = require('fs');

const updateProfile = async (req, res) => {

    // const { username, email, gender } = req.body;
    const userId = req.params.id;
    
    fs.readFile(`json/users.json`, "utf8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return res.status(500).send("Internal server error");
        }

        let jsonData;
        try {
            jsonData = JSON.parse(data);
        } catch (err) {
            // callback(err);
            return;
        }

        // Find the user and update the record
        const users = jsonData.users;
        const userIndex = users.findIndex(user => user.id === userId);
        if (userIndex === -1) {
            res.status(401).send('User not found');
            return;
        }

        // Update the user information
        users[userIndex] = { ...users[userIndex], ...req.body };

        // Write the updated JSON data back to the file
        fs.writeFile('json/users.json', JSON.stringify(jsonData, null, 2), 'utf8', err => {
            if (err) {
                // callback(err);
                return;
            }
            res.status(200).send({message: 'User updated succefully'});
        });
    });
    
    
};

module.exports = updateProfile;