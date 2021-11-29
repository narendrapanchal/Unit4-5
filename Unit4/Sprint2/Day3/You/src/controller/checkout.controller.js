const express=require("express");
const Checkout=require("../model/checkout.model");
const Book=require("../model/book.model");
const router=express.Router();
router.get("/books",async(req,res)=>{
    try{
        let  checkouts=await Checkout.find().lean().exec();
    let data=  checkouts.map(async(temp)=>{
        let oneData= await Book.findById(temp.book_id);
         return (oneData.book_name);
         
        })
        Promise.all(data).then(temp=>{
            console.log(temp);
            res.send(temp);
        })
    
    }catch(e){
        res.status(500).send(e);
    }
});
router.get("",async(req,res)=>{
    try{
        const checkouts=await Checkout.find().lean().exec();
        res.send(checkouts);
    }catch(e){
        res.status(500).send(e);
    }
});
router.get("/one/:id",async(req,res)=>{
    try{
        const checkouts=await Checkout.findById(req.params.id)
        .lean()
        .exec();
        res.send(checkouts);
    }catch(e){
        res.status(500).send(e);
    }
});
router.post("",async(req,res)=>{
try{
    const checkouts=await Checkout.create(req.body);
    res.send(checkouts);
}catch(e){
    res.status(500).send(e);
}
});
router.patch("/:id",async(req,res)=>{
try{
    const checkouts=await Checkout.findByIdAndUpdate(re.params.id,req.body,{
        new:true
    }).lean().exec();
    res.send(checkouts);
}
catch{
    res.status(500).send(e);
}
})
router.delete("/id",async(req,res)=>{
    try{
        const checkouts= await Checkout.findByIdAndDelete(raq.params.id).lean().exec();
    }catch(e){
        res.status(500).send(e);
    }
});

module.exports=router;