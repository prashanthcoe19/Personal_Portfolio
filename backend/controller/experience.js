import Experience from "../models/Experience";
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
export default createExperienceDetails;
