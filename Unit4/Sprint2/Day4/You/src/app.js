const express=require("express");
const app=express();
app.use(express.json());
const crudUser=require("./controller/user.controller");
const crudStudent=require("./controller/student.controller");
const crudEval=require("./controller/evaluation.controller");
const  connect  = require("./configs/db");
app.use("/users",crudUser);
app.use("/evaluations",crudEval);
app.use("/students",crudStudent);
app.listen(12345,async function(){
    await connect();
    console.log(12345);
})