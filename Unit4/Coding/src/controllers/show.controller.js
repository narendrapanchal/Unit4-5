const express= require("express");
let router=express.Router();
let authenticate=require("../middlewares/authenticate");
let Show=require("../models/show.model");
router.post=("/",authenticate,async(req,res)=>{
    try{
        const user=req.user;
        const posts=await Show.create({
            timing:req.body.timing,
            movie_Id:req.body.movie_Id,
            total_seats:req.body.total_seats,
            screen_Id=req.body.screen_Id
        })
        res.status(200).send(posts);
    }catch(e){
        res.status(500).send({error:e});
    }
})
router.get=("/",authenticate,async(req,res)=>{
    try{
        const user=req.user;
        const posts=await Show.find().lean().exec();
        res.send(posts);
    }catch(e){
        res.status(500).send({error:e});
    }
})


router.get=("/get_all_shows_for_a_particular_movie",authenticate,async(req,res)=>{
    try{
        const user=req.user;

        const posts=await Show.find({movie_Id:req.body.movie_Id}).lean().exec();
        res.send(posts);
    }catch(e){
        res.status(500).send({error:e});
    }
})
router.get=("/get_seats",authenticate,async(req,res)=>{
    try{
        const user=req.user;

        const posts=await Show.findById(req.body.id).lean().exec();
        res.send(posts.total_seats);
    }catch(e){
        res.status(500).send({error:e});
    }
})
module.exports=router;