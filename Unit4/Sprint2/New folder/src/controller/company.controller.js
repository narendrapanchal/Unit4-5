const express=require("express");
const router=express.Router();
const Company=require("../model/company.model");

router.get("/companyname/:name",async(req,res)=>{
    try{
        const companies=await Company.find({company_name:req.params.name}).lean().exec();
        let data=companies[0].company_datails;
        console.log(companies);
        console.log("data",data);
        res.send(data);
    }catch(e){
        console.log(e);
        res.status(500).send(e);
    }
})






router.get("/highest_job",async(req,res)=>{
    try{
        const companies=await Company.find().lean().exec();
        let count=0;
        let tempName="";
        companies.forEach(ele=>{
            if(ele.job_ids.length>count){
                count=ele.job_ids.length;
                tempName=ele.company_name;
            }
        })

        res.send(tempName);
    }catch(e){
        console.log(e);
        res.status(500).send(e);
    }
})



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