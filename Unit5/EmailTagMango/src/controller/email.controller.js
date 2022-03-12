const express=require("express");
const router=express.Router();
const Email=require("../model/email.model");
router.get("",async(req,res)=>{
  try{
    const emails= await Email.find().lean().exec();
    let data= emails.map((ele)=>{
      delete ele._id; 
      return ele;
    })
  res.status(200).send(data);
  }catch(e){
      res.status(500).send(e);
  }
})
  
router.post("",async(req,res)=>{
    try{
      const emails=await Email.create(req.body);
      res.status(200).send(emails);
    }catch(e){
        res.status(500).send(e);
    }
  })

  router.patch("/:id",async(req,res)=>{
    try{
      const emails= await Email.findByIdAndUpdate(req.params.id,req.body,{
          new:true
      }).lean().exec();
      res.status(201).send(emails);
    }catch(e){
        res.status(500).send(e);
    }
  })
  router.delete("/:id",async(req,res)=>{
      try{
        const emails=await Email.findByIdAndDelete(req.params.id).lean().exec();
        res.status(201).send(emails);
      }catch(e){
          res.status(500).send(e);
      }
  })
  module.exports= router;