import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";
// import generateToken from '../utils/generateToken.js';
const create = async (req, res) => {
  const { name, email, password, username } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      console.error("User already exists");
      res.status(400).send("User already exists");
    }
    user = new User({
      name,
      email,
      password,
      username,
    });
    await user.save();
    const token = generateToken(user._id);
    res.cookie("personalPortfolio", token, { httpOnly: true, maxAge: 250000 });
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
