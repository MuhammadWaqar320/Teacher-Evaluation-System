const express = require("express");
const { createAdmin } = require("../controllers/adminController");
const {
  createStudent,
  retreiveAllStudent,
  updateStudent,
  deleteStudent,
  getStudentById,
  createRating,
  getStudentRatingInfo,

} = require("../controllers/studentController");
const {
  createTeacher,
  retreiveAllTeacher,
  updateTeacher,
  deleteTeacher,
  getTeacherById,
  getTeacherRatingInfo,
  getTeacherBySemester,
  changeTeacherPassword,
} = require("../controllers/teacherController");
const {
  createCourse,
  retreiveAllCourse,
  updateCourse,
  deleteCourse,
  getCourseById,
  getCourseByTeacherId,
} = require("../controllers/courseController");
const {
  getRatingReport,
  deleteRating,
  deleteStudentRating,
  updateRating,
} = require("../controllers/ratingController");
const {
  login,
  forgotPassword,
  resetPasswordUser,
} = require("../controllers/authController");
const router = express.Router();
const {createContactus} =require("../controllers/contactusController")
// admin routes are here
router.post("/admin/create", createAdmin);
// student routes are here
router.post("/student/create", createStudent);
router.get("/student/getall", retreiveAllStudent);
router.delete("/student/delete/:id", deleteStudent);
router.put("/student/update/:id", updateStudent);
router.get("/student/getbyid/:id", getStudentById);
router.get("/student/getRatingInfo/:id", getStudentRatingInfo);

// teacher routes are here
router.post("/teacher/create", createTeacher);
router.get("/teacher/getall", retreiveAllTeacher);
router.delete("/teacher/delete/:id", deleteTeacher);
router.put("/teacher/update/:id", updateTeacher);
router.get("/teacher/getbyid/:id", getTeacherById);
router.get("/getteacherbysemester/:semester", getTeacherBySemester);
router.put("/teacher/changepassword/:id", changeTeacherPassword);

// course routes are here
router.post("/course/create", createCourse);
router.get("/course/getall", retreiveAllCourse);
router.delete("/course/delete/:id", deleteCourse);
router.put("/course/update/:id", updateCourse);
router.get("/course/getbyid/:id", getCourseById);
router.get("/course/getbyteacherid/:id", getCourseByTeacherId);

router.post("/tes/login", login);
router.post("/tes/forgotpassword",forgotPassword)
router.post("/contact", createContactus);
router.get("/rating/getinfo",getRatingReport)
router.delete("/rating/delete/:id", deleteRating);
router.delete("/rating/deleteStudent/:s_id/:t_id", deleteStudentRating);
router.put("/rating/update",updateRating);
router.get("/getteacherrating/:id",getTeacherRatingInfo);
router.post("/rating/create", createRating)
router.post("/user/reset/password/:email/:type", resetPasswordUser);
  



module.exports = {
  router,
};
