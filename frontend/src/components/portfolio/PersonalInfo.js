import React, { useState, Fragment, useContext, useEffect } from "react";
import { PersonalContext } from "../context/PersonalContext";
import Spinner from "../../layout/Spinner";
import api from "../../utils/api";
const PersonalInfo = () => {
  const { isLoading, personnal, setPersonnal } = useContext(PersonalContext);
  // console.log(personnal);
  const [personal, setPersonal] = useState({
    bio: " ",
    dob: " ",
    email: " ",
    name: " ",
    phone: " ",
  });
  const [toggle, setToggle] = useState(false);
  const [photo, setPhoto] = useState();
  const { name, email, phone, dob, bio } = personal;

  useEffect(() => {
    if (personnal != null) {
      setPersonal(personnal);
    }
  }, []);
  // console.log(personal);

  const onChange = (e) => {
    setPersonal({ ...personal, [e.target.name]: e.target.value });
  };
  const handlePhoto = (e) => {
    setPhoto(e.target.files[0]);
  };

  const personalSubmit = async (e) => {
    e.preventDefault();
    const newPersonal = new FormData();
    newPersonal.append("name", name);
    newPersonal.append("email", email);
    newPersonal.append("phone", phone);
    newPersonal.append("dob", dob);
    newPersonal.append("bio", bio);
    newPersonal.append("file", photo);
    try {
      const res = await api.post("/personal/create", newPersonal);
      // console.log(res.data);
      if (res) {
        alert("Personal Details Saved");
        setToggle(true);
        setPersonnal(res.data[0]);
      }
    } catch (err) {
      console.log(err.response);
    }
  };
  const personalUpdate = async (e) => {
    e.preventDefault();
    const newPersonal = new FormData();
    newPersonal.append("name", name);
    newPersonal.append("email", email);
    newPersonal.append("phone", phone);
    newPersonal.append("dob", dob);
    newPersonal.append("bio", bio);
    newPersonal.append("file", photo);
    try {
      const res = await api.put(
        `/personal/update/${personnal._id}`,
        newPersonal
      );
      // console.log(res.data);
      if (res) {
        setPersonnal(res.data[0]);
        alert("Personal Details Updated");
      }
    } catch (err) {
      alert("Information cannot be updated");
      console.log(err.response);
    }
  };
  return (
    <Fragment>
      {personnal & isLoading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h2>Enter Your Personal Details</h2>
          <small>* = required field</small>
          <form className="form">
            <div className="form-group">
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={onChange}
              />
              <small className="form-text">`Your Name</small>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onChange}
              />
              <small className="form-text">Your Email?</small>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Phone"
                name="phone"
                value={phone}
                onChange={onChange}
              />
              <small className="form-text">Your Contact Number?</small>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="DOB"
                name="dob"
                value={dob}
                onChange={onChange}
              />
              <small className="form-text">Your DOB?</small>
            </div>
            <div className="form-group">
              <textarea
                placeholder="A short bio of yourself"
                name="bio"
                value={bio}
                onChange={onChange}
              />
              <small className="form-text">
                Tell us a little about yourself
              </small>
            </div>
            <div className="form-group">
              <input
                type="file"
                id="file"
                name="file"
                placeholder="Upload Image"
                className="form-control"
                onChange={handlePhoto}
              />{" "}
              <small className="form-text">Upload a new picture</small>
            </div>
            {personnal || toggle ? (
              <button
                type="submit"
                variant="contained"
                class="btn btn-primary"
                onClick={personalUpdate}
              >
                Update
              </button>
            ) : (
              <button
                type="submit"
                variant="container"
                class="btn btn-dark"
                onClick={personalSubmit}
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
export default PersonalInfo;
