import { create, get, getData,getById } from "./httpService";
import { BASE_URL } from "../utils/constant";

const GET_ALL_Course = `${BASE_URL}/course/getall`;
const GET_COURSE_BY_TEACHER_ID =`${BASE_URL}/course/getbyteacherid`;

export const getAllCourseFromDb = () => {
  return getData(GET_ALL_Course);
};
export const getCourseByTeacher = (id) => {
  return getById(`${GET_COURSE_BY_TEACHER_ID}/${id}`)
}