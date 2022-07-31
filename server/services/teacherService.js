const TeacherRepo = new (require("../data/repo/teacherRepo"))();
const {
  constructResponse,
  errorResponse,
  successResponse,
  HashPasswordUsingBcryptjs,
} = require("../utils/allFunctions");
const { HTTP_STATUS } = require("../utils/constant");
const bcrypt = require("bcryptjs");
module.exports = class TeacherService {
  async addTeacher(data) {
    const newTeacher = {
      name: data.name,
      father_name: data.father_name,
      email: data.email,
      phone_No: data.phone_no,
      specialization: data.specialization,
      education: data.education,
      createdAt: new Date(),
      updatedAt: new Date(),
      password: await HashPasswordUsingBcryptjs(data.password),
    };
    try {
      const isExist = await TeacherRepo.getTeacherByEmail(data.email);
      if (isExist) {
        return errorResponse(
          HTTP_STATUS.INTERNAL_SERVER_ERROR,
          "teacher is already registered",
        );
      }
      else {
        try {
          const dbResponse = await TeacherRepo.addTeacherInToDb(newTeacher);
          return successResponse(
            dbResponse.dataValues,
            HTTP_STATUS.CREATED,
            "new Teacher has added successfully"
          );
        } catch (error) {
          return errorResponse(
            HTTP_STATUS.INTERNAL_SERVER_ERROR,
            error.message
          );
        } 

       }
    
    } catch (error) {
      return errorResponse(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message);
    }
  }
  async getAllTeacher() {
    try {
      const dbResponse = await TeacherRepo.getAllTeacherFromDb();
      return successResponse(dbResponse, HTTP_STATUS.OK, "all data fetched");
    } catch (error) {
      return errorResponse(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message);
    }
  }
  async deleteTeacherInfo(id) {
    try {
      const dbResponse = await TeacherRepo.deleteTeacherFromDb(id);
      return dbResponse
        ? successResponse([], HTTP_STATUS.OK, "data deleted successfully")
        : successResponse([], HTTP_STATUS.NOT_FOUND, "Teacher is not exist");
    } catch (error) {
      return errorResponse(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message);
    }
  }
  async getTeacherInfoById(id) {
    try {
      const dbResponse = await TeacherRepo.getTeacherInfoByIdFromDb(id);
      return dbResponse
        ? successResponse(
            dbResponse.dataValues,
            HTTP_STATUS.OK,
            " data fetched"
          )
        : successResponse([], HTTP_STATUS.NOT_FOUND, "Teacher is not exist");
    } catch (error) {
      return errorResponse(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message);
    }
  }
  async getTeacherRatingInfoById(id) {
    try {
      const dbResponse = await TeacherRepo.getTeacherRatingInfoByIdFromDb(id);
      return dbResponse
        ? successResponse(dbResponse, HTTP_STATUS.OK, " data fetched")
        : successResponse([], HTTP_STATUS.NOT_FOUND, "Teacher is not exist");
    } catch (error) {
      return errorResponse(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message);
    }
  }
  async getAllTeacherBySemester(semester) {
    try {
      const dbResponse = await TeacherRepo.getAllTeacherBySemesterFromDb(
        semester
      );
      return dbResponse
        ? successResponse(dbResponse, HTTP_STATUS.OK, " data fetched")
        : successResponse([], HTTP_STATUS.NOT_FOUND, "Teacher is not exist");
    } catch (error) {
      return errorResponse(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message);
    }
  }
  async changeTeacherPasswordInfo(data, id) {
    const { new_password, old_password } = data;
    console.log(id);
    const { dataValues } = await TeacherRepo.getTeacherInfoById(id);
    const isMatchPassword = await bcrypt.compare(
      old_password,
      dataValues.password
    );
    console.log(isMatchPassword);
    if (isMatchPassword) {
      const password = await HashPasswordUsingBcryptjs(new_password);
      const result = await TeacherRepo.updateTeacherFromDb(
        { password: password },
        id
      );
      return successResponse(result, HTTP_STATUS.OK, "password updated");
    } else {
      return errorResponse(HTTP_STATUS.NOT_FOUND, "wrong password");
    }
  }
  async updateTeacherInfo(data, id) {
    const newData = {
      name: data.name,
      father_name: data.father_name,
      email: data.email,
      phone_No: data.phone_No,
      specialization: data.specialization,
      education: data.education,
      password: data.password,
      updatedAt: new Date(),
    };
    try {
      const [dbResponse] = await TeacherRepo.updateTeacherFromDb(newData, id);
      return dbResponse
        ? successResponse([], HTTP_STATUS.OK, "data updated")
        : successResponse([], HTTP_STATUS.NOT_FOUND, "Teacher is not exist");
    } catch (error) {
      return errorResponse(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message);
    }
  }
};
