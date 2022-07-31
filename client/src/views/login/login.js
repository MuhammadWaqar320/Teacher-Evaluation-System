import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import FormCom from "../../component/form/form";
import ForgotPassword from "./forgotPassword/forgotPassword";
import "./login.css";
const Login = (props) => {
  const [isForgot, setIsForgot] = useState(false);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{ fontFamily: "initial" }}
        >
          {isForgot ? <span>Forgot Password</span> : <span>Login Here</span>}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {isForgot ? (
          <ForgotPassword
            hideModal={props.onHide}
            Forgot={() => setIsForgot(false)}
          />
        ) : (
          <FormCom hideModal={props.onHide} />
        )}
      </Modal.Body>
      <Modal.Footer>
        {isForgot ? (
          ""
        ) : (
          <div
            className="forgot-class"
            role="button"
            onClick={() => setIsForgot(true)}
          >
            Forgot password?
          </div>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default Login;
