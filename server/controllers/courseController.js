const CourseService = new (require("../services/courseService"))();
const { constructResponse } = require("../utils/allFunctions");
const createCourse = async (req, res) => {
  const responseData = await CourseService.addCourse(req.body);
  return constructResponse(res, responseData);
};
const retreiveAllCourse = async (_req, res) => {
  const responseData = await CourseService.getAllCourse();
  return constructResponse(res, responseData);
};
const updateCourse = async (req, res) => {
  const responseData = await CourseService.updateCourseInfo(
    req.body,
    req.params.id
  );
  return constructResponse(res, responseData);
};
const deleteCourse = async (req, res) => {
  const responseData = await CourseService.deleteCourseInfo(req.params.id);
  return constructResponse(res, responseData);
};
const getCourseById = async (req, res) => {
  const responseData = await CourseService.getCourseInfoById(req.params.id);
  return constructResponse(res, responseData);
};
module.exports = {
  createCourse,
  retreiveAllCourse,
  updateCourse,
  deleteCourse,
  getCourseById,
};
