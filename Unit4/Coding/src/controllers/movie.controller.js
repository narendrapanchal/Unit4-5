const express= require("express");
let router=express.Router();
let authenticate=require("../middlewares/authenticate");
let Movie=require("../models/movie.model");
router.post=("/",authenticate,async(req,res)=>{
    try{
        const user=req.user;
        const posts=await Movie.create({
            name:req.body.name,
            actors:req.body.actors,
            languages:req.body.languages,
            directors:req.body.directors,
            poster_url:req.body.poster_url,
        })
    }catch(e){
        res.status(500).send({error:e});
    }
})
router.get=("/",authenticate,async(req,res)=>{
    try{
        const user=req.user;
        const posts=await Movie.find().lean().exec();
    }catch(e){
        res.status(500).send({error:e});
    }
})

module.exports=router;