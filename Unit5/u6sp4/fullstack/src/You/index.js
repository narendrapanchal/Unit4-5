const express=require("express");
const app=express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
const crudTeacher=require("./src/controller/teacher.controller");
const crudClass=require("./src/controller/class.controller");
const  connect  = require("./src/configs/db");
app.use("/teachers",crudTeacher);
app.use("/classes",crudClass);
let port = process.env.PORT || 4444
app.listen(port,async function(){
    await connect();
    console.log(port);
})
// https://firstappdeploybynarendra.herokuapp.com/