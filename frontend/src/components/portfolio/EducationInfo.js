import React, { Fragment, useState, useContext, useEffect } from "react";
import { EducationContext } from "../context/EducationContext";
import Spinner from "../../layout/Spinner";
import api from "../../utils/api";
const EducationInfo = () => {
  const { isLoading, education, setEducation } = useContext(EducationContext);
  const [edu, setEdu] = useState({
    school: " ",
    degree: " ",
    from: " ",
    to: " ",
  });
  const [toggle, setToggle] = useState(false);
  const { school, degree, from, to } = edu;
  useEffect(() => {
    if (education) {
      console.log("not null");
      setEdu(education);
    }
  }, []);
  // console.log(edu);
  const educationSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/education/create", edu);
      setEducation(res.data[0]);
      setEdu(res.data[0]);
      if (res) {
        alert("Education Details Saved");
        setToggle(true);
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
      // console.log(res);
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
      {education & isLoading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h2>Enter Your School Details</h2>
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
                type="text"
                placeholder="From"
                name="from"
                value={from}
                onChange={onChange}
              />
              <small className="form-text">From?</small>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="to"
                name="to"
                value={to}
                onChange={onChange}
              />
              <small className="form-text">To?</small>
            </div>
            {education || toggle ? (
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
      )}
    </Fragment>
  );
};

export default EducationInfo;
