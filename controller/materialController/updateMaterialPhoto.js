// const multer = require("multer");
// // const { Materials } = require('../../model/requestModel');
// const Materials = require("../../model/materialmodel");

// var imageName, materialId;
// var imageLinks;

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "public/images/");
//   },
//   filename: function (req, file, cb) {
//     ss = Date.now() + "-" + file.originalname;
//     imageName = ss;
//     cb(null, ss);
//   },
// });

// // Initialize Multer with the storage configuration
// const upload = multer({ storage: storage }).array("image", 10);

// const updateMaterialPhoto = async (req, res) => {
//   materialId = req.params.id;
//   console.log(materialId);

//   try {
//     upload(req, res, async (err) => {
//       if (err) {
//         console.error("Error uploading photo:", err);
//         return res.status(501).json({ message: "Error uploading photo" });
//       }

//       if (!req.files) {
//         return res.status(403).json({ message: "No file selected" });
//       }
//       const files = req.files;
//       imageLinks = files
//         .map(
//           (file) =>
//             `${req.protocol}://${req.get("host")}/images/${file.filename}`
//         )
//         .toString();

//       await updateImageName(req, res);
//     });

//     res.status(200).json({ message: "Image updated successfully" });
//   } catch (error) {
//     return res.status(500).json({
//       code: "SERVER_ERROR",
//       message: "Something went wrong, please try again",
//       error: error.message,
//     });
//   }
// };

// const updateImageName = async (req, res) => {
//   try {
//     const requestItem = await Materials.findByIdAndUpdate(materialId, {
//       materialImage: imageLinks,
//       new: true,
//     });
//     console.log(requestItem);

//     if (!requestItem) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // return res.json({
//     //   message: "User profile updated successfully",
//     //   item: requestItem,
//     // });
//   } catch (error) {
//     return console.log({
//       message: "Internal server error",
//       error: error.message,
//     });
//     // return res.status(500).json({ message: "Internal server error", error: error.message });
//   }
// };

// module.exports = updateMaterialPhoto;

const multer = require("multer");
const Materials = require("../../model/materialmodel");

let imageName, materialId;
let imageLinks;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/");
  },
  filename: function (req, file, cb) {
    const ss = Date.now() + "-" + file.originalname;
    imageName = ss;
    cb(null, ss);
  },
});

// Initialize Multer with the storage configuration
const upload = multer({ storage: storage }).array("image", 10);

const updateMaterialPhoto = async (req, res) => {
  materialId = req.params.id;

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
      imageLinks = files
        .map(
          (file) =>
            `${req.protocol}://${req.get("host")}/images/${file.filename}`
        )
        .toString();

      try {
        await updateImageName(req, res);
        res.status(200).json({ message: "Image updated successfully" });
      } catch (error) {
        console.error("Error updating image name:", error);
        res.status(500).json({
          code: "SERVER_ERROR",
          message: "Something went wrong, please try again",
          error: error.message,
        });
      }
    });
  } catch (error) {
    console.error("Error handling request:", error);
    return res.status(500).json({
      code: "SERVER_ERROR",
      message: "Something went wrong, please try again",
      error: error.message,
    });
  }
};

const updateImageName = async (req, res) => {
  try {
    const requestItem = await Materials.findByIdAndUpdate(
      materialId,
      { materialImage: imageLinks },
      { new: true }
    );

    if (!requestItem) {
      throw new Error("Material not found");
    }

    console.log(requestItem);
  } catch (error) {
    throw error;
  }
};

module.exports = updateMaterialPhoto;
