const studentService = new (require("../services/studentService"))();
const { constructResponse } = require("../utils/allFunctions");
const createStudent = async (req, res) => {
  const responseData = await studentService.addStudent(req.body);
  return constructResponse(res, responseData);
};
const retreiveAllStudent = async (_req, res) => {
  const responseData = await studentService.getAllStudent();
  return constructResponse(res, responseData);
};
const updateStudent = async (req, res) => {
  const responseData = await studentService.updateStudentInfo(
    req.body,
    req.params.id
  );
  return constructResponse(res, responseData);
};
const deleteStudent = async (req, res) => {
  const responseData = await studentService.deleteStudentInfo(req.params.id);
  return constructResponse(res, responseData);
};
const getStudentById = async (req, res) => {
  const responseData = await studentService.getStudentInfoById(req.params.id);
  return constructResponse(res, responseData);
};
const createRating = async (req, res) => {
  const responseData = await studentService.addRating(req.body);
  return constructResponse(res, responseData);
};
const getStudentRatingInfo = async (req, res) => {
  const responseData = await studentService.getStudentRatingInformation(req.params.id);
  return constructResponse(res, responseData);
};
module.exports = {
  createStudent,
  retreiveAllStudent,
  updateStudent,
  deleteStudent,
  getStudentById,
  createRating,
  getStudentRatingInfo,
};
