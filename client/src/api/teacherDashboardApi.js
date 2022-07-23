import { BASE_URL } from "../utils/constant";
import { create,getData } from "./httpService";
const Register_URL = `${BASE_URL}/teacher/create`;
const GET_ALL_Teacher = `${BASE_URL}/teacher/getall`;
export const registerTeacherIntoDb=(payload)=>{
    return create(Register_URL,payload)

}
export const getAllTeacherFromDb=()=>{
    return getData(GET_ALL_Teacher);
}