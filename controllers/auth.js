const bcrypt  = require('bcrypt');
const User = require("../models/user");

exports.signup = async (req, res) => {
  try {
    const { name, email, password,role } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        msg: "Email already exists",
      });
    }
    let hashPassword;
    try {
      hashPassword = await bcrypt.hashSync(password, 10);
    } catch (error) {
      return res.status(500).json({
        success: false,
        msg: "Error in hashing password",
      });
    }
    const user = await User.create({
      name,
      email,
      password:hashPassword,
      role,
    });
    return res.status(200).json({
      success: true,
      msg: "User created successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      msg: "User can not registor please try again",
    });
  }
};
