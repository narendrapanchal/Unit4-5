const express=require("express");
const connect =require("./configs/db");
const app=express();
app.use(express.json());











app.listen(12345,async()=>{
    await connect();
    console.log(1234);
})