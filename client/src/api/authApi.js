import { BASE_URL } from "../utils/constant";
import { create, get, getById, update } from "./httpService";
const LOGIN_URL = `${BASE_URL}/tes/login`;
const FORGET_PASSWORD = `${BASE_URL}/tes/forgotpassword`;
const RESET_PASS = `${BASE_URL}/user/reset/password`;
export const LoginApi = async (payload) => {
  const responseData = await get(LOGIN_URL, payload);
  if (responseData.success) {
    localStorage.setItem("token", responseData.data.token);
    localStorage.setItem("id", responseData.data.userInfo.id);
    localStorage.setItem("type", responseData.data.type);
    localStorage.setItem("user_name", responseData.data.userInfo.name);
  }
  return responseData;
};
export const sendEmailForPassword = (email,type) => {
  return create(`${FORGET_PASSWORD}`,{email:email,type:type})
}
export const ResetPasswordApi = (payload,email,type) => {
  return create(`${RESET_PASS}/${email}/${type}`,payload)
}