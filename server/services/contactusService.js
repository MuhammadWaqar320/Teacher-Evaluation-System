const contactusRepo = new (require("../data/repo/contactusRepo"))();
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
module.exports = class contactusService {
  async addContactInfo(data) {
    const newContactUsInfo = {
      name: data.name,
      email: data.email,
      phone_no: data.phone_no,
      subject: data.subject,
      message: data.message,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    try {
      const dbResponse = await contactusRepo.addContactUsInToDb(
        newContactUsInfo
      );
      return successResponse(
        dbResponse.dataValues,
        HTTP_STATUS.CREATED,
        "new information has added successfully"
      );
    } catch (error) {
      return errorResponse(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message);
    }
  }
};
