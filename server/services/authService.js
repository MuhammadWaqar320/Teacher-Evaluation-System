require("dotenv").config();
const {
  USER_TYPE,
  KEYS,
  HTTP_STATUS,
  transporter,
} = require("../utils/constant");
const bcrypt = require("bcryptjs");

const {
  constructResponse,
  errorResponse,
  successResponse,
  generateJsonWebToken,
} = require("../utils/allFunctions");
const teacherRepo = new (require("../data/repo/teacherRepo"))();
const studentRepo = new (require("../data/repo/studentRepo"))();
const adminRepo = new (require("../data/repo/adminRepo"))();
module.exports = class authService {
  async loginService(data) {
    const { email, password, user_type } = data;
    let dbResponse = {};
    if (user_type) {
      if (user_type === USER_TYPE.TEACHER) {
        dbResponse = await teacherRepo.getTeacherByEmail(email);
      } else if (user_type === USER_TYPE.STUDENT) {
        dbResponse = await studentRepo.getSutdentByEmail(email);
      } else {
        dbResponse = await adminRepo.getAdminByEmail(email);
      }
    }
    if (dbResponse) {
      const isMatchPassword = await bcrypt.compare(
        password,
        dbResponse.dataValues.password
      );
      if (isMatchPassword) {
        const token = await generateJsonWebToken({
          email: email,
          password: password,
        });
        let mailOptions = {
          from: process.env.EMAIL,
          to: email,
          subject: "Confirmation",
          text: `Dear user you have successfully loggedIn in Teacher Evalution System at ${new Date()}`,
        };
        transporter.sendMail(mailOptions, (error) => {
          if (error) {
            console.log(error);
          } else {
            console.log("mail has been sent");
          }
        });
        return successResponse(
          { token: token, type: user_type, userInfo: dbResponse.dataValues },
          HTTP_STATUS.OK,
          "logged in"
        );
      } else {
        return errorResponse(
          HTTP_STATUS.UNAUTHORIZED,
          "sorry invalid credentials1",
          []
        );
      }
    } else {
      return errorResponse(
        HTTP_STATUS.UNAUTHORIZED,
        "sorry invalid credentials",
        []
      );
    }
  }
  async forgotPasswordService(email, type) {
    try {
      let isUserExist = {};
      if (type) {
        if (type === USER_TYPE.TEACHER) {
          isUserExist = await teacherRepo.getTeacherByEmail(email);
        } else if (type === USER_TYPE.STUDENT) {
          isUserExist = await studentRepo.getStudentByEmail(email);
        } else {
          isUserExist = await adminRepo.getAdminByEmail(email);
        }
      }
      if (isUserExist) {
        let mailOptions = {
          from: process.env.EMAIL,
          to: email,
          subject: "Reset Password",
          text: `Dear user please click on below link to reset your password ${new Date()}`,
        };
        transporter.sendMail(mailOptions, (error) => {
          if (error) {
            return errorResponse(
              HTTP_STATUS.BAD_REQUEST,
              `Email could not sent due to this reason : ${error}`,
              []
            );
            console.log(error);
          }
        });
        return successResponse([], HTTP_STATUS.OK, "Please check your gmail");
      } else {
        return errorResponse(HTTP_STATUS.NOT_FOUND, "User does not exist", []);
      }
    } catch (error) {
      return errorResponse(
        HTTP_STATUS.INTERNAL_SERVER_ERROR,
        error.message,
        []
      );
    }
  }
};
