const express=require("express");
const router=express.Router();
const Student=require("../model/student.model");
const Evaluation=require("../model/evaluation.model");
const User=require("../model/user.model")


router.get("/studenthighest_score/",async(req,res)=>{
  try{
    const students=await Student.find().lean().exec();
    const evaluations=await Evaluation.findById(req.params.id).lean().exec();
    const users=await User.find().lean().exec();
    let data=[];
    let score=0;
    if(students.length){
      let data=[];
      students.forEach(Element=>{
        let studentid=Element.evaluation_id.toString();
        if(Element.score>score){
          data=Element;
          score=Element.score;
          console.log(score);
        }
      })
      let desirestudent=await User.findById(data.user_id).lean().exec();
      let sendabaledata=[];
      sendabaledata.push(desirestudent.first_name);
      sendabaledata.push(data.score);
      sendabaledata.push(data.roll_id);
      res.send(sendabaledata);


    }
    else{
      res.send({});
    }
    // if(studentid==evalid){
    //   users.forEach(oneuser=>{
    //     if(oneuser._id.toString()==Element.user_id.toString()){
    //       data.push(oneuser.first_name);        }
    //   })
    // }

  }catch(e){
      res.status(500).send(e);
  }
})



router.get("/evaluation_id/:id",async(req,res)=>{
  try{
    const students=await Student.find().lean().exec();
    const evaluations=await Evaluation.findById(req.params.id).lean().exec();
    const users=await User.find().lean().exec();
    let evalid=evaluations._id.toString();
    let data=[];
    students.forEach(Element=>{
      let studentid=Element.evaluation_id.toString();
    if(studentid==evalid){
      users.forEach(oneuser=>{
        if(oneuser._id.toString()==Element.user_id.toString()){
          data.push(oneuser.first_name);        }
      })
    }
    })

    res.send(data);
  }catch(e){
      res.status(500).send(e);
  }
})

router.get("",async(req,res)=>{
  try{
    const students=await Student.find().lean().exec();
    res.send(students);
  }catch(e){
      res.status(500).send(e);
  }
})

router.get("/:id",async(req,res)=>{
    try{
      const students=await Student.findById(req.params.id).lean().exec();
      res.send(students);
    }catch(e){
        res.status(500).send(e);
    }
  })
  
router.post("",async(req,res)=>{
    try{
      const students=await Student.create(req.body);
      res.send(students);
    }catch(e){
      console.log(e);
        res.status(500).send(e);
    }
  })

  router.patch("/:id",async(req,res)=>{
    try{
      const students=await Student.findByIdAndUpdate(req.params.id,req.body,{
          new:true
      }).lean().exec();
      console.log("hi")
      res.send(students);
    }catch(e){
      console.log(e);
        res.status(500).send(e);
    }
  })
  router.delete("/:id",async(req,res)=>{
      try{
        const students=await Student.findByIdAndDelete(req.params.id).lean().exec();
        res.send(students);
      }catch(e){
          res.status(500).send(e);
      }
  })
  module.exports= router;