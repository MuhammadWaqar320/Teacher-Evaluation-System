const express = require("express");
const { createAdmin } = require("../controllers/adminController");
const {
  createStudent,
  retreiveAllStudent,
  updateStudent,
  deleteStudent,
  getStudentById,
} = require("../controllers/studentController");
const {
  createTeacher,
  retreiveAllTeacher,
  updateTeacher,
  deleteTeacher,
  getTeacherById,
} = require("../controllers/teacherController");
const {
  createCourse,
  retreiveAllCourse,
  updateCourse,
  deleteCourse,
  getCourseById,
} = require("../controllers/courseController");
const { login, forgotPassword } = require("../controllers/authController");
const router = express.Router();
// admin routes are here
router.post("/admin/create", createAdmin);
// admin routes are here
router.post("/student/create", createStudent);
router.get("/student/getall", retreiveAllStudent);
router.delete("/student/delete/:id", deleteStudent);
router.put("/student/update/:id", updateStudent);
router.get("/student/getbyid/:id", getStudentById);
// teacher routes are here
router.post("/teacher/create", createTeacher);
router.get("/teacher/getall", retreiveAllTeacher);
router.delete("/teacher/delete/:id", deleteTeacher);
router.put("/teacher/update/:id", updateTeacher);
router.get("/teacher/getbyid/:id", getTeacherById);
// course routes are here
router.post("/course/create", createCourse);
router.get("/course/getall", retreiveAllCourse);
router.delete("/course/delete/:id", deleteCourse);
router.put("/course/update/:id", updateCourse);
router.get("/course/getbyid/:id", getCourseById);

router.get("/tes/login", login);
router.post("/tes/forgotpassword",forgotPassword)
module.exports = {
  router,
};
