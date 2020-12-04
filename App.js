const express=require("express")
const bodyparser=require("body-parser")
const app=express()
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}));
const dotenv=require("dotenv");
dotenv.config();
const cors=require("cors")
app.use(cors())
const fileupload = require('express-fileupload')
app.use(fileupload())
const RoutesHelper=require("./Routes/Routes")
const UtilsHelperDatabase=require("./Utils/Database")

UtilsHelperDatabase.databasecheck();

app.post("/login", RoutesHelper.Login);
app.post("/AddMovieDetails",RoutesHelper.AddDetails);
app.put("/EditMovieDetails",RoutesHelper.EditDetails);
app.delete("/DeleteMovieDetails",RoutesHelper.DeleteDetails);
app.get("/ViewMovies",RoutesHelper.ViewMovie)
app.get("/ViewMovieGenere",RoutesHelper.ViewMovieGenere)
app.post("/AddReview",RoutesHelper.AddReview);
app.post("/ViewReview",RoutesHelper.ViewReview);
app.listen(4000);