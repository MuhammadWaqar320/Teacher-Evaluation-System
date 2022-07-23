const { constructResponse } = require("../utils/allFunctions");
const RatingService = new (require("../services/ratingService"))();
const getRatingReport = async (req, res) => {
  const responseData = await RatingService.getRatingInfo();
  return constructResponse(res, responseData);
};
const deleteRating=async(req,res)=>{
   const responseData = await RatingService.deleteRatingInfo(req.params.id);
   return constructResponse(res, responseData);
}
module.exports = {
  getRatingReport,
  deleteRating
};
