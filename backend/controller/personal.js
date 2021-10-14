import Personal from "../models/Personal.js";
const createPersonalDetails = async (req, res) => {
  const { uname, email, phone, dob, bio, photo } = req.body;
  try {
    let personal;
    personal = new Personal({
      uname,
      email,
      phone,
      dob,
      bio,
      photo,
    });
    await personal.save();
    res.json({ personal });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
export default createPersonalDetails;
