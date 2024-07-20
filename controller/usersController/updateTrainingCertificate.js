const fs = require('fs');
const multer = require('multer');
const User = require('../../model/userModel');

var imageName, userId;
var imageLinks;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/')
    },
    filename: function (req, file, cb) {
      ss = Date.now() + "-" + file.originalname
      imageName = ss;
      cb(null, ss)
      // updateImageName(userId, imageLinks);
    }
});
  
// Initialize Multer with the storage configuration
const upload = multer({ storage: storage }).array('image', 10);

const updateTrainingCertificate = async (req, res) => {

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
      const files = req.files;
      imageLinks = files.map(file => `${req.protocol}://${req.get('host')}/images/${file.filename}`).toString();

      await updateImageName(req, res)
    });
    
  res.status(200).json({ message: 'User profile updated successfully' });
  } catch (error) {
    return res.status(500).json({
      code: "SERVER_ERROR",
      message: "Something went wrong, please try again",
    });
  }
  
};

const updateImageName = async (req, res) => {

  try {
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        {trainingCertificate: imageLinks},
      );

      if (!updatedUser) {
          return res.status(404).json({ message: "User not found" });
      }

      // return res.json({
      //   message: "User profile updated successfully",
      //   user: updatedUser,
      // });
  } catch (error) {
      return console.log({ message: "Internal server error", error: error.message });
      // return res.status(500).json({ message: "Internal server error", error: error.message });
  }
}

module.exports = updateTrainingCertificate;