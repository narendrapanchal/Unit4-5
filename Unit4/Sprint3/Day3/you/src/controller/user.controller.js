const express=require("express");
const router=express.Router();
const User=require("../model/user.model");
const { body, validationResult } = require('express-validator');

router.post("",body("first_name").isLength({min:5}),
body("email").isEmail(),
body("pincode").isNumeric().isLength(6),
body("age").isNumeric({min:1,max:100}),
body("gender").isLength({min:4}),
async (req, res) => {
    try {
      const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }else{
      const users = await User.create(req.body);
      return res.status(201).send(users);
    }
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
  
  router.patch("/:id", async (req, res) => {
    try {
    
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
      const users = await User.findByIdAndDelete(req.params.id).lean().exec();
      return res.status(200).send(users);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });
  
  module.exports=router;