const express=require("express");
const router=express.Router();
const Company=require("../model/company.model");
router.get("",async(req,res)=>{
    try{
        const companies=await Company.find().lean().exec();
        res.send(companies);
    }catch(e){
        console.log(e);
        res.status(500).send(e);
    }
})
router.get("/:id",async(req,res)=>{
    try{
        const companies=await Company.findById(req.params.id).lean().exec();
        res.send(companies);
    }catch(e){
        console.log(e);
        res.status(500).send(e);
    }
})
router.post("",async(req,res)=>{
    try{
        const companies=await Company.create(req.body);
        res.send(companies);
    }catch(e){
        console.log(e);
        res.status(500).send(e);
    }
})
router.patch("/:id",async(req,res)=>{
    try{
        const companies=await Company.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        res.send(companies);
    }catch(e){
        console.log(e);
        res.status(500).send(e);
    }
})
router.delete("/:id",async(req,res)=>{
    try{
        const companies=await Company.findByIdAndDelete(req.params.id).lean().exec();
        res.send(companies);
    }catch(e){
        console.log(e);
        res.status(500).send(e);
    }
})

module.exports=router;