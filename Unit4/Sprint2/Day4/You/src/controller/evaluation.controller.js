const express=require("express");
const router=express.Router();
const  Evaluation=require("../model/evaluation.model");
router.get("",async(req,res)=>{
  try{
    const evaluations=await Evaluation.find().lean().exec();
    res.send(evaluations);
  }catch(e){
      res.status(500).send(e);
  }
})

router.get("/:id",async(req,res)=>{
    try{
      const evaluations=await Evaluation.findById(req.params.id).lean().exec();
      res.send(evaluations);
    }catch(e){
        res.status(500).send(e);
    }
  })
  
router.post("",async(req,res)=>{
    try{
      const evaluations=await Evaluation.create(req.body);
      res.send(evaluations);
    }catch(e){
      console.log(e);
        res.status(500).send(e);
    }
  })

  router.patch("/:id",async(req,res)=>{
    try{
      const evaluations=await Evaluation.findByIdAndUpdate(req.params.id,req.body,{
          new:true
      }).lean().exec();
      res.send(evaluations);
    }catch(e){
        res.status(500).send(e);
    }
  })
  router.delete("/:id",async(req,res)=>{
      try{
        const evaluations=await Evaluation.findByIdAndDelete(req.params.id).lean().exec();
        res.send(evaluations);
      }catch(e){
          res.status(500).send(e);
      }
  })
  module.exports= router;