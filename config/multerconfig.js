// config/multer.js
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("./cloundinaryconfig");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "service_images",
    format: async (req, file) => "jpeg||png||jpg||webp||jfif||avif||gif", // supports promises as well
    public_id: (req, file) => file.fieldname + "-" + Date.now(),
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
