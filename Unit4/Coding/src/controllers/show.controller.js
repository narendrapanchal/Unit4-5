const express= require("express");
let router=express.Router();
let authenticate=require("../middlewares/authenticate");
let Movie=require("../models/movie.model");
let Show=require("../models/show.model");

router.post=("/location/",authenticate,async(req,res)=>{
    try{
        const user=req.user;
        const movies=await Movie.find().lean().exec();
        const shows=await Show.findById(req.body.id).lean().exec();
        let nearestmovie=[];
        movies.forEach((ele)=>{
            if(ele.location==req.body.location)
            nearestmovie.push(ele);
        })
        let desire=[];
        nearestmovie.forEach((ele)=>{
            shows.forEach((showele)=>{
                if(ele._id.toString()==showele.movie_Id.toString()){
                    if(showele.total_seats>=req.body.seat)
                    desire.push(showele);
                }
            })
        })
        res.send(desire);
    }catch(e){
        res.status(500).send({error:e});
    }
})


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
});



router.post=("/seat",authenticate,async(req,res)=>{
    try{
        const user=req.user;
        const posts=await Show.findById(req.body.id).lean().exec();
        if(req.body.seat<=posts.total_seats){
            res.status(200).send(posts);
        }else
        res.status(200).send("Not enough seats");
    }catch(e){
        res.status(500).send({error:e});
    }
})
module.exports=router;