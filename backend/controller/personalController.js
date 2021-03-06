import Experience from "../models/Experience.js";
import Education from "../models/Education.js";
import Personal from "../models/Personal.js";

const createPersonalDetails = async (req, res) => {
  const { name, email, phone, dob, bio } = req.body;
  try {
    console.log(req.user.id);
    let personal = await Personal.find({ portfolioOf: req.user.id });
    console.log(req.file);
    if (personal.length >= 1) {
      return res
        .status(400)
        .send("personal detail of this user alreasdy exists");
    }
    personal = new Personal({
      name,
      email,
      phone,
      dob,
      bio,
      photo: req.file.filename,
      portfolioOf: req.user.id,
    });
    await personal.save();
    // console.log(personal);
    res.json({ personal });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const updatePersonal = async (req, res) => {
  const { name, email, phone, dob, bio } = req.body;
  const photo = req.file.filename;
  console.log(photo);
  console.log(req.params.id);
  try {
    const personalInfo = await Personal.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          name,
          email,
          phone,
          dob,
          bio,
          photo,
        },
      },
      { new: true }
    );
    if (!personalInfo)
      return res.status(404).send("Requested info does not exist");
    res.send(personalInfo);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const deletePesonalDetails = async (req, res) => {
  try {
    console.log(req.params.id);
    const personal = await Personal.findByIdAndDelete(req.params.id);
    res.json({ message: "personal info removed" });
    if (!personal) {
      return res.status(404).send("Info not found");
    }
  } catch (err) {
    console.lerror(err.message);
    res.status(500).send("Server Error");
  }
};

const getPersonalDetails = async (req, res) => {
  try {
    let personal = await Personal.find({ portfolioOf: req.user.id });
    res.json(personal);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

const getAllInfo = async (req, res) => {
  let personal = await Personal.find();
  let education = await Education.find();
  let experience = await Experience.find();
  res.json({ personal, education, experience });
};
export {
  createPersonalDetails,
  getAllInfo,
  deletePesonalDetails,
  updatePersonal,
  getPersonalDetails,
};
