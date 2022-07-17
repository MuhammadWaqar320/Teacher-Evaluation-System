const TeacherRepo = new (require("../data/repo/teacherRepo"))();
const {
  constructResponse,
  errorResponse,
  successResponse,
  HashPasswordUsingBcryptjs,
} = require("../utils/allFunctions");
const { HTTP_STATUS } = require("../utils/constant");
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
      password: await HashPasswordUsingBcryptjs(data.password)
    };
    try {
      const dbResponse = await TeacherRepo.addTeacherInToDb(newTeacher);
      return successResponse(
        dbResponse.dataValues,
        HTTP_STATUS.CREATED,
        "new Teacher has added successfully"
      );
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
