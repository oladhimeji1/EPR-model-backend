const User = require('../../model/userModel');

const registerUser = async (req, res) => {

    const { email, name } = req.body;

    const user = new User(req.body);

    const emailExist = await User.findOne({ email });

    if (emailExist) {
        return res.json({
        message: "User with this email already exist",
        });
    } else {
        user.save()
            .then((result) => {
                res.status(200).json({
                    message: 'New user created succefully',
                    user: result
                });
            })
            .catch(err => {
                console.log(err);
                return;
            })
    }    
    
};

module.exports = registerUser;