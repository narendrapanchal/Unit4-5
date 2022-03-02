const express=require("express");
const router=express.Router();
const User=require("../model/user.model");
const upload=require("../middleware/upload");
const fs=require("fs");

router.post("",upload.single("image"), async (req, res) => {
    try {
      const users = await User.create({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        profile_pic:req.file.path
      });
      return res.status(201).send(users);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });
  
  router.get("", async (req, res) => {
    try {
      let page=+req.query.page || 1;
      let size=+req.query.size || 3;
      let offset=(page-1)*size;
      const users = await User.find().skip(offset).limit(size).lean().exec();
      const total_pages=Math.ceil((await User.find().countDocuments())/size);
      return res.send({ users , total_pages});
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });
  
  router.get("/:id", async (req, res) => {
    try {
      const users = await User.findById(req.params.id).lean().exec();
  
      return res.send(users);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });
  
  router.patch("/:id",upload.single("image"), async (req, res) => {
    try {
     if(req.file.path){
      const oneuser=await User.findById(req.params.id).lean().exec();
      let picture=oneuser.profile_pic;
      fs.unlinkSync(picture);
      req.body.profile_pic=req.file.path;
      delete req.file;
     }
      const users = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
      return res.status(201).send(users);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });
  
  router.delete("/:id", async (req, res) => {
    try {
      const oneuser=await User.findById(req.params.id).lean().exec();
      const users = await User.findByIdAndDelete(req.params.id).lean().exec();
      let picture=oneuser.profile_pic;
      fs.unlinkSync(picture);
      return res.status(200).send(users);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });
  
  module.exports=router;