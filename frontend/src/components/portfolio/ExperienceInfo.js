import React, { Fragment, useState } from "react";
import axios from "axios";
const ExperienceInfo = () => {
  const [experience, setExperience] = useState({
    title: " ",
    company: " ",
    from: " ",
    to: " ",
    description: "",
  });
  const { title, company, from, to, description } = experience;

  const onChange = (e) => {
    setExperience({ ...experience, [e.target.name]: e.target.value });
  };

  const experienceSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/experience/create", experience);
      console.log(res);
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <Fragment>
      <small>* = required field</small>
      <form className="form" onSubmit={experienceSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Job Title"
            name="title"
            value={title}
            onChange={onChange}
          />
          <small className="form-text">Your Recent Job Title?</small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Company"
            name="company"
            value={company}
            onChange={onChange}
          />
          <small className="form-text">Your Employer Company?</small>
        </div>
        <div className="form-group">
          <input
            type="date"
            placeholder="From"
            name="from"
            value={from}
            onChange={onChange}
          />
          <small className="form-text">From?</small>
        </div>
        <div className="form-group">
          <input
            type="date"
            placeholder="to"
            name="to"
            value={to}
            onChange={onChange}
          />
          <small className="form-text">To?</small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Description"
            name="description"
            value={description}
            onChange={onChange}
          />
          <small className="form-text">Describe your Role!</small>
        </div>
        <button type="submit" variant="contained" class="btn btn-primary">
          Submit
        </button>
      </form>
    </Fragment>
  );
};

export default ExperienceInfo;
