const ratingRepo=new (require("../data/repo/ratingRepo"))()
const {
  constructResponse,
  errorResponse,
  successResponse,
  generateJsonWebToken,
} = require("../utils/allFunctions");
require("dotenv").config();
const {
  USER_TYPE,
  KEYS,
  HTTP_STATUS,
  transporter,
} = require("../utils/constant");
module.exports = class RatingService {
  async getRatingInfo() {
    try {
      const dbResponse = await ratingRepo.getRatingDetailFromDb();
      console.log(dbResponse);
      if (dbResponse) {
        return successResponse(dbResponse, HTTP_STATUS.OK, "");
      }
    } catch (error) {
      return errorResponse(
        HTTP_STATUS.INTERNAL_SERVER_ERROR,
        error,
        message,
        []
      );
    }
  }
  async deleteRatingInfo(id) {
    try {
      const dbResponse = await ratingRepo.deleteRatingFromDb(id);
      return dbResponse
        ? successResponse([], HTTP_STATUS.OK, "data deleted successfully")
        : successResponse([], HTTP_STATUS.NOT_FOUND, "rating is not exist");
    } catch (error) {
      return errorResponse(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message);
    }
  }
  async deleteStudentRatingInfo(s, t) {
    try {
      const dbResponse = await ratingRepo.deleteStudentRatingFromDb(s, t);
      return dbResponse
        ? successResponse([], HTTP_STATUS.OK, "data deleted successfully")
        : successResponse([], HTTP_STATUS.NOT_FOUND, "rating is not exist");
    } catch (error) {
      return errorResponse(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message);
    }
  }
  async updateRatingInfo(data,sId,tId) {
    try {
      const dbResponse = await ratingRepo.updateRatingInfoFromDb(
        data,
        sId,
        tId
      );
      console.log(dbResponse)
      return dbResponse
        ? successResponse([], HTTP_STATUS.OK, "data edit successfully")
        : successResponse([], HTTP_STATUS.NOT_FOUND, "rating is not exist");
    } catch (error) {
      return errorResponse(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message);
    }
  }
};