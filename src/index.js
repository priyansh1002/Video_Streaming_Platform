import dotenv from "dotenv"
import connectDB from "./db/index.js";
import {app} from "./app.js"

dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running on port : ${process.env.PORT}`);
    })
})
.catch((err)=>{
  console.log("MongoDB connection failed !!!",err);
})



/* this is method 1 for connection of database and backend
import express from "express"
const app=express()

( async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        app.on("error",(error)=>{    //this is for databse not connect type error handling
            console.log("Error", error);
            throw error
        })

     app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port ${process.env.PORT}`);
     })
    } catch (error) {
        console.error("Error :", error)
        throw error;
    }
})()

*/