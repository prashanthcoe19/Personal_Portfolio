import Project from "../models/Project.js";

const createProjectDetails = async (req, res) => {
  const { title, description, gitLink, tools } = req.body;
  try {
    let project;
    project = new Project({
      title,
      description,
      gitLink,
      tools,
      portfolioOf: req.user.id,
    });
    await project.save();
    res.json({ project });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
};

const updateProject = async (req, res) => {
  const { title, description, gitLink, tools } = req.body;
  try {
    const projInfo = await Project.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          title,
          description,
          gitLink,
          tools,
        },
      },
      { new: true }
    );
    if (!projInfo) return res.status(404).send("Project Not Found");
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
};

const deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    res.json({ message: "education details removed" });
    if (!project) {
      res.status(404).send("Selected Project cannot be found");
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
};

export default { createProjectDetails, updateProject, deleteProject };
