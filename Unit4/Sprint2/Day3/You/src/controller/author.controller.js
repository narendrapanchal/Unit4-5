const express=require("express");
const Author=require("../model/author.model");
const router=express.Router();
router.get("",async(req,res)=>{
    try{
        const authors=await Author.find().lean().exec();
        res.send(authors);
    }catch(e){
        res.status(500).send(e);
    }
});
router.get("/:id",async(req,res)=>{
    try{
        const authors=await Author.findById(req.params.id)
        .lean()
        .exec();
        res.send(authors);
    }catch(e){
        res.status(500).send(e);
    }
});
router.post("",async(req,res)=>{
try{
    const authors=await Author.create(req.body);
    res.send(authors);
}catch(e){
    res.status(500).send(e);
}
});
router.patch("/:id",async(req,res)=>{
try{
    const authors=await Author.findByIdAndUpdate(re.params.id,req.body,{
        new:true
    }).lean().exec();
    res.send(authors);
}
catch(e){
    res.status(500).send(e);
}
})
router.delete("/id",async(req,res)=>{
    try{
        const authors=await Author.findByIdAndDelete(raq.params.id).lean().exec();
    }catch(e){
        res.status(500).send(e);
    }
});

module.exports=router;