const express=require("express");
const app=express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
const crudEmail=require("./src/controller/email.controller");
const  connect  = require("./src/configs/db");
app.use("/emails",crudEmail);
let port = process.env.PORT || 4445
app.listen(port,async function(){
    await connect();
    console.log(port);
})
// https://emailtagmango.herokuapp.com/emails