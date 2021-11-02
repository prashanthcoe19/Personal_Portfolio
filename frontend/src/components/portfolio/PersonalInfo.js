import React, { useState, Fragment, useContext } from "react";
import { PersonalContext } from "../context/PersonalContext";
import Spinner from "../../layout/Spinner";
import api from "../../utils/api";
const PersonalInfo = () => {
  const { isLoading, personnal } = useContext(PersonalContext);
  console.log(personnal);
  const [personal, setPersonal] = useState({
    name: personnal ? personnal.name : " ",
    email: personnal ? personnal.email : " ",
    phone: personnal ? personnal.phone : " ",
    dob: personnal ? personnal.dob : " ",
    bio: personnal ? personnal.bio : " ",
  });
  const [toggle, setToggle] = useState(false);
  const [photo, setPhoto] = useState();
  const { name, email, phone, dob, bio } = personal;
  // const mypersonal = personalContext.personal[0];
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
      setToggle(true);
      console.log(res.data);
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
        `/personal/update/${personnal.id}`,
        newPersonal
      );
      console.log(res.data);
    } catch (err) {
      console.log(err.response);
    }
  };
  if (isLoading & !personal) return <Spinner />;
  return (
    <Fragment>
      <h2>Enter Your Personal Details</h2>
      <small>* = required field</small>
      <form className="form">
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            defaultValue={name}
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
        {personnal ? (
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
  );
};
export default PersonalInfo;
