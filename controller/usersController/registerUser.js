const fs = require("fs");
const User = require("../../model/userModel");

const registerUser = async (req, res) => {
  const { email, name, site, password, department } = req.body;

  if (!email || !name || !site || !password || !department) {
    return res.status(400).json({
      message: "Please enter all required fields",
    });
  }

  if (!email.includes("@")) {
    return res.status(400).json({
      type: "INVALID_EMAIL",
      message: "Please ensure you enter a valid email",
    });
  }

  const user = new User(req.body);

  const emailExist = await User.findOne({ email });

  if (emailExist) {
    return res.json({
      type: 'EMAIL_EXIST',
      message: "User with this email already exist",
    });
  } else {
    user
      .save()
      .then((result) => {
        res.status(200).json({
          type: 'SUCCESS',
          message: "New user created succefully",
          type: "SUCCESS",
          user: result,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ message: "Internal server error" });
        return;
      });
  }
};

module.exports = registerUser;
