import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import swal from "sweetalert"
import { useState } from "react";
import { createStudent } from "../../../api/adminDashboardApi";
import RoutesName from "../../../routes/routesName";
const Sub_addNewStudent = () => {
  const allSemester = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [phoneNo,setPhoneNo]=useState("");
  const [department,setDepartment]=useState("")
  const [cnic,setCnic]=useState("");
  const [semester,setSemester]=useState("");
  const [fname,setFname]=useState("");
  const addStudentIntoDb=async(e)=>{
    e.preventDefault();
    const newStudent = {
      name: name,
      father_name: fname,
      phone_no: phoneNo,
      department: department,
      semester: semester,
      email: email,
      cnic:cnic
    };
    try {
      const dbResponse=await createStudent(newStudent)
      if(dbResponse.success){
       swal({
         title: "Congratulation!",
         text: "New student added successfully",
         icon: "success",
       }).then(() => {
         window.location.href = RoutesName.AdminDashboard.route;
       });  
      }
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <>
      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6" style={{ padding: "5%" }}>
          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <h3> Add New Student </h3>
          </div>
          <Form
            style={{
              border: "1px solid silver",
              borderRadius: "10px",
              padding: "20px",
            }}
            onSubmit={addStudentIntoDb}
          >
            <Row className="mb-1">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Enter student name"
                />
              </Form.Group>

              <Form.Group
                as={Col}
                className="mb-1"
                controlId="formGridAddress1"
              >
                <Form.Label>Father Name</Form.Label>
                <Form.Control
                  type="text"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  placeholder="Enter father name of student"
                />
              </Form.Group>
            </Row>
            <Row className="mb-1">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter student email"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Select Semester:</Form.Label>
                <Form.Select
                  style={{ height: "38px" }}
                  onChange={(e) => setSemester(e.target.value)}
                  className="mb-4"
                >
                  {allSemester.map((item) => {
                    return (
                      <option key={item} value={item}>
                        {item}{" "}
                      </option>
                    );
                  })}
                </Form.Select>
              </Form.Group>
            </Row>
            <Row className="mb-1">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Phone No:</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter student phone no"
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                />
              </Form.Group>

              <Form.Group
                as={Col}
                className="mb-1"
                controlId="formGridAddress1"
              >
                <Form.Label>Department</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter department of student"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Cnic:</Form.Label>
                <Form.Control
                  type="text"
                  value={cnic}
                  onChange={(e) => setCnic(e.target.value)}
                  placeholder="Enter student cnic"
                />
              </Form.Group>
            </Row>

            <Button style={{ background: "#185047" }} type="submit">
              Submit
            </Button>
          </Form>
        </div>
        <div className="col-sm-3"></div>
      </div>
    </>
  );
};

export default Sub_addNewStudent;
