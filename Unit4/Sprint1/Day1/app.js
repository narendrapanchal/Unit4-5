const express=require("express");
const app=express();

app.use(express.json());
app.get("/get/",(req,res)=>{
    res.send("Welcome to Home Page");
})
const data=require("./data");
app.get("/get/users",(req,res,next)=>{
    res.send(data);
})
app.listen(1234,()=>{
    console.log("port 1234");
})