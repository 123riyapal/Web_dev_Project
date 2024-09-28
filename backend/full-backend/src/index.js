import dotenv from "dotenv"
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
import './app.js'
dotenv.config({
    path:'./env'
})




connectDB().then(()=>{
    app.listen(process.env.PORT || 3000,()=>{
        console.log(`server is running at port :: ${process.env.PORT}`)
    })
}).catch((error)=>{
    console.log("MONGODB connection failed :: ",error)
})

























// ;(async()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("error",error)
//             throw error
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`App is running on ${process.env.PORT} PORT `)
//         })
//     }catch(error){
//         console.log("error :",error);
//         throw error;
//     }
// })()