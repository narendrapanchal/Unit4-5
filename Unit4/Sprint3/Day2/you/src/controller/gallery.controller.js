const express=require("express");
const router=express.Router();
const Gallery=require("../model/gallery.model");
const upload=require("../middleware/upload");
const fs=require("fs");

router.post("",upload.single("image"), async (req, res) => {
    try {
      const galleries = await Gallery.create({
        userId:req.body.userId,
        picture:req.file.path,
      });

      return res.status(201).send(galleries);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });
  router.post("/multiple",upload.any("multiple"), async (req, res) => {
    try {
        const filepaths=req.files.map((file)=>file.path);
        console.log(filepaths.length);
        if((filepaths.length)<6){
        picture:filepaths,
        userId:req.body.userId,
       
      });

      return res.status(201).send(galleries);
    }
    else{
  }return res.status(500).json({ message: "file can't be more than 5", status: "Failed" });

    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });
  
  
  router.get("", async (req, res) => {
    try {
      // let page=+req.query.page || 1;
      // let size=+req.query.size || 3;
     
      
      // let offset=(page-1)*size;
      // console.log(page,size,offset);
      const galleries = await Gallery.find().lean().exec();
      // const total_pages=Math.ceil((await Gallery.find().countDocuments())/size);

      return res.send(galleries );
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });
  
  router.get("/:id", async (req, res) => {
    try {
      const galleries = await Gallery.findById(req.params.id).lean().exec();
  
      return res.send(galleries);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });
  
  router.patch("/:id", async (req, res) => {
    try {
      const galleries = await Gallery.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
      return res.status(201).send(galleries);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });
  
  router.delete("/:id", async (req, res) => {
    try {
      let onegallery=await Gallery .findById(req.params.id).lean().exec();
      const galleries = await Gallery.findByIdAndDelete(req.params.id).lean().exec();
      let array=await onegallery.picture;

      array.forEach((ele)=>{
        fs.unlinkSync(ele);
      })
     
       res.status(201).send(galleries);
 

    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });
  
  module.exports=router;