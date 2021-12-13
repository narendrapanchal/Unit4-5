const express= require("express");
let router=express.Router();
let authenticate=require("../middlewares/authenticate");
let Seat=require("../models/seat.model");
router.post=("/",authenticate,async(req,res)=>{
    try{
        const user=req.user;
        const posts=await Seat.create({
            show_Id:req.body.show_Id,
           
        })
        res.status(200).send(posts);
    }catch(e){
        res.status(500).send({error:e});
    }
})
router.get=("/",authenticate,async(req,res)=>{
    try{
        const user=req.user;
        const posts=await Seat.find().lean().exec();
        res.send(posts);
    }catch(e){
        res.status(500).send({error:e});
    }
})

module.exports=router;