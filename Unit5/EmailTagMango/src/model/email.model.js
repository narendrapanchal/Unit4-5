const mongoose=require("mongoose");
const emailSchema=mongoose.Schema({
    email:{type:String,required:true},
    time:{type:String,required:true},
    subject:{type:String,required:true},
    body:{type:String,required:true}
}, {
    versionKey: false,
  });
module.exports= mongoose.model("email",emailSchema);