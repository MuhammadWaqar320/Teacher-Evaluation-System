const { HTTP_STATUS,KEYS } = require("../utils/constant");
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const constructResponse = (responseObject, responseData) => {
  return responseObject.status(responseData.status).json(responseData);
};
const successResponse = (data, statusCode, successMessage = "") => {
  return {
    data: data,
    status: statusCode,
    message: successMessage,
    success: statusCode === HTTP_STATUS.NOT_FOUND ? false : true,
  };
};
const errorResponse = (statusCode, errorMessage, data = null) => {
  return {
    data: data,
    status: statusCode ? statusCode : HTTP_STATUS.INTERNAL_SERVER_ERROR,
    message: errorMessage
      ? errorMessage
      : "internal server error try again later",
    success: false,
  };
};
const HashPasswordUsingBcryptjs = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassowrd= await bcrypt.hash(password, salt)
  return hashedPassowrd;
};
const generateJsonWebToken=async(data)=>{
 const token= await jwt.sign(data,KEYS.SECRET_KEY,{expiresIn:"12h"})
 return token 
}
module.exports = {
  constructResponse,
  errorResponse,
  generateJsonWebToken,
  successResponse,
  HashPasswordUsingBcryptjs,
};
