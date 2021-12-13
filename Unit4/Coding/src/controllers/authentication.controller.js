require("dotenv").config();
const jwt=require("jsonwebtoken");
const User=require("../models/user.model");
const {validationResult}=require("express-validator");
const newToken=(user)=>{
    return jwt.sign({user:user},process.env.JWT_ACCESS_KEY);
};
const register=async(req,res)=>{
    try{
        const errors=validationResult(req);
        if(!errors.isEmpty())
        return res.status(400).json({errors:errors.array()});
        let user=await User.findOne({email:req.body.email}).lean().exec();

        if(user)
        return res.status(400).json({
            status:"Failed",
            message:"Please provide diffient email"
        })
        user =await User.create(req.body);
        res.status({user,token});
        }catch(e){
            return res.status(500).json({status:"Failed",message:e.message});
    };
}
    const login=async(req,res)=>{
        try{
            const errors=validationResult(req);
            if(!errors.isEmpty())
            return res.status(400).json({errors:errors.array()});
            let user=await User.findOne({email:req.body.email}).lean().exec();
            if(!user){
                return res.status(400).json({
                    status:"Failed",
                    message:"Please provide correct email and password"
                });                
            }
            const match=await user.checkPassword(req.body.password);
            if(!match){
                return res.status(400).json({
                    status:"Failed",
                    message:"Please Provide correct email and password"
                })
            }
            const token=newToken(user);
            res.status(201).json({user,token});
        }catch(e){
            return res.status(500).json({status:"Failed",message:e.message});
        }
    }

module.exports={register,login};