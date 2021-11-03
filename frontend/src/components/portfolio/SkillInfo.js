import React, { Fragment, useState, useContext } from "react";
import { SkillContext } from "../context/SkillContext";
import Spinner from "../../layout/Spinner";
import api from "../../utils/api";
const SkillInfo = () => {
  const { isLoading, skills, setSkills } = useContext(SkillContext);
  console.log(skills);
  const [ski, setSki] = useState({
    language: skills ? skills.language : [],
    frameworks: skills ? skills.frameworks : [],
    tools: skills ? skills.tools : [],
  });
  let { language, frameworks, tools } = ski;

  const skillSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/skill/create", ski);
      console.log(res);

      setSkills(res.data[0]);
      alert("Skill details saved");
    } catch (err) {
      console.log(err.response);
    }
  };
  const skillUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await api.put(`/skill/update/${skills._id}`, ski);
      console.log(res);

      setSkills(res.data[0]);

      alert("Skill details updated");
    } catch (err) {
      console.log(err.response);
    }
  };
  const onChange = (e) => {
    setSki({ ...ski, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      <h2>Enter Your Skill Details</h2>
      <small>* = required field</small>
      <form className="form" onSubmit={skillSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Language"
            name="language"
            value={language}
            onChange={onChange}
          />
          <small className="form-text">Languages</small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="framework"
            name="framework"
            value={frameworks}
            onChange={onChange}
          />
          <small className="form-text">Frameworks</small>
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
        {skills ? (
          <button
            type="submit"
            variant="container"
            class="btn btn-dark"
            onClick={skillUpdate}
          >
            {" "}
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
