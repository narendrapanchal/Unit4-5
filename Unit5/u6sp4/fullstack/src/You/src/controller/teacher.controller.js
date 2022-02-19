const express=require("express");
const router=express.Router();
const Teacher=require("../model/teacher.model");
router.get("",async(req,res)=>{
  try{
    const teachers= await Teacher.find().lean().exec();
    res.send(teachers);
  }catch(e){
      res.status(500).send(e);
  }
})

router.get("/:id",async(req,res)=>{
    try{
      const teachers=await Teacher.findOne(req.params.id).lean().exec();
      res.send(teachers);
    }catch(e){
        res.status(500).send(e);
    }
  })
  
router.post("",async(req,res)=>{
    try{
      const teachers=await Teacher.create(req.body);
      res.send(teachers);
    }catch(e){
        res.status(500).send(e);
    }
  })

  // router.patch("/:id",async(req,res)=>{
  //   try{
  //     const teachers= await Teacher.findByIdAndUpdate(req.params.id,req.body,{
  //         new:true
  //     }).lean().exec();
  //     res.send(teachers);
  //   }catch(e){
  //       res.status(500).send(e);
  //   }
  // })
  // router.delete("/:id",async(req,res)=>{
  //     try{
  //       const teachers=await Teacher.findByIdAndDelete(req.params.id).lean().exec();
  //       res.send(teachers);
  //     }catch(e){
  //         res.status(500).send(e);
  //     }
  // })
  module.exports= router;