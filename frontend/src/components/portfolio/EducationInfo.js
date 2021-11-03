import React, { Fragment, useState, useContext } from "react";
import { EducationContext } from "../context/EducationContext";
import Spinner from "../../layout/Spinner";
import api from "../../utils/api";
const EducationInfo = () => {
  const { isLoading, education, setEducation } = useContext(EducationContext);
  const [edu, setEdu] = useState({
    school: education ? education.school : " ",
    degree: education ? education.degree : " ",
    from: education ? education.from : " ",
    to: education ? education.to : " ",
  });
  const { school, degree, from, to } = edu;
  const educationSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/education/create", edu);
      console.log(res);
      setEducation(res.data[0]);
      if (res) {
        alert("Education Details Saved");
      }
    } catch (err) {
      console.log(err.response);
    }
  };
  const educationUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await api.put(
        `/education/update/${education._id}`,
        education
      );
      console.log(res);
      setEducation(res.data[0]);
      if (res) {
        alert("Education Details Updated");
      }
    } catch (err) {
      console.log(err.response);
    }
  };
  const onChange = (e) => {
    setEdu({ ...edu, [e.target.name]: e.target.value });
  };
  return (
    <Fragment>
      <h2>Enter Your School Details</h2>
      <small>* = required field</small>
      <form className="form" onSubmit={educationSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="School"
            name="school"
            defaultValue={school}
            onChange={onChange}
          />
          <small className="form-text">Your Recent School?</small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Degree"
            name="degree"
            defaultValue={degree}
            onChange={onChange}
          />
          <small className="form-text">Your Degree?</small>
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
        {education ? (
          <button
            type="submit"
            variant="contained"
            class="btn btn-primary"
            onClick={educationUpdate}
          >
            Update
          </button>
        ) : (
          <button
            type="submit"
            variant="container"
            class="btn btn-dark"
            onClick={educationSubmit}
          >
            {" "}
            Save
          </button>
        )}
      </form>
    </Fragment>
  );
};

export default EducationInfo;
