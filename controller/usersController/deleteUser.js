const fs = require('fs');
const User = require('../../model/userModel');

const deleteUser = async (req, res) => {

  const userId = req.params.id;

  try {
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "User deleted successfully", user: deletedUser });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

module.exports = deleteUser;