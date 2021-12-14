const express= require("express");
let router=express.Router();
let authenticate=require("../middlewares/authenticate");
let Screen=require("../models/screen.model");
router.post("",authenticate,async(req,res)=>{
    try{
        const posts=await Screen.create(req.body);
        console.log("hi")
        res.status(200).send(posts);
    }catch(e){
        res.status(500).send({error:e ,message:e.message});
    }
})
router.get("/",authenticate,async(req,res)=>{
    try{
        const user=req.user;
        const posts=await Screen.find().lean().exec();
        res.send(posts);
    }catch(e){
        res.status(500).send({error:e});
    }
})

module.exports=router;