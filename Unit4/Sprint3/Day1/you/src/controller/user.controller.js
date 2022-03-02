const express=require("express");
const router=express.Router();
const User=require("../model/user.model");
const sendMail=require("../utils/send-mail");
router.post("", async (req, res) => {
    try {
      const user = await User.create(req.body);
      sendMail("a@a",`${req.body.email_name}`,`Welcome to ABC system ${req.body.first_name,req.body.last_name}`,`${req.body.first_name} please confirm your email`);
      sendMail("a@a.com",["a@a.com","b@b.com","c@c.com","d@d.com","e@e.com"],`${req.body.first_name,req.body.last_name} has registered with us`,`Please welcome ${req.body.first_name,req.body.last_name}`,"");
      return res.status(201).send(user);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });
  
  
  router.get("", async (req, res) => {
    try {
      let page=+req.query.page || 1;
      let size=+req.query.size || 3;
      let offset=(page-1)*size;
      console.log(page,size,offset);
      const users = await User.find().skip(offset).limit(size).lean().exec();
      const total_pages=Math.ceil((await User.find().countDocuments())/size);
      return res.send({ users , total_pages});
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });
  
  router.get("/:id", async (req, res) => {
    try {
      const user = await User.findById(req.params.id).lean().exec();
  
      return res.send(user);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });
  
  router.patch("/:id", async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
  
      return res.status(201).send(user);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });
  
  router.delete("/:id", async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id).lean().exec();
  
      return res.status(200).send(user);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });
  
  module.exports=router;
