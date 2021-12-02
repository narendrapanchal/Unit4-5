const express=require("express");
const router=express.Router();
const Job=require("../model/job.model");

router.get("/sort_by_rating",async(req,res)=>{
    try{
        const jobs=await Job.find().sort({job_rating:1}).lean().exec();
         console.log(jobs);
        res.send(jobs);
    }catch(e){
        console.log(e);
        res.status(500).send(e);
    }
})


router.get("/notice_period_month",async(req,res)=>{
    try{
        const jobs=await Job.find({notice_period_month:2}).lean().exec();
         console.log(jobs);
        res.send(jobs);
    }catch(e){
        console.log(e);
        res.status(500).send(e);
    }
})

router.get("/work_from_home",async(req,res)=>{
    try{
        const jobs=await Job.find({work_from_home:1}).lean().exec();
         console.log(jobs);
        res.send(jobs);
    }catch(e){
        console.log(e);
        res.status(500).send(e);
    }
})



router.get("/skill/:skill/city/:city",async(req,res)=>{
    try{
        const jobs=await Job.find({$and:[{skill:req.params.skill},{city:req.params.city}]}).lean().exec();
         console.log(jobs);
        res.send(jobs);
    }catch(e){
        console.log(e);
        res.status(500).send(e);
    }
})
router.get("",async(req,res)=>{
    try{
        const jobs=await Job.find().lean().exec();
        res.send(jobs);
    }catch(e){
        console.log(e);
        res.status(500).send(e);
    }
})
router.get("/:id",async(req,res)=>{
    try{
        const jobs=await Job.findById(req.params.id).lean().exec();
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
router.patch("/:id",async(req,res)=>{
    try{
        const jobs=await Job.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        res.send(jobs);
    }catch(e){
        console.log(e);
        res.status(500).send(e);
    }
})
router.delete("/:id",async(req,res)=>{
    try{
        const jobs=await Job.findByIdAndDelete(req.params.id).lean().exec();
        res.send(jobs);
    }catch(e){
        console.log(e);
        res.status(500).send(e);
    }
})

module.exports=router;