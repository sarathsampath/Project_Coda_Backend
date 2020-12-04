const DatabaseHelper=require("../Utils/Database")
const dateFormat = require('dateformat');
async function AddReview(MovieId,Review)
{
    

    console.log(MovieId,Review)
    const response=await DatabaseHelper.AddReview(MovieId,Review)
    return response;
}
async function ViewReview(MovieId)
{
    console.log(MovieId)
    const response=await DatabaseHelper.ViewReview(MovieId)
    return response;
}
module.exports={AddReview,ViewReview}