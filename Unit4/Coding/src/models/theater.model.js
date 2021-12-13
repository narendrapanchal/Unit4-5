const {Schema, model}=require("mongoose");
const locationSchema=new Schema({
    name:{type:String,required:true},
    location:{type:String,required:true}
    
},{
    versionKey:false,
    timestamps:true
})
module.exports=model("theater",locationSchema);