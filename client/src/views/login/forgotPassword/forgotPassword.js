import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import swal from "sweetalert";
import loginPic from "../../../assets/images/loginPic.png";
import { sendEmailForPassword } from "../../../api/authApi";
const ForgotPassword = ({ hideModal, Forgot }) => {
  const [email, setEmail] = React.useState("");
  const login_type = [
    { type: "Teacher", key: 1 },
    { type: "Student", key: 2 },
    { type: "Admin", key: 3 },
  ];
  const [type, setType] = React.useState(1);
  const onSubmitHandle = async (e) => {
    e.preventDefault();
      const dbResponse = await sendEmailForPassword(email, type);
      console.log(dbResponse)
    try {
      if (dbResponse.success) {
        swal({
          title: "Congratulation",
          text: "Please check your email to reset your password",
          icon: "success",
        }).then(() => {
          hideModal();
          Forgot();
        });
      } else {
        swal({
          title: "Sorry",
          text: "Invalid email account please try again",
          icon: "error",
          dangerMode: true,
        }).then(() => {
        
    
        });
      }
    } catch (error) {
          swal({
            title: "Sorry",
            text: "Something went wrong",
            icon: "error",
            dangerMode: true,
          }).then(() => {
          });
       }
  };
  return (
    <>
      <div className="row" style={{ padding: "30px" }}>
        <div className="col-sm-5">
          <img src={loginPic}></img>
        </div>
        <div className="col-sm-7">
          <Form onSubmit={onSubmitHandle}>
            <h3
              style={{ textAlign: "center", fontFamily: "initial" }}
              className="mb-4"
            >
              {" "}
              Well Come User
            </h3>
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Text>
              <Form.Label> As a:</Form.Label>
            </Form.Text>
            <Form.Select
              size="sm"
              className="mb-4"
              onChange={(e) => setType(e.target.value)}
            >
              {login_type.map((item) => {
                return (
                  <option key={item.key} value={item.key}>
                    {item.type}{" "}
                  </option>
                );
              })}
            </Form.Select>
            <Button
              variant="primary"
              type="submit"
              style={{ marginRight: "10px", background: "#185047" }}
            >
              Submit
            </Button>
            <Button onClick={hideModal}>Cancel</Button>
          </Form>
        </div>
      </div>
    </>
  );
};
export default ForgotPassword;
