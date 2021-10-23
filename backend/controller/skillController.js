import Skill from "../models/Skill.js";

const createSkilldetails = async (req, res) => {
  const { language, frameworks, tools } = req.body;
  try {
    let skill;
    skill = new Skill({
      language,
      frameworks,
      tools,
      portfolioOf: req.user.id,
    });
    await skill.save();
    res.json({ skill });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
};

const updateSkills = async (req, res) => {
  const { language, frameworks, tools } = req.body;
  try {
    const skill = await Skill.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          language,
          frameworks,
          tools,
        },
      },
      { new: true }
    );
    if (!skill) return res.status(404).send("Requested Skill Not Found");
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
};

const deleteSkill = async (req, res) => {
  try {
    const skill = await Skill.findByIdAndDelete(req.params.id);
    res.json({ message: "skill details removed" });
    if (!skill) {
      res.status(404).send("Selected Skill cannot be found");
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
};

export default { createSkilldetails, updateSkills, deleteSkill };
