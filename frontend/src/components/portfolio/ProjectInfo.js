import React, { Fragment, useState, useContext, useEffect } from "react";
import { ProjectContext } from "../context/ProjectContext";
import PropTypes from "prop-types";
import api from "../../utils/api";
const ProjectInfo = () => {
  const { isLoading, project, getProject, setProject } =
    useContext(ProjectContext);
  const [proj, setProj] = useState({
    title: " ",
    description: " ",
    gitLink: " ",
    tools: " ",
  });
  const { title, description, gitLink, tools } = proj;
  const projectSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/project/create", proj);
      console.log(res.data);
      setProject((prevState) => [...prevState, res.data.project]);
      if (res) {
        alert("Project Details Saved");
      }
      // setProj({});
    } catch (err) {
      console.log(err.response);
    }
  };

  const projectDelete = async (id) => {
    try {
      const res = await api.delete(`/project/delete/${id}`);
      console.log(res);
      if (res) {
        alert("Project Deleted Successfully");
      }
    } catch (err) {
      console.log(err.response);
      alert("Error deleting Project");
    }
  };
  const onChange = (e) => {
    setProj({ ...proj, [e.target.name]: e.target.value });
  };
  console.log(project);
  return (
    <Fragment>
      {project
        ? project.map((project) => {
            return (
              <ul>
                <li>Project: {project.title}</li>
                <li>Description: {project.description}</li>
                <li>Tools Used: {project.tools[0]}</li>
                <li>
                  <button
                    class="btn btn-danger"
                    onClick={() => projectDelete(project._id)}
                  >
                    Delete Project
                  </button>
                </li>
              </ul>
            );
          })
        : null}
      <h2>Enter Your Project Details</h2>
      <small>* = required field</small>
      <form className="form" onSubmit={projectSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={title}
            onChange={onChange}
          />
          <small className="form-text">Project Title</small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Description"
            name="description"
            value={description}
            onChange={onChange}
          />
          <small className="form-text">Project Description?</small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Gitlink"
            name="gitLink"
            value={gitLink}
            onChange={onChange}
          />
          <small className="form-text">Git Links?</small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Tools"
            name="tools"
            value={tools}
            onChange={onChange}
          />
          <small className="form-text">Tools Used?</small>
        </div>
        <button
          type="submit"
          variant="container"
          class="btn btn-dark"
          onClick={projectSubmit}
        >
          {" "}
          Save
        </button>
      </form>
    </Fragment>
  );
};

export default ProjectInfo;
