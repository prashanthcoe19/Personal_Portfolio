import Experience from "../models/Experience.js";
const createExperienceDetails = async (req, res) => {
  const { title, company, from, to, description } = req.body;
  try {
    let experience;
    experience = new Experience({
      title,
      company,
      from,
      to,
      description,
    });
    await experience.save();
    res.json({ experience });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const deleteExperienceDetails = async (req, res) => {
  try {
    const experience = await Experience.findById(req.experience.id);
    if (experience) {
      await experience.remove();
      res.json({ message: "experience info removed" });
    }
  } catch (err) {
    console.lerror(err.message);
    res.status(404).send("User not Found");
  }
};

export { createExperienceDetails, deleteExperienceDetails };
