import React, { Fragment, useState, useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";
import Spinner from "../../layout/Spinner";
import api from "../../utils/api";
const ProjectInfo = () => {
  const { isLoading, project } = useContext(ProjectContext);
  const [proj, setProj] = useState({
    title: project ? project.title : " ",
    description: project ? project.description : " ",
    gitlinks: project ? project.gitlinks : " ",
    tools: project ? project.tools : " ",
  });
  const { title, description, gitlinks, tools } = proj;
  const projectSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/project/create", proj);
      console.log(res);
    } catch (err) {
      console.log(err.response);
    }
  };
  const projectUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await api.put(`/education/update/${project._id}`, proj);
      console.log(res);
    } catch (err) {
      console.log(err.response);
    }
  };
  const onChange = (e) => {
    setProj({ ...proj, [e.target.name]: e.target.value });
  };
  if (isLoading & !project) return <Spinner />;
  return (
    <Fragment>
      <h2>Enter Your Project Details</h2>
      <small>* = required field</small>
      <form className="form" onSubmit={projectSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Title"
            name="title"
            defaultValue={title}
            onChange={onChange}
          />
          <small className="form-text">Project Title</small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Description"
            name="description"
            defaultValue={description}
            onChange={onChange}
          />
          <small className="form-text">Project Description?</small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Gitlinks"
            name="gitlinks"
            defaultValue={gitlinks}
            onChange={onChange}
          />
          <small className="form-text">Git Links?</small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Tools"
            name="tools"
            defaultValue={tools}
            onChange={onChange}
          />
          <small className="form-text">Tools Used?</small>
        </div>
        {project ? (
          <button
            type="submit"
            variant="contained"
            class="btn btn-primary"
            onClick={projectUpdate}
          >
            Update
          </button>
        ) : (
          <button
            type="submit"
            variant="container"
            class="btn btn-dark"
            onClick={projectSubmit}
          >
            {" "}
            Save
          </button>
        )}
      </form>
    </Fragment>
  );
};

export default ProjectInfo;
