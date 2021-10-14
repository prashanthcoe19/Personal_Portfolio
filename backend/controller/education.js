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
    });
    await education.save();
    res.json({ education });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
export default createEducationDetails;
