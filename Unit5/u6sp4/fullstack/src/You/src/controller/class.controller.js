const express=require("express");
const router=express.Router();
const Class=require("../model/class.model");

router.get("",async(req,res)=>{
  try{
    var classes=await Class.find().lean().exec();
    res.send(classes);
  }catch(e){
      res.status(500).send(e);
  }
})

router.get("/:id",async(req,res)=>{
    try{
      const classes=await Class.findById(req.params.id).lean().exec();
      res.send(classes);
    }catch(e){
        res.status(500).send(e);
    }
  })
  
router.post("",async(req,res)=>{
    try{
      const classes=await Class.create(req.body);
      res.send(classes);
    }catch(e){
      console.log(e);
        res.status(500).send(e);
    }
  })

  router.patch("/:id",async(req,res)=>{
    try{
      const classes=await Class.findByIdAndUpdate(req.params.id,req.body,{
          new:true
      }).lean().exec();
      console.log("hi")
      res.send(classes);
    }catch(e){
      console.log(e);
        res.status(500).send(e);
    }
  })
  router.delete("/:id",async(req,res)=>{
      try{
        const classes=await Class.findByIdAndDelete(req.params.id).lean().exec();
        res.send(classes);
      }catch(e){
          res.status(500).send(e);
      }
  })
  module.exports= router;