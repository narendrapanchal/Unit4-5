const express= require("express");
const connect = require("./config/db");
const {register, login}=require("./controllers/authentication.controller");
const movieCrud=require("./controllers/movie.controller");
const app=express();
app.use(express.json());
app.post("/register",register);
app.post("/login",login);
app.post("/",movieCrud);
app.get("/",movieCrud);

app.listen(2345,async()=>{
    await connect();
    console.log("port 2345");
})