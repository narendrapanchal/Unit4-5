const express= require("express");
let router=express.Router();
let authenticate=require("../middlewares/authenticate");
let Screen=require("../models/theater.model");
router.post=("/",authenticate,async(req,res)=>{
    try{
        const user=req.user;
        const posts=await Screen.create({
            name:req.body.name,
            theater_Id:req.body.theater_Id,
        })
    }catch(e){
        res.status(500).send({error:e});
    }
})
router.get=("/",authenticate,async(req,res)=>{
    try{
        const user=req.user;
        const posts=await Screen.find().lean().exec();
    }catch(e){
        res.status(500).send({error:e});
    }
})

module.exports=router;