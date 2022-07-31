const { constructResponse } = require("../utils/allFunctions");
const RatingService = new (require("../services/ratingService"))();
const getRatingReport = async (req, res) => {
  const responseData = await RatingService.getRatingInfo();
  return constructResponse(res, responseData);
};
const deleteRating = async (req, res) => {
  const responseData = await RatingService.deleteRatingInfo(req.params.id);
  return constructResponse(res, responseData);
};
const deleteStudentRating = async (req, res) => {
  const responseData = await RatingService.deleteStudentRatingInfo(
    req.params.s_id,
    req.params.t_id
  );
  return constructResponse(res, responseData);
};
const updateRating = async (req, res) => {
  const responseData = await RatingService.updateRatingInfo(
    req.body,
    req.body.StudentId,
    req.body.TeacherId
  );
  return constructResponse(res, responseData);
};
module.exports = {
  getRatingReport,
  deleteRating,
  deleteStudentRating,
  updateRating,
};
