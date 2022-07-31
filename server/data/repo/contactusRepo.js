const { ContactUS } = require("../models");
module.exports = class ContactUsRepo {
  addContactUsInToDb(data) {
    return ContactUS.create(data);
  }
};
