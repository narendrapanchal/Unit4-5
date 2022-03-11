const express=require("express");
const app=express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
const crudTeacher=require("./controller/teacher.controller");
const crudClass=require("./controller/class.controller");
const  connect  = require("./configs/db");
app.use("/teachers",crudTeacher);
app.use("/classes",crudClass);
let port = process.env.PORT || 4444
app.listen(port,async function(){
    await connect();
    console.log(port);
})
// https://firstappdeploybynarendra.herokuapp.com/