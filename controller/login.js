const fs = require('fs');
const User = require('../model/userModel');

const login = async (req, res) => {

    const { email, password } = req.body;

    if (!password || !email) {
        return res.status(400).json({
          message: "Please enter all required fields",
        });
    }

    try{

        const user = await User.findOne({ email });

        if (!user) {
            return res.json({
            message: "No user with this email found",
            });
        } else {
            return res.status(200).json({
                message: "Login successful",
                user: {
                    id: user._id,
                    email: user.email,
                    password: user.password,
                    gender: user.gender,
                    userType: user.userType,
                },
            });
        }
    } catch (error) {
        return res.status(500).json({
          message: "Internal server error",
          error: error.message,
        });
    }

};

module.exports = login;