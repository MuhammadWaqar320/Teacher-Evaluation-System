import { create, get,getData } from "./httpService"
import { BASE_URL } from "../utils/constant";
const CONTACT_US_FORM=`${BASE_URL}/contact`;
const GET_ALL_STUDENT = `${BASE_URL}/student/getall`;
export const saveContactUsInfoIntoDb=(payload)=>{
 return create(CONTACT_US_FORM,payload)
}
export const getAllStudentFromDb=()=>{
    return getData(GET_ALL_STUDENT);
}