const fs = require('fs');
const multer = require('multer');

var imageName, userId;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images/')
    },
    filename: function (req, file, cb) {
        imageName = Date.now() + "-" + file.originalname
        cb(null, imageName)
        console.log(5)
        updateImageName(userId,imageName)
    }
});
  
// Initialize Multer with the storage configuration
const upload = multer({ storage: storage }).array('image', 10);

const updateUserPhoto = async (req, res) => {

    userId = req.params.id
  
  try {
    upload(req, res, async (err) => {
      if (err) {
        console.error("Error uploading photo:", err);
        return res.status(501).json({ message: "Error uploading photo" });
      }

      if (!req.files) {
        return res.status(403).json({ message: "No file selected" });
      }
    });
    // console.log(2)
    updateImageName(userId,imageName)
    
  res.status(200).json({ message: 'data and files received and saved successfully!' });
  } catch (error) {
    return res.status(500).json({
      code: "SERVER_ERROR",
      message: "Something went wrong, please try again",
    });
  }
  
};

const updateImageName = (id, imageName) => {

    console.log(id, imageName)
    fs.readFile(`json/users.json`, "utf8", (err, data) => {
        if (err) {
          console.error("Error reading file:", err);
          return res.status(500).send("Internal server error");
        }
    
        try {
          // Parse the JSON data
          const jsonData = JSON.parse(data);
          let users = jsonData.users;
    
          const userIndex = users.findIndex(user => user.id === id);
            if (userIndex === -1) {
                res.status(401).send('User not found');
                return;
            }
    
            // Update the user information
            users[userIndex] = { ...users[userIndex], image: 'http://localhost:8080/images/' + imageName };
    
    
          // Convert the modified data back to JSON
          const updatedJsonData = JSON.stringify(jsonData, null, 2);
    
          // Write the updated JSON data back to the file
          fs.writeFile(`json/users.json`, updatedJsonData, "utf8", (err) => {
            if (err) {
              console.error("Error writing file:", err);
              return res.status(500).send("Internal server error");
            }
            
          });
        } catch (parseError) {
          console.error("Error parsing JSON data:", parseError);
        }
      });
}

module.exports = updateUserPhoto;