const express=require("express");
const app=express();
app.use(express.json());
const crudTeacher=require("./controller/teacher.controller");
const crudClass=require("./controller/class.controller");
const  connect  = require("./configs/db");
app.use("/teachers",crudTeacher);
app.use("/classes",crudClass);
app.listen(12345,async function(){
    await connect();
    console.log(12345);
})
// https://firstappdeploybynarendra.herokuapp.com/