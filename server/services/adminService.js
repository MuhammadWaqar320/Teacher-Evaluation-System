const adminRepo = new (require("../data/repo/adminRepo"))();
const {
  constructResponse,
  errorResponse,
  successResponse,
  HashPasswordUsingBcryptjs,
} = require("../utils/allFunctions");
const { HTTP_STATUS } = require("../utils/constant");
module.exports = class adminService {
  async createNewAdmin(data) {
    const newAdmin = {
      name: data.name,
      email: data.email,
      password: await HashPasswordUsingBcryptjs(data.password),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    try {
      const dbResponse = await adminRepo.addAdminIntoDb(newAdmin);
      return successResponse(
        dbResponse.dataValues,
        HTTP_STATUS.CREATED,
        "new admin has added successfully"
      );
    } catch (error) {
      return errorResponse(HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message);
    }
  }
};
