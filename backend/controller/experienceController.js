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
      portfolioOf: req.user.id,
    });
    await experience.save();
    res.json({ experience });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const updateExperience = async (req, res) => {
  const { title, company, from, to, description } = req.body;
  try {
    const expInfo = await Personal.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          title,
          company,
          from,
          to,
          description,
        },
      },
      { new: true }
    );
    if (!expInfo) return res.status(404).send("Requested info does not exist");
    res.send(expInfo);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const deleteExperienceDetails = async (req, res) => {
  try {
    const experience = await Experience.findByIdAndDelete(req.params.id);
    res.json({ message: "experience info removed" });
    if (!experience) {
      res.status(404).send("Requested info not found");
    }
  } catch (err) {
    console.lerror(err.message);
    res.status(500).send("Server Error");
  }
};

export { createExperienceDetails, deleteExperienceDetails, updateExperience };
