import { create, get, getData } from "./httpService";
import { BASE_URL } from "../utils/constant";

const GET_ALL_Course = `${BASE_URL}/course/getall`;
export const getAllCourseFromDb = () => {
  return getData(GET_ALL_Course);
};
