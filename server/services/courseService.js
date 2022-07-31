const CourseRepo = new (require("../data/repo/courseRepo"))();
const {
  constructResponse,
  errorResponse,
  successResponse,
} = require("../utils/allFunctions");
const { HTTP_STATUS } = require("../utils/constant");
module.exports = class CourseService {
  async addCourse(data) {
    const newCourse = {
      course_code: data.course_code,
      credit_hours: data.credit_hours,
      courseForWhichSemester: data.courseForWhichSemester,
      course_name: data.course_name,
      TeacherId: data.TeacherId,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
   try {
     const isExist = await CourseRepo.getCourseByCode(data.course_code);
     if (isExist) {
        return errorResponse(HTTP_STATUS.INTERNAL_SERVER_ERROR, "course already added");
     }
     else {
         try {
           const dbResponse = await CourseRepo.addCourseInToDb(newCourse);
           return successResponse(
             dbResponse.dataValues,
             HTTP_STATUS.CREATED,
             "new Course has added successfully"
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
  async getAllCourse() {
    try {
      const dbResponse = await CourseRepo.getAllCourseFromDb();
      return successResponse(dbResponse, HTTP_STATUS.OK, "all data fetched");
    } catch (error) {
      return errorResponse(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message);
    }
  }
  async deleteCourseInfo(id) {
    try {
      const dbResponse = await CourseRepo.deleteCourseFromDb(id);
      return dbResponse
        ? successResponse([], HTTP_STATUS.OK, "data deleted successfully")
        : successResponse([], HTTP_STATUS.NOT_FOUND, "Course is not exist");
    } catch (error) {
      return errorResponse(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message);
    }
  }
  async getCourseInfoById(id) {
    try {
      const dbResponse = await CourseRepo.getCourseInfoByIdFromDb(id);
      return dbResponse
        ? successResponse(
            dbResponse.dataValues,
            HTTP_STATUS.OK,
            " data fetched"
          )
        : successResponse([], HTTP_STATUS.NOT_FOUND, "Course is not exist");
    } catch (error) {
      return errorResponse(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message);
    }
  }
  async getCourseInfoByTeacherId(id) {
    try {
      const dbResponse = await CourseRepo.getCourseInfoByTeacherIdFromDb(id);
      return dbResponse
        ? successResponse(
            dbResponse,
            HTTP_STATUS.OK,
            " data fetched"
          )
        : successResponse([], HTTP_STATUS.NOT_FOUND, "Course is not exist");
    } catch (error) {
      return errorResponse(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message);
    }
  }
  async updateCourseInfo(data, id) {
    const newData = {
      course_code: data.course_code,
      credit_hours: data.credit_hours,
      courseForWhichSemester: data.courseForWhichSemester,
      course_name: data.course_name,
      updatedAt: new Date(),
    };
    try {
      const [dbResponse] = await CourseRepo.updateCourseFromDb(newData, id);
      return dbResponse
        ? successResponse([], HTTP_STATUS.OK, "data updated")
        : successResponse([], HTTP_STATUS.NOT_FOUND, "Course is not exist");
    } catch (error) {
      return errorResponse(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message);
    }
  }
};
