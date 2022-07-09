const {Admin}=require("../models")
module.exports=class adminRepo{
    addAdminIntoDb(newAdminData){
        return Admin.create(newAdminData);
    }
} 