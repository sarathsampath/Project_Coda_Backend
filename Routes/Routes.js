const express = require("express"); 
const ServiceLoginHelper=require("../Services/ServiceLogin")
const ServiceMovieHelper=require("../Services/ServiceMovie") 
const ServiceReviewHelper=require("../Services/ServiceReviewHelper") 



 async function Login(req,res)
 {   console.log("Routes Login Start")
     const Mail=req.body.Mail;
     const Password=req.body.Password;
     const status=await ServiceLoginHelper.Login(Mail,Password);
     console.log("Routes Login end")
     res.send(status)

 }
 async function AddDetails(req,res)
 {   console.log("Routes Adddetails Start")
     const MovieName=req.body.MovieName;
     const Genere=req.body.Genere;
     const Synopsis=req.body.Synopsis;
     const MoviePoster=req.files.files;
     const status=await ServiceMovieHelper.AddMovie(MovieName,Genere,Synopsis,MoviePoster);
     console.log("Routes AddDetails end")
     res.send(status)
}
async function EditDetails(req,res)
{   console.log("Routes Editdetails Start")
    const MovieName=req.body.MovieName;
    const MovieGenere=req.body.MovieGenere;
    const MovieSynopsis=req.body.MovieSynopsis;
    const status=await ServiceMovieHelper.EditMovie(MovieName,MovieGenere,MovieSynopsis);
    console.log("Routes Editdetails end")
    res.send(status)
}
async function DeleteDetails(req,res)
{   console.log("Routes Deletedetails Start")
    const MovieName=req.query.MovieName;
    const status=await ServiceMovieHelper.DeleteMovie(MovieName);
    console.log("Routes Deletedetails end")
    res.send(status)
}
async function ViewMovie(req,res)
{   console.log("Routes viewMovie Start")
    const status=await ServiceMovieHelper.ViewMovie();
    console.log("Routes viewMovie end")
    res.send(status)
}
async function ViewMovieGenere(req,res)
{   console.log("Routes viewMovieGenere Start")
    const Genere=req.query.Genere;
    const status=await ServiceMovieHelper.ViewMovieGenere(Genere);
    console.log("Routes viewMovieGenere end")
    res.send(status)
}
 async function AddReview(req,res)
 {   console.log("Routes AddReview Start")
     const MovieId=req.body.MovieId;
     const Review=req.body.review;
     const status=await ServiceReviewHelper.AddReview(MovieId,Review);
     console.log("Routes AddReview end")
     res.send(status)

 }
 async function ViewReview(req,res)
 {   console.log("Routes viewReview Start")
     const MovieId=req.query.MovieId;
     const status=await ServiceReviewHelper.ViewReview(MovieId);
     console.log("Routes viewReview end")
     
     res.send(status)

 }
 module.exports={Login,AddDetails,AddReview,ViewReview,DeleteDetails,EditDetails,ViewMovie,ViewMovieGenere}