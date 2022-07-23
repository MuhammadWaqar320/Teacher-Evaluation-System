import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Header from "../../component/navBar/header";
import Row from "react-bootstrap/Row";
import "./contactUs.css";
import { saveContactUsInfoIntoDb } from "../../api/studentDashboardApi";
import Footer from "../../component/footer/footer";
import swal from "sweetalert";
import { useState } from "react";
const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const saveContactUsInfo = async (e) => {
    e.preventDefault();
    const payload = {
      name: name,
      email: email,
      phone_no: phoneNo,
      subject: subject,
      message: message,
    };
    const response = await saveContactUsInfoIntoDb(payload);
    if (response.success) {
      swal({
        title: "Congratulation!",
        text: "Thank you so much for contact",
        icon: "success",
      }).then(() => {
        window.location.href = "/";
      });
    } else {
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
          <Form className="register-form-class" onSubmit={saveContactUsInfo}>
            <div>
              <h4 className="headTitle">Hi, User Contact With Us</h4>
            </div>
            <hr style={{ marginBottom: "40px" }}></hr>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
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
                onChange={(e) => setPhoneNo(e.target.value)}
                placeholder="Enter your phone number"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Subject:</Form.Label>
              <Form.Control
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Enter subject"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Message:</Form.Label>
              <Form.Control
                as="textarea"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here....."
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

export default ContactUs;
