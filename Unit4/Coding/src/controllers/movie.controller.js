const express= require("express");
let router=express.Router();
let authenticate=require("../middlewares/authenticate");
let Movie=require("../models/movie.model");
router.post("",authenticate,async(req,res)=>{
    try{
        const user=req.user;
        console.log("Hi Movie")
        const posts=await Movie.create(req.body);
        res.status(200).send(posts);
    }catch(e){
        res.status(500).send({error:e,message:e.message});
    }
})
router.get("/",authenticate,async(req,res)=>{
    try{
        const user=req.user;
        const posts=await Movie.find().lean().exec();
        res.send(posts);
    }catch(e){
        res.status(500).send({error:e});
    }
})
router.get("/actor",authenticate,async(req,res)=>{
    try{
        const user=req.user;
        const posts=await Movie.find();
        let obj=[];
        posts.forEach((ele)=>{
            let arr=ele.actors;
            let check=false;
            arr.forEach((eleact)=>{
                if(eleact==req.body.actor)
                check=true;
            })
            if(check)
            obj.push(ele);

        })
        res.send(obj);
    }catch(e){
        res.status(500).send({error:e,message:e.message});
    }
})


module.exports=router;