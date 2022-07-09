const { HTTP_STATUS } = require("../utils/constant");
const constructResponse = (responseObject, responseData) => {
  return responseObject.status(responseData.status).json(responseData);
};
const successResponse = (data, statusCode, successMessage = "") => {
  return {
    data: data,
    status: statusCode,
    message: successMessage,
    success: true,
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
module.exports = {
  constructResponse,
  errorResponse,
  successResponse,
};
