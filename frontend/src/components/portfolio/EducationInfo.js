import React, { Fragment, useState } from "react";
import axios from "axios";

const EducationInfo = () => {
  const [education, setEducation] = useState({
    school: " ",
    degree: " ",
    from: " ",
    to: " ",
  });
  const { school, degree, from, to } = education;
  const educationSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/education/create", education);
      console.log(res);
    } catch (err) {
      console.log(err.response);
    }
  };
  const onChange = (e) => {
    setEducation({ ...education, [e.target.name]: e.target.value });
  };
  return (
    <Fragment>
      <small>* = required field</small>
      <form className="form" onSubmit={educationSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="School"
            name="school"
            value={school}
            onChange={onChange}
          />
          <small className="form-text">Your Recent School?</small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Degree"
            name="degree"
            value={degree}
            onChange={onChange}
          />
          <small className="form-text">Your Degree?</small>
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
        <button type="submit" variant="contained" class="btn btn-primary">
          Submit
        </button>
      </form>
    </Fragment>
  );
};

export default EducationInfo;
