const fs = require('fs');
const User = require('../../model/userModel');

const getOneUserById = async (req, res) => {

  const userId = req.params.id;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User with this ID not found" });
    }

    return res.status(200).json({ user });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

module.exports = getOneUserById;