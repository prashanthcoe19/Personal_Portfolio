import Experience from "../models/Experience.js";
import Education from "../models/Education.js";
import Personal from "../models/Personal.js";

const createPersonalDetails = async (req, res) => {
  const { name, email, phone, dob, bio } = req.body;
  const photo = req.file.filename;
  console.log(req.file);
  try {
    let personal;
    personal = new Personal({
      name,
      email,
      phone,
      dob,
      bio,
      photo,
    });
    await personal.save();
    console.log(personal);
    res.json({ personal });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const deletePesonalDetails = async (req, res) => {
  try {
    const personal = await Personal.findById(req.personal.id);
    if (personal) {
      await personal.remove();
      res.json({ message: "personal info removed" });
    }
  } catch (err) {
    console.lerror(err.message);
    res.status(404).send("User not Found");
  }
};

const getAllInfo = async (req, res) => {
  let personal = await Personal.find();
  let education = await Education.find();
  let experience = await Experience.find();
  res.json({ personal, education, experience });
};
export { createPersonalDetails, getAllInfo, deletePesonalDetails };
