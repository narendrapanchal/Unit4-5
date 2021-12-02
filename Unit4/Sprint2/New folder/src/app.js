const express=require("express");
const connect =require("./configs/db");
const app=express();
app.use(express.json());
const crudJobs=require("./controller/job.controller");
const crudCompany=require("./controller/company.controller");
app.use("/jobs",crudJobs);
app.use("/companies",crudCompany);
app.listen(12345,async()=>{
    await connect();
    console.log(1234);
})