const express=require("express");
const router=express.Router();
const User=require("../model/user.model");
router.get("",async(req,res)=>{
  try{
    const users= await User.find().lean().exec();
    res.send(users);
  }catch(e){
      res.status(500).send(e);
  }
})

router.get("/:id",async(req,res)=>{
    try{
      const users=await User.findById(req.params.id).lean().exec();
      res.send(users);
    }catch(e){
        res.status(500).send(e);
    }
  })
  
router.post("",async(req,res)=>{
    try{
      const users=await User.create(req.body);
      res.send(users);
    }catch(e){
        res.status(500).send(e);
    }
  })

  router.patch("/:id",async(req,res)=>{
    try{
      const users= await User.findByIdAndUpdate(req.params.id,req.body,{
          new:true
      }).lean().exec();
      res.send(users);
    }catch(e){
        res.status(500).send(e);
    }
  })
  router.delete("/:id",async(req,res)=>{
      try{
        const users=await User.findByIdAndDelete(req.params.id).lean().exec();
        res.send(users);
      }catch(e){
          res.status(500).send(e);
      }
  })
  module.exports= router;