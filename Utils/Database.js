const mysql=require("mysql");
const Response=require("../Utils/response")
const dotenv=require("dotenv");
dotenv.config();

var con=mysql.createConnection(
    {
        host:process.env.HOST,
        user:process.env.USER,
        password:process.env.PASSWORD,
        database:process.env.DATABASE
    }
);

async function databasecheck()
{
return new Promise((resolve,reject)=>
{
    con.connect(function(err)
    {
        if(err) 
        {   
            reject(console.log(err));

        }
           
        else    
        {
            resolve(console.log("connected"));
        }
      
    });
});
}

async function LoginDatabase(Mail,password)
{
return new Promise((resolve,reject)=>
{
const Query=`select * from LoginUser where MailId='${Mail}' and Passwords='${password}'`
con.query(Query,async function(err,results,fields)
{
    if(err)
    {
        const response=await Response.SendResponse(false,"Database error","401")
        console.log(err)
        resolve(response)
    }
    if(results.length===0)
    {
        const response=await Response.SendResponse(false,"Invalid login","401")
        resolve(response) 
    }
    else{
        
        const response=await Response.SendResponse(true,results[0].Admin,"200")
        resolve(response)

    }
    
});
});
}


async function ViewMovie()
{
    return new Promise((resolve,reject)=>
    {
    const Query1=`select * from Movie `
    console.log(Query1)
    con.query(Query1,async function(err,result)
    {
        if(err) 
        {
            console.log(err)
            const response=await Response.SendResponse(false,"Database Error","401")
            resolve(response)
        }   
        else
        {   const response=await Response.SendResponse(true,result,"200")
            resolve(response)
        }
    });
 
});
}

async function ViewMovieGenere(Genere)
{
    return new Promise((resolve,reject)=>
    {
    const Query1=`select * from Movie where MovieGenere= '${Genere}'`
    console.log(Query1)
    con.query(Query1,async function(err,result)
    {
        if(err) 
        {
            console.log(err)
            const response=await Response.SendResponse(false,"Database Error","401")
            resolve(response)
        }   
        else
        {   const response=await Response.SendResponse(true,result,"200")
            resolve(response)
        }
    });
 
});
}

async function AddMovie(MovieId,MovieName,Genere,Synopsis,MoviePoster)
{
    return new Promise((resolve,reject)=>
    {
    const Query1=`insert into Movie (MovieId,MovieName,MovieGenere,MovieSynopsis,MoviePoster) values('${MovieId}','${MovieName}','${Genere}','${Synopsis}','${MoviePoster}')`
    console.log(Query1)
    con.query(Query1,async function(err,result)
    {
        if(err) 
        {
            console.log(err)
            const response=await Response.SendResponse(false,"Database Error","401")
            resolve(response)
        }   
        else
        {   const response=await Response.SendResponse(true,"Inserted Succesfully","200")
            resolve(response)
        }
    });
 
});
}
async function EditMovie(MovieName,MovieGenere,MovieSynopsis)
{
    return new Promise((resolve,reject)=>
    {
    const Query1=`update Movie  set MovieGenere='${MovieGenere}',MovieSynopsis='${MovieSynopsis}' where MovieName='${MovieName}'`
    console.log(Query1)
    con.query(Query1,async function(err,result)
    {
        if(err) 
        {
            console.log(err)
            const response=await Response.SendResponse(false,"Database Error","401")
            resolve(response)
        }   
        else
        {   const response=await Response.SendResponse(true,"updated Succesfully","200")
            resolve(response)
        }
    });
 
});
}
async function DeleteMovie(MovieName)
{
    return new Promise((resolve,reject)=>
    {
    const Query1=`delete from Movie  where MovieName='${MovieName}'`
    console.log(Query1)
    con.query(Query1,async function(err,result)
    {
        if(err) 
        {
            console.log(err)
            const response=await Response.SendResponse(false,"Database Error","401")
            resolve(response)
        }   
        else
        {   const response=await Response.SendResponse(true,"deleted Succesfully","200")
        console.log(result)
            resolve(response)
        }
    });
 
});
}

async function AddReview(MovieId,Review,Date)
{
    return new Promise((resolve,reject)=>
    {
    const Query1=`insert into MovieComments (MovieId,userId,MovieComments) values('${MovieId}','1','${Review}')`
    console.log(Query1)
    con.query(Query1,async function(err,result)
    {
        if(err) 
        {
            console.log(err)
            const response=await Response.SendResponse(false,"Database Error","401")
            resolve(response)
        }   
        else
        {   const response=await Response.SendResponse(true,"Inserted Succesfully","200")
            resolve(response)
        }
    });
 
});
}

async function ViewReview(MovieId)
{
    return new Promise((resolve,reject)=>
    {
    const Query1=`select MovieComments from MovieComments where MovieId='${MovieId}' `
    console.log(Query1)
    con.query(Query1,async function(err,result)
    {
        if(err) 
        {
            console.log(err)
            const response=await Response.SendResponse(false,"Database Error","401")
            resolve(response)
        }   
        else
        {   const response=await Response.SendResponse(true,result,"200")
            resolve(response)
        }
    });
 
});
}


module.exports={databasecheck,LoginDatabase,ViewMovieGenere,AddMovie,AddReview,ViewReview,DeleteMovie,EditMovie,ViewMovie
}