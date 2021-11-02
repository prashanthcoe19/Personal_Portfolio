import Education from "../models/Education.js";
const createEducationDetails = async (req, res) => {
  const { school, degree, from, to } = req.body;
  try {
    let education;
    education = new Education({
      school,
      degree,
      from,
      to,
      portfolioOf: req.user.id,
    });
    await education.save();
    res.json({ education });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const getEducationDetails = async (req, res) => {
  try {
    let education = await Education.find({ portfolioOf: req.user.id });
    res.json(education);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

const updateEducation = async (req, res) => {
  const { school, degree, from, to } = req.body;
  try {
    const eduInfo = await Education.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          school,
          degree,
          from,
          to,
        },
      },
      { new: true }
    );
    if (!eduInfo) return res.status(404).send("Requested info does not exist");
    res.send(eduInfo);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const deleteEducationDetails = async (req, res) => {
  try {
    const education = await Education.findByIdAndDelete(req.params.id);
    res.json({ message: "education details removed" });
    if (!education) {
      res.status(404).send("Requested Info Not Found");
    }
  } catch (err) {
    console.lerror(err.message);
    res.status(500).send("Server Error");
  }
};
export default {
  createEducationDetails,
  getEducationDetails,
  deleteEducationDetails,
  updateEducation,
};
