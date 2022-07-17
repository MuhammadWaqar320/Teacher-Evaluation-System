const { Student } = require("../models");
module.exports = class studentRepo {
  addStudentInToDb(newAdminData) {
    return Student.create(newAdminData);
  }
  getAllStudentFromDb() {
    return Student.findAll();
  }
  deleteStudentFromDb(id) {
    return Student.destroy({
      where: {
        id: id,
      },
    });
  }
  getStudentInfoByIdFromDb(id) {
    return Student.findOne({
      where: {
        id: id,
      },
    });
  }
  updateStudentFromDb(newData, id) {
    return Student.update(newData, { where: { id: id } });
  }
  getSutdentByEmail( email) {
    return Student.findOne({ where: {  email: email } });
  }
};

