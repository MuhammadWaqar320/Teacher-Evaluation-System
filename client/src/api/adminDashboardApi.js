import { BASE_URL } from "../utils/constant";
import { create, deleteData, getData, update,getById } from "./httpService";
const ADD_STUDENT_INTO_DB = `${BASE_URL}/student/create/`;
const ADD_COURSE = `${BASE_URL}/course/create/`;
const GET_RATING = `${BASE_URL}/rating/getinfo`;
const GET_Avg_RATING = `${BASE_URL}/rating/getavginfo`;
const EDIT_COURSE = `${BASE_URL}/course/update`;
const DELETE_COURSE = `${BASE_URL}/course/delete`;
const DELETE_Rating = `${BASE_URL}/rating/delete`;
const GET_COURSE_BY_ID = `${BASE_URL}/course/getbyid`;
export const createStudent = (data) => {
  return create(ADD_STUDENT_INTO_DB, data);
};
export const createCourse = (data) => {
  return create(ADD_COURSE, data);
};
export const getRatingReporting = () => {
  return getData(GET_RATING);
};
export const getOverRatingReporting = () => {
  return getData(GET_RATING);
};
export const editCourse = (id, payload) => {
  return update(`${EDIT_COURSE}/${id}`, payload);
};
export const deleteUser =(id) => {
  return deleteData(`${DELETE_COURSE}/${id}`);
};
export const deleteRating = (id) => {
  return deleteData(`${DELETE_Rating}/${id}`);
};
export const getCourseDataById=(id)=>{
  return  getById(`${GET_COURSE_BY_ID}/${id}`)
}