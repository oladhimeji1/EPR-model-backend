// config/cloudinary.js
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dskkissaa" || process.env.CLOUDINARY_CLOUD_NAME,
  api_key: "699545933839153" || process.env.CLOUDINARY_API_KEY,
  api_secret:
    "huTHDYMwCSlXQcWDKpLhAwdeBYo" || process.env.CLOUDINARY_API_SECRET,
  JWT_SECRET: "2323242424234",
});

module.exports = cloudinary;
