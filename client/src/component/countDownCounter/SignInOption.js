import React from "react";
import { Button } from "@mui/material";
import {Paper} from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import { NavLink } from "react-router-dom";
const SignInOption=()=>
{
    return (
      <>
        {localStorage.getItem("login_user") ? (
          <span></span>
        ) : (
          <Paper>
            <div
              style={{
                textAlign: "center",
                paddingTop: "2%",
                paddingBottom: "2%",
                background: "#e1e5e6",
              }}
            >
              <div
                style={{
                  borderTop: "1px solid silver",
                  paddingTop: "1%",
                  borderBottom: "1px solid silver",
                  paddingBottom: "1%",
                }}
              >
                <span style={{ fontSize: "15px" }}>
                  Register To View Feedback
                </span>
                <br></br>
                <NavLink to="/register" style={{ textDecoration: "none" }}>
                  {" "}
                  <Button
                    startIcon={<LoginIcon />}
                    variant="contained"
                    className="SignInClass"
                    style={{
                      background: "#185047",
                      color: "white",
                      width: "250px",
                      textTransform: "capitalize",
                      fontSize: "14px",
                    }}
                  >
                    Sign Up
                  </Button>
                </NavLink>
                <br></br>
                <NavLink to="#" style={{ textDecoration: "none" }}>
                  {" "}
                  <span style={{ fontSize: "15px", color: "black" }}>
                    New Teacher? Start here.
                  </span>
                </NavLink>
              </div>
            </div>
          </Paper>
        )}
      </>
    );
}
export default SignInOption