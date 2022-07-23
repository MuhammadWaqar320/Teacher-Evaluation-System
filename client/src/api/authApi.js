import { BASE_URL } from "../utils/constant";
import { get } from "./httpService";
const LOGIN_URL = `${BASE_URL}/tes/login`;

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