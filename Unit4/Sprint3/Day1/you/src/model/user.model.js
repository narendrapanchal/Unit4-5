const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    first_name:{type:String,required:true},
    last_name:{type:String,required:true},
    email_name:{type:String,required:true,unique:true}
},{
    versionKey:false,
    timestamps:false
});
module.exports= mongoose.model("user",userSchema);
