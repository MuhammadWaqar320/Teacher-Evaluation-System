import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import swal from "sweetalert";
import Row from "react-bootstrap/Row";
import { useEffect } from "react";
import { getAllTeacherFromDb } from "../../../api/teacherDashboardApi";
import { useState } from "react";
import RoutesName from "../../../routes/routesName";
import Modal from "react-bootstrap/Modal";
import { editCourse } from "../../../api/adminDashboardApi";
const EditCourse = (props) => {
  const allSemester = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];
  const [course_name, setCourseName] = useState(props.course.course_name);
  const [course_code, setCourseCode] = useState(props.course.course_code);
  const [course_hours, setCourseHour] = useState(props.course.credit_hours);
  const [teacherId, setTeacherId] = useState(props.course.Teacher.TeacherId);
  const [semester, setSemester] = useState(props.course.courseForWhichSemester);
  const [allTeacher, setAllTeacher] = useState([]);
  const getAllTeachers = async () => {
    const dbResponse = await getAllTeacherFromDb();
    if (dbResponse.success) {
      setAllTeacher(dbResponse.data);
    }
  };
  const addCourseIntoDb = async (e) => {
    e.preventDefault();
      props.onHide();
    const newCourse = {
      course_name: course_name,
      course_code: course_code,
      credit_hours: course_hours,
      courseForWhichSemester: semester,
      TeacherId: teacherId,
    };
    try {
      const dbResponse = await editCourse(props.course.id, newCourse);
      if (dbResponse.data.success) {
        swal({
          title: "Congratulation!",
          text: " Course updated successfully",
          icon: "success",
        }).then(() => {
          window.location.href = "/admin/allcourse";
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getAllTeachers();
  }, []);
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update Course Here
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            style={{
              border: "1px solid silver",
              borderRadius: "10px",
              padding: "20px",
            }}
            onSubmit={addCourseIntoDb}
          >
            <Form.Group className="mb-1" controlId="formGridEmail">
              <Form.Label>Course Name:</Form.Label>
              <Form.Control
                value={course_name}
                onChange={(e) => setCourseName(e.target.value)}
                type="text"
                placeholder="Enter course name"
              />
            </Form.Group>

            <Form.Group className="mb-1" controlId="formGridAddress1">
              <Form.Label>Course Code:</Form.Label>
              <Form.Control
                type="text"
                value={course_code}
                onChange={(e) => setCourseCode(e.target.value)}
                placeholder="Enter course code"
              />
            </Form.Group>

            <Form.Group className="mb-2" controlId="formGridEmail">
              <Form.Label> Credit Hours:</Form.Label>
              <Form.Control
                type="text"
                value={course_hours}
                onChange={(e) => setCourseHour(e.target.value)}
                placeholder="Enter credit hours"
              />
            </Form.Group>

            <Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Select Semester:</Form.Label>
                <Form.Select
                  style={{ height: "38px" }}
                  onChange={(e) => setSemester(e.target.value)}
                  className="mb-1"
                  value={semester}
                >
                  {allSemester.map((item) => {
                    return <option key={item}>{item} </option>;
                  })}
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Select Teacher:</Form.Label>
                <Form.Select
                  style={{ height: "38px" }}
                  value={teacherId}
                  className="mb-4"
                >
                  {allTeacher.map((item) => {
                    return (
                      <option
                        key={item.id}
                        onChange={(e) => setTeacherId(e.target.value)}
                      >
                        {item.name}{" "}
                      </option>
                    );
                  })}
                </Form.Select>
              </Form.Group>
            </Row>
            <Modal.Footer>
              <Button
                style={{ background: "#185047" }}
                type="submit"
              >
                Update
              </Button>
              <Button onClick={props.onHide} className="btn-danger">
                Close
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditCourse;
