import React, { useState, Fragment } from "react";
import axios from "axios";
const PersonalInfo = () => {
  const [personal, setPersonal] = useState({
    name: " ",
    email: " ",
    phone: " ",
    dob: " ",
    bio: " ",
  });
  const [photo, setPhoto] = useState();
  const { name, email, phone, dob, bio } = personal;

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
      const res = await axios.post("api/personal/create", newPersonal);
      console.log(res.data);
    } catch (err) {
      console.log(err.response);
    }
  };
  return (
    <Fragment>
      <small>* = required field</small>
      <form className="form" onSubmit={personalSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={onChange}
          />
          <small className="form-text">Your Name?</small>
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
          <small className="form-text">Tell us a little about yourself</small>
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
        <button type="submit" variant="contained" class="btn btn-primary">
          Submit
        </button>
      </form>
    </Fragment>
  );
};
export default PersonalInfo;
