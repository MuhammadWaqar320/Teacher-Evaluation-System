const TeacherService = new (require("../services/teacherService"))();
const { constructResponse } = require("../utils/allFunctions");
const createTeacher = async (req, res) => {
  const responseData = await TeacherService.addTeacher(req.body);
  return constructResponse(res, responseData);
};
const retreiveAllTeacher = async (_req, res) => {
  const responseData = await TeacherService.getAllTeacher();
  return constructResponse(res, responseData);
};
const updateTeacher = async (req, res) => {
  const responseData = await TeacherService.updateTeacherInfo(
    req.body,
    req.params.id
  );
  return constructResponse(res, responseData);
};
const changeTeacherPassword = async (req, res) => {
  const responseData = await TeacherService.changeTeacherPasswordInfo(
    req.body,
    req.params.id
  );
  return constructResponse(res, responseData);
};
const deleteTeacher = async (req, res) => {
  const responseData = await TeacherService.deleteTeacherInfo(req.params.id);
  return constructResponse(res, responseData);
};
const getTeacherById = async (req, res) => {
  const responseData = await TeacherService.getTeacherInfoById(req.params.id);
  return constructResponse(res, responseData);
};
const getTeacherRatingInfo=async(req,res)=>{
   const responseData = await TeacherService.getTeacherRatingInfoById(req.params.id);
  return constructResponse(res, responseData); 
}
const getTeacherBySemester=async(req,res)=>{
   const responseData = await TeacherService.getAllTeacherBySemester(req.params.semester);
  return constructResponse(res, responseData); 

}
module.exports = {
  createTeacher,
  retreiveAllTeacher,
  updateTeacher,
  deleteTeacher,
  getTeacherById,
  getTeacherRatingInfo,
  changeTeacherPassword,
  getTeacherBySemester
};
