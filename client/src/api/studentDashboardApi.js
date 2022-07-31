import { create, deleteData, get,getById,getData, update } from "./httpService"
import { BASE_URL } from "../utils/constant";
const CONTACT_US_FORM=`${BASE_URL}/contact`;
const GET_ALL_STUDENT = `${BASE_URL}/student/getall`;
const GET_ALL_Teacher_By_Semester=`${BASE_URL}/getteacherbysemester`;
const GET_STUDENT_BY_ID = `${BASE_URL}/student/getbyid`;
const ADD_RATING = `${BASE_URL}/rating/create`;
const UPDATE_STUDENT = `${BASE_URL}/student/update`;
const GET_STUDENT_RATING = `${BASE_URL}/student/getRatingInfo`;
const DELETE_RATING = `${BASE_URL}/rating/deleteStudent`;
const UPDATE_RATING=`${BASE_URL}/rating/update`
export const saveContactUsInfoIntoDb=(payload)=>{
 return create(CONTACT_US_FORM,payload)
}
export const getAllStudentFromDb=()=>{
    return getData(GET_ALL_STUDENT);
}
export const  getTeacherBySemesterApi=(student_semester)=>{
    return getById(`${GET_ALL_Teacher_By_Semester}/${student_semester}`);
};
export const getStudentRatingInformation = (id) => {
    return getById(`${GET_STUDENT_RATING}/${id}`)
}      
export const getStudentInfoById=(id)=>{
    return getById(`${GET_STUDENT_BY_ID}/${id}`)
};
export const addRatingApi=(data)=>{
    return create(ADD_RATING,data)
} 
export const updateRatingApi = (data) => {
  return update(UPDATE_RATING, data);
};      
export const updateStudent = (data, id) => {
    return update(`${UPDATE_STUDENT}/${id}`,data)
}
export const deleteRatingRecord = (s_id,t_id) => {
    return deleteData(`${DELETE_RATING}/${s_id}/${t_id}`)
}