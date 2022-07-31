import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Header from "../../component/navBar/header";
import Row from "react-bootstrap/Row";
import "./registration.css";
import { registerTeacherIntoDb } from "../../api/teacherDashboardApi";
import Footer from "../../component/footer/footer";
import swal from "sweetalert";
import { useState } from "react";
const Registration = () => {
  const [name, setName] = useState("");
  const [f_name, setFName] = useState("");

  const [email, setEmail] = useState("");

  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");

  const [education, setEducation] = useState("");

  const [specialization, setSpecialization] = useState("");

  const registerTeacher = async (e) => {
    e.preventDefault();
    const payload = {
      name: name,
      father_name: f_name,
      email: email,
      phone_no: phoneNo,
      specialization: specialization,
      education: education,
      password: password,
    };
    const response = await registerTeacherIntoDb(payload);
    if(response.success){
        swal({
          title: "Congratulation",
          text: "You have been registerd successfully",
          icon: "success",
        }).then(()=>{
              window.location.href = "/";
        });
      
    }
    else if(response.false){
         swal({
           title: "Sorry",
           text: "This user is already exist",
           icon: "error",
           dangerMode: true,
         });
    }
    else{
          swal({
            title: "Sorry ",
            text: "Something is wrong try again later",
            icon: "error",
            dangerMode: true,
          });
    }
  };
  return (
    <>
      <Header />
      <div className="row register-class">
        <div className="col-sm-4"></div>
        <div className="col-sm-4 shadow-lg p-3 mb-5 bg-white rounded">
          <Form className="register-form-class" onSubmit={registerTeacher}>
            <div>
              <h4 className="headTitle">Hi, Teacher Register Here</h4>
            </div>
            <hr style={{ marginBottom: "40px" }}></hr>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                minLength="3"
                maxLength="20"
                pattern="[A-Z a-z]+"
                title="Only alphabets are allowed"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Father Name:</Form.Label>
              <Form.Control
                type="text"
                value={f_name}
                minLength="3"
                maxLength="20"
                pattern="[A-Z a-z]+"
                title="Only alphabets are allowed"
                onChange={(e) => setFName(e.target.value)}
                placeholder="Enter your father name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Phone No.</Form.Label>
              <Form.Control
                type="tel"
                value={phoneNo}
                minLength="10"
                maxLength="12"
                pattern="[0-9-]+"
                title="Only numbers are allowed(0-9) "
                onChange={(e) => setPhoneNo(e.target.value)}
                placeholder="Enter your phone number"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                value={password}
                minLength="6"
                maxLength="20"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Educatoin:</Form.Label>
              <Form.Control
                type="text"
                value={education}
                minLength="3"
                maxLength="20"
                pattern="[A-Z a-z]+"
                title="Only alphabets are allowed"
                onChange={(e) => setEducation(e.target.value)}
                placeholder="Enter your education"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Specialization</Form.Label>
              <Form.Control
                value={specialization}
                minLength="3"
                maxLength="20"
                pattern="[A-Z a-z]+"
                title="Only alphabets are allowed"
                onChange={(e) => setSpecialization(e.target.value)}
                placeholder="Enter your specialization"
                required
              />
            </Form.Group>

            <Button
              style={{ background: "#185047", color: "white" }}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </div>
        <div className="col-sm-4"></div>
      </div>
      <Footer />
    </>
  );
};

export default Registration;
