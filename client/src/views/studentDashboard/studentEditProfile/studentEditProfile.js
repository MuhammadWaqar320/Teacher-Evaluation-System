import React, { useState, useEffect } from "react";
import { getStudentInfoById } from "../../../api/studentDashboardApi";
import "./studentEditProfile.css";
import { updateStudent } from "../../../api/studentDashboardApi";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import swal from "sweetalert";
import RoutesName from "../../../routes/routesName";
const StudentEditProfile = () => {
  const id = localStorage.getItem("id");
  const [student, setStudent] = useState({});
  const allSemester = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
//   const [password, setPassword] = useState("");

  const [department, setDepartment] = useState("");
  const [cnic, setCnic] = useState("");
  const [semester, setSemester] = useState("");
  const [fname, setFname] = useState("");
  const [loading, setLoading] = useState(true);
  const addStudentIntoDb = async (e) => {
    e.preventDefault();
    const newStudent = {
      name: name,
      father_name: fname,
      phone_No: phoneNo,
      department: department,
      semester: semester,
      email: email,
      cnic: cnic,
    };
    try {
      const dbResponse = await updateStudent(newStudent, id);
      if (dbResponse.data.success) {
        swal({
          title: "Congratulation!",
          text: "Your Profile has updated successfully",
          icon: "success",
        }).then(() => {
          window.location.href = "/student/dashboard";
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    const id = localStorage.getItem("id");
    const fun = async () => {
      const dbResponse = await getStudentInfoById(id);
      if (dbResponse.data.success) {
        setName(dbResponse.data.data.name);
        setCnic(dbResponse.data.data.cnic);
        setDepartment(dbResponse.data.data.department);
        setEmail(dbResponse.data.data.email);
        setFname(dbResponse.data.data.father_name);
        setPhoneNo(dbResponse.data.data.phone_No);
        setSemester(dbResponse.data.data.semester);
        setLoading(false);
      }
    };
    fun();
  }, []);
  console.log(student);
  return (
    <>
      {!loading ? (
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-6" style={{ padding: "5%" }}>
            <div style={{ textAlign: "center", marginBottom: "30px" }}>
              <h3> Update Your Information </h3>
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
                    minLength="3"
                    maxLength="20"
                    pattern="[A-Z a-z]+"
                    title="Only alphabets are allowed"
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
                    minLength="3"
                    maxLength="20"
                    pattern="[A-Z a-z]+"
                    title="Only alphabets are allowed"
                    onChange={(e) => setFname(e.target.value)}
                    placeholder="Enter father name of student"
                    required
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
                    required
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Select Semester:</Form.Label>
                  <Form.Select
                    style={{ height: "38px" }}
                    onChange={(e) => setSemester(e.target.value)}
                    className="mb-1"
                    value={semester}
                    required
                  >
                    {allSemester.map((item) => {
                      return <option key={item}>{item} </option>;
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
                    minLength="10"
                    maxLength="12"
                    pattern="[0-9-]+"
                    title="Only numbers are allowed(0-9) "
                    required
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
                    minLength="3"
                    maxLength="20"
                    pattern="[A-Z a-z]+"
                    title="Only alphabets are allowed"
                    required
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
                    minLength="12"
                    maxLength="16"
                    pattern="[0-9-]+"
                    title="Only numbers are allowed(0-9) "
                    onChange={(e) => setCnic(e.target.value)}
                    placeholder="Enter student cnic"
                    required
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
      ) : (
        "loading"
      )}
    </>
  );
};

export default StudentEditProfile;
