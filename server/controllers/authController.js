const { constructResponse } = require("../utils/allFunctions");

const authService = new (require("../services/authService"))();
const login = async (req, res) => {
  console.log(req.body)
  const responseData = await authService.loginService(req.body);
  return constructResponse(res, responseData);
};
const forgotPassword = async (req, res) => {
 console.log(req.params)
  const responseData = await authService.forgotPasswordService(req.params.email,Number(req.params.type));
  console.log(responseData)
  return constructResponse(res, responseData);
};
const resetPasswordUser = async (req, res) => {
  const responseData = await authService.ResetPasswordService(
    req.body.password,
    req.params.email,
    Number(req.params.type)
  );
  return constructResponse(res, responseData);
};
module.exports = {
  login,
  forgotPassword,
  resetPasswordUser,
};
