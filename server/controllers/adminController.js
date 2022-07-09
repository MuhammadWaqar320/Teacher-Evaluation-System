const AdminService=new (require("../services/adminService"))();
const { constructResponse}=require("../utils/allFunctions")
const createAdmin=async(req,res)=>{
 const responseData=await AdminService.createNewAdmin(req.body)
 console.log(responseData)
 return constructResponse(res,responseData)
}
module.exports={
    createAdmin
}