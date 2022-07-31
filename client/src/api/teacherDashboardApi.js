import { BASE_URL } from "../utils/constant";
import { create,getById,getData, update } from "./httpService";
const Register_URL = `${BASE_URL}/teacher/create`;
const GET_ALL_Teacher = `${BASE_URL}/teacher/getall`;
const Get_Rating_Detail_To_Teacher = `${BASE_URL}/getteacherrating`;
const CHANGE_TEACHER_PASSWORD=`${BASE_URL}/teacher/changepassword`
export const registerTeacherIntoDb=(payload)=>{
    return create(Register_URL,payload)

}
export const getAllTeacherFromDb=()=>{
    return getData(GET_ALL_Teacher);
}
export const getRatingDetailToTeacher=(id)=>{
    return getById(`${Get_Rating_Detail_To_Teacher}/${id}`);
}
export const changeTeacherPassword = (data, id) => {
    return update(`${CHANGE_TEACHER_PASSWORD}/${id}`,data)
}