const express=require("express");
const app=express();
app.use(express.json());
const connect =require("./configs/db");
const crudUser=require("./controller/user.controller");
app.use("/users",crudUser);
app.listen(1234,async()=>{
    await connect();
    console.log(1234 , "port");
})