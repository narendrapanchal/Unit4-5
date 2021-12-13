const express= require("express");
let router=express.Router();
let authenticate=require("../middlewares/authenticate");
let Theater=require("../models/theater.model");
router.post=("/",authenticate,async(req,res)=>{
    try{
        const user=req.user;
        const posts=await Theater.create({
            name:req.body.name,
            location:req.body.location,
        })
    }catch(e){
        res.status(500).send({error:e});
    }
})
router.get=("/",authenticate,async(req,res)=>{
    try{
        const user=req.user;
        const posts=await Theater.find().lean().exec();
    }catch(e){
        res.status(500).send({error:e});
    }
})

module.exports=router;