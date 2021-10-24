import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";
// import generateToken from '../utils/generateToken.js';
const create = async (req, res) => {
  const { name, email, username, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      // console.log(user);
      console.error("User already exists");
      return res.status(400).send("User already exists");
    }
    user = new User({
      name,
      email,
      username,
      password,
    });
    await user.save();
    const token = generateToken(user._id);
    // res.cookie("personalPortfolio", token, { httpOnly: true, maxAge: 250000 });
    res.json({
      name,
      email,
      username,
      token,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

export default { create };
