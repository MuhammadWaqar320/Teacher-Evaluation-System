const { constructResponse } = require("../utils/allFunctions");

const authService = new (require("../services/authService"))();
const login = async (req, res) => {
  console.log(req.body)
  const responseData = await authService.loginService(req.body);
  return constructResponse(res, responseData);
};
const forgotPassword = async (req, res) => {
 
  const responseData = await authService.forgotPasswordService(req.body.email,req.body.type);
  console.log(responseData)
  return constructResponse(res, responseData);
};
module.exports = {
  login,
  forgotPassword,
};
