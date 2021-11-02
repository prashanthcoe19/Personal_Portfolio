import React, { Fragment, useState, useContext } from "react";
import api from "../../utils/api";
import { ExperienceContext } from "../context/ExperienceContext";
import Spinner from "../../layout/Spinner";
const ExperienceInfo = () => {
  const { isLoading, experience } = useContext(ExperienceContext);
  const [exp, setExp] = useState({
    title: experience ? experience.title : " ",
    company: experience ? experience.company : " ",
    from: experience ? experience.from : " ",
    to: experience ? experience.to : " ",
    description: experience ? experience.description : " ",
  });
  const { title, company, from, to, description } = exp;

  const onChange = (e) => {
    setExp({ ...exp, [e.target.name]: e.target.value });
  };

  const experienceSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/experience/create", exp);
      console.log(res);
    } catch (err) {
      console.log(err.response);
    }
  };
  const experienceUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await api.put(
        `/experience/update/${experience._id}`,
        experience
      );
      console.log(res);
    } catch (err) {
      console.log(err.response);
    }
  };
  if (isLoading) return <Spinner />;
  return (
    <Fragment>
      <h2>Enter Your Experience Details</h2>
      <small>* = required field</small>
      <form className="form" onSubmit={experienceSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Job Title"
            name="title"
            defaultValue={title}
            onChange={onChange}
          />
          <small className="form-text">Your Recent Job Title?</small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Company"
            name="company"
            defaultValue={company}
            onChange={onChange}
          />
          <small className="form-text">Your Employer Company?</small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="From"
            name="from"
            defaultValue={from}
            onChange={onChange}
          />
          <small className="form-text">From?</small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="to"
            name="to"
            defaultValue={to}
            onChange={onChange}
          />
          <small className="form-text">To?</small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Description"
            name="description"
            defaultValue={description}
            onChange={onChange}
          />
          <small className="form-text">Describe your Role!</small>
        </div>
        {experience ? (
          <button
            type="submit"
            variant="contained"
            class="btn btn-primary"
            onClick={experienceUpdate}
          >
            Update
          </button>
        ) : (
          <button
            type="submit"
            variant="container"
            class="btn btn-dark"
            onClick={experienceSubmit}
          >
            {" "}
            Save
          </button>
        )}
      </form>
    </Fragment>
  );
};

export default ExperienceInfo;
