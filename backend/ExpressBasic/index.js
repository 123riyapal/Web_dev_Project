import { name } from "ejs";
import express from "express";
import path from "path";
const app=express();// creating server using express
// this is the a onother method tp create responses in express

//  ** creating view enjine to use ejs

// $ How  to use static files in node js

app.use(express.static(path.join(path.resolve(),"public")))
app.set("view engine","ejs");
app.get("/",(req,res)=>{
//   const s=path.resolve();// it gives the  whole project path that help us to rendering our html file on browser 

// res.sendFile(path.join(s,"./index.html"))


// !use of ejs to print variable on browser using html
res.render("index",{name:"Siya"});

});

app.listen(5000,()=>{
    console.log("server is running at http//localhost:5000");
});