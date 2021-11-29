const express=require("express");
const Section=require("../model/section.model");
const router=express.Router();
router.get("",async(req,res)=>{
    try{
        const sections=await Section.find().lean().exec();
        res.send(sections);
    }catch(e){
        res.status(500).send(e);
    }
});
router.get("/:id",async(req,res)=>{
    try{
        const sections=await Section.findById(req.params.id)
        .lean()
        .exec();
        res.send(sections);
    }catch(e){
        res.status(500).send(e);
    }
});
router.post("",async(req,res)=>{
try{
    const sections=await Section.create(req.body);
    res.send(sections);
}catch(e){
    res.status(500).send(e);
}
});
router.patch("/:id",async(req,res)=>{
try{
    const sections= await Section.findByIdAndUpdate(re.params.id,req.body,{
        new:true
    }).lean().exec();
    res.send(sections);
}
catch{
    res.status(500).send(e);
}
})
router.delete("/id",async(req,res)=>{
    try{
        const sections= await Section.findByIdAndDelete(raq.params.id).lean().exec();
    }catch(e){
        res.status(500).send(e);
    }
});

module.exports=router;