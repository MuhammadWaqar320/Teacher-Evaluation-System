const {Admin}=require("../models")
module.exports = class adminRepo {
  addAdminIntoDb(newAdminData) {
    return Admin.create(newAdminData);
  }
  getAdminByEmail( email) {
    return Admin.findOne({ where: { email: email } });
  }
}; 