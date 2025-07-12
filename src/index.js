import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB();



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