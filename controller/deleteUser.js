const fs = require('fs');

const deleteUser = (req, res) => {

    const userId = req.params.id;
  
    // Read the JSON file
    fs.readFile(`json/users.json`, "utf8", (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        return res.status(500).send("Internal server error");
      }
  
      try {
        // Parse the JSON data
        const jsonData = JSON.parse(data);

        const users = jsonData.users;
  
        // Find the user by ID
        const userIndex = users.findIndex(user => user.id === userId);
        if (userIndex === -1) {
            callback(new Error('User not found'));
            return;
        }

        users.splice(userIndex, 1); // Remove the user
  
        fs.writeFile('json/users.json', JSON.stringify(jsonData, null, 2), 'utf8', err => {
            if (err) {
                return res.status(401).send("User not found");
            }
            res.status(200).send(users)
        });
      } catch (err) {
        res.status(500).json({ message: "Internal server error", error: err.message });
      }
    });
};

module.exports = deleteUser;