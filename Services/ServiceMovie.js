const DatabaseHelper=require("../Utils/Database")
const shortid=require("shortid")
const s3=require("../Utils/s3upload")

async function ViewMovie()
{
    const response=await DatabaseHelper.ViewMovie();
    return response
}
async function AddMovie(MovieName,Genere,Synopsis,MoviePoster)
{
    const Movieid=shortid()
    const Movie_poster=Movieid+"_"+MoviePoster.name
    console.log(Movieid,MovieName,Genere,Synopsis,Movie_poster)
    MoviePoster.mv("C:/Users/sarat/OneDrive/Desktop/frontend/react-frontend/src/Images/"+Movie_poster)
    const response=await DatabaseHelper.AddMovie(Movieid,MovieName,Genere,Synopsis,Movie_poster)
    return response

}
async function EditMovie(MovieName,MovieGenere,MovieSynopsis)
{
    
    
    const response=await DatabaseHelper.EditMovie(MovieName,MovieGenere,MovieSynopsis)
    return response

}
async function ViewMovieGenere(Genere)
{
    
    
    const response=await DatabaseHelper.ViewMovieGenere(Genere)
    return response

}
async function DeleteMovie(MovieName)
{
    
    
    const response=await DatabaseHelper.DeleteMovie(MovieName)
    return response

}

module.exports={AddMovie,DeleteMovie,EditMovie,ViewMovie,ViewMovieGenere}