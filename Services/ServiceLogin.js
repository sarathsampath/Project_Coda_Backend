const DatabaseHelper=require("../Utils/Database")



async function Login(Mail,Password)
{
    const response=await DatabaseHelper.LoginDatabase(Mail,Password);
    return response;
}

module.exports={Login}