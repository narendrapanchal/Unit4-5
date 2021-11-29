const express=require("express");
const router=express.Router();
const Job=require("../model/job.model");
router.get("",async(req,res)=>{
    try{
        const jobs=await Job.find().lean().exec();
        res.send(jobs);
    }catch(e){
        console.log(e);
        res.status(500).send(e);
    }
})
router.post("",async(req,res)=>{
    try{
        const jobs=await Job.create(req.body);
        res.send(jobs);
    }catch(e){
        console.log(e);
        res.status(500).send(e);
    }
})
module.exports=router;