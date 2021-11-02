import React, { Fragment, useState, useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import { AuthContext } from "../components/context/AuthContext";
import { PersonalContext } from "../components/context/PersonalContext";
const Logout = () => {
  const [show, setShow] = useState(false);
  const { logout } = useContext(AuthContext);
  // const { setPersonnal } = useContext(PersonalContext);
  const handleLogout = () => {
    logout();
    setShow(false);

    // setPersonnal(null);
  };
  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };
  return (
    <Fragment>
      <Button variant="edit-button" onClick={handleShow}>
        Logout <span />
        <i className="fas fa-sign-out-alt"></i>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to log out of your account?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleLogout}>
            Yes
          </Button>
          <Button variant="primary" onClick={handleClose}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};
export default Logout;
