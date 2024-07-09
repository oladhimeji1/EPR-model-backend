const User = require('../../model/userModel');
const jwt = require("jsonwebtoken");

const login = async (req, res) => {

    const { email, password } = req.body;

    if (!password || !email) {
        return res.status(400).json({
          message: "Please enter all required fields",
        });
    }

    try{

        const user = await User.findOne({ email });
        const psw = await User.findOne({ password });

        if (!user || !psw) {
            return res.json({
            message: "Username or password is incorrect",
            });
        } else {

            // Generate JWT token
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
                expiresIn: "1h", // Token expires in 1 hour
            });

            return res.status(200).json({
                message: "Login successful",
                token: token,
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