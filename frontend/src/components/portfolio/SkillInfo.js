import React, { Fragment, useState, useContext } from "react";
import { SkillContext } from "../context/SkillContext";
import Spinner from "../../layout/Spinner";
import api from "../../utils/api";
const SkillInfo = () => {
  const { isLoading, skill } = useContext(SkillContext);
  console.log(skill);
  const [ski, setSki] = useState({
    language: skill ? skill.title : [],
    framework: skill ? skill.description : [],
    tools: skill ? skill.tools : [],
  });
  const { language, framework, tools } = ski;
  const skillSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/skill/create", ski);
      console.log(res);
    } catch (err) {
      console.log(err.response);
    }
  };
  const skillUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await api.put(`/skill/create/${skill._id}`, ski);
      console.log(res);
    } catch (err) {
      console.log(err.response);
    }
  };
  const onChange = (e) => {
    setSki({ ...ski, [e.target.name]: e.target.value });
  };
  if (isLoading) return <Spinner />;
  return (
    <Fragment>
      <h2>Enter Your Skill Details</h2>
      <small>* = required field</small>
      <form className="form" onSubmit={skillSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Title"
            name="title"
            defaultValue={language.join(";")}
            onChange={onChange}
          />
          <small className="form-text">Project Title</small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Description"
            name="description"
            defaultValue={framework.join(";")}
            onChange={onChange}
          />
          <small className="form-text">Project Description?</small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Tools"
            name="tools"
            defaultValue={tools.join(";")}
            onChange={onChange}
          />
          <small className="form-text">Tools Used?</small>
        </div>
        {skill ? (
          <button
            type="submit"
            variant="contained"
            class="btn btn-primary"
            onClick={skillUpdate}
          >
            Update
          </button>
        ) : (
          <button
            type="submit"
            variant="container"
            class="btn btn-dark"
            onClick={skillSubmit}
          >
            {" "}
            Save
          </button>
        )}
      </form>
    </Fragment>
  );
};

export default SkillInfo;
