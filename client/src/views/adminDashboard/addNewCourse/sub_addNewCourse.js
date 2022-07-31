import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import swal from "sweetalert";
import { useState } from "react";
import { createCourse } from "../../../api/adminDashboardApi";
import RoutesName from "../../../routes/routesName";
import { getAllTeacherFromDb } from "../../../api/teacherDashboardApi";
import { useEffect } from "react";
const Sub_addNewCourse = () => {
     const allSemester = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];
     const [course_name, setCourseName] = useState("");
     const [course_code, setCourseCode] = useState("");
     const [course_hours, setCourseHour] = useState("");
     const [teacherId, setTeacherId] = useState("");
     const [semester,setSemester]=useState("")
     const [allTeacher,setAllTeacher]=useState([])
     const getAllTeachers=async()=>{
       const dbResponse=await getAllTeacherFromDb();
       if(dbResponse.success){
           setAllTeacher(dbResponse.data)
       }
     }
     useEffect(() => {
        getAllTeachers()
     }, [])
     
     const addCourseIntoDb = async (e) => {
       e.preventDefault();
       const newCourse = {
         course_name: course_name,
         course_code: course_code,
         credit_hours: course_hours,
         courseForWhichSemester: semester,
         TeacherId:teacherId
       };
       console.log("data is",newCourse)
       try {
         const dbResponse = await createCourse(newCourse);
         if (dbResponse.success) {
           swal({
             title: "Congratulation!",
             text: "New Course added successfully",
             icon: "success",
           }).then(() => {
             window.location.href = RoutesName.AdminDashboard.route;
           });
         }
         else {
             swal({
               title: "Sorry!",
               text: "course already registered",
               icon: "error",
             });
         }
       } catch (error) {
         console.log(error.message);
           swal({
             title: "Sorry!",
             text: "Something is went wrong",
             icon: "error",
           });
       }
     };
  return (
    <>
      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6" style={{ padding: "5%" }}>
          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <h3> Add New Course </h3>
          </div>
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
                minLength="3"
                maxLength="20"
                pattern="[A-Z a-z]+"
                title="Only alphabets are allowed"
                required
              />
            </Form.Group>

            <Form.Group className="mb-1" controlId="formGridAddress1">
              <Form.Label>Course Code:</Form.Label>
              <Form.Control
                type="text"
                value={course_code}
                minLength="3"
                maxLength="20"
                onChange={(e) => setCourseCode(e.target.value)}
                placeholder="Enter course code"
              />
            </Form.Group>

            <Form.Group className="mb-1" controlId="formGridEmail">
              <Form.Label>Credit Hours:</Form.Label>
              <Form.Control
                type="text"
                value={course_hours}
                minLength="10"
                maxLength="12"
                pattern="[0-9-]+"
                title="Only numbers are allowed(0-9) "
                onChange={(e) => setCourseHour(e.target.value)}
                placeholder="Enter credit hours"
              />
            </Form.Group>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Select Semester:</Form.Label>
              <Form.Select
                style={{ height: "38px" }}
                onChange={(e) => setSemester(e.target.value)}
                className="mb-1"
                required
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
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Select Teacher:</Form.Label>
              <Form.Select
                style={{ height: "38px" }}
                onChange={(e) => setTeacherId(e.target.value)}
                className="mb-4"
                required
              >
                {allTeacher.map((item) => {
                  return (
                    <option key={item.id} value={item.id}>
                      {item.name}{" "}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>

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

export default Sub_addNewCourse;
