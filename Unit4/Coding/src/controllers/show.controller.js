const express= require("express");
let router=express.Router();
let authenticate=require("../middlewares/authenticate");
let Show=require("../models/show.model");
router.post=("/",authenticate,async(req,res)=>{
    try{
        const user=req.user;
        const posts=await Show.create({
            timing:req.body.timing,
            movie_Id:req.body.movie_Id,
            total_seats:req.body.total_seats,
            screen_Id=req.body.screen_Id
        })
    }catch(e){
        res.status(500).send({error:e});
    }
})
router.get=("/",authenticate,async(req,res)=>{
    try{
        const user=req.user;
        const posts=await Show.find().lean().exec();
    }catch(e){
        res.status(500).send({error:e});
    }
})

module.exports=router;