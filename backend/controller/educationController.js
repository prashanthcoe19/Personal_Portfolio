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

const deleteEducationDetails = async (req, res) => {
  try {
    const education = await Education.findById(req.education.id);
    if (education) {
      await education.remove();
      res.json({ message: "personal info removed" });
    }
  } catch (err) {
    console.lerror(err.message);
    res.status(404).send("User not Found");
  }
};
export { createEducationDetails, deleteEducationDetails };
