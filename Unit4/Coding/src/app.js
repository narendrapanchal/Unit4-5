const express= require("express");
const connect = require("./config/db");
const {register, login}=require("./controllers/authentication.controller");
const movieCrud=require("./controllers/movie.controller");
const screenCrud=require("./controllers/screen.controller");
const seatCrud=require("./controllers/seat.controller");
const showCrud=require("./controllers/show.controller");
const theaterCrud=require("./controllers/theater.controller");
const User=require("./models/user.model");
const app=express();
app.use(express.json());
app.post("/register",register);
app.post("/login",login);
app.get("/users",async(req,res)=>{
        let user=await User.find().lean().exec();
        res.send(user)
    
})
app.use("/movies",movieCrud);
app.use("/screens",screenCrud);
app.use("/seats",seatCrud);
app.use("/shows",showCrud);
app.use("/theaters",theaterCrud);

app.listen(2345,async()=>{
    await connect();
    console.log("port 2345");
})