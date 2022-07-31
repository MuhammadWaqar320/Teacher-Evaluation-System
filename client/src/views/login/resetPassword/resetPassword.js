import React from "react";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { ResetPasswordApi } from "../../../api/authApi";
import { Paper } from "@mui/material";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
const ResetPassword = () => {
    const {email,type}=useParams()
    const [password, setPassword] = useState("")
    console.log(email,type)
  const ResetPasswordHandle = async (e) => {
      e.preventDefault()
    const dbResponse = await ResetPasswordApi({ password: password }, email, type)
    console.log(dbResponse)
    if (dbResponse.success) {
          swal({
            title: "Congratulations",
            text: "Password has reset",
            icon: "success",
          }).then(() => {
            window.location.href = "/";
          });
    }
    else {
        swal({
          title: "Sorry",
          text: "Something went wrong",
          icon: "error",
          dangerMode: true,
        });
    }
    }
  return (
    <>
      <div className="row">
        <div className="col-sm-4"></div>
        <div className="col-sm-4">
          <Paper
            elevation={24}
            style={{
              marginTop: "150px",
              padding: "10px",
            }}
          >
            <Form
              style={{
                border: "1px solid silver",
                borderRadius: "10px",
                padding: "10px",
                          } }
                          onSubmit={ResetPasswordHandle}
            >
              <h3
                style={{
                  textAlign: "center",
                  fontFamily: "initial",
                  marginBottom: "30px",
                }}
              >
                Reset Your Password
              </h3>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                                  placeholder="Enter New Password"
                                  value={ password }
                                  onChange={(e)=>setPassword(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Reset
              </Button>
            </Form>
          </Paper>
        </div>
        <div className="col-sm-4"></div>
      </div>
    </>
  );
};

export default ResetPassword;
