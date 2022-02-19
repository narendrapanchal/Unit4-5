const mongoose=require("mongoose");
const teacherSchema=mongoose.Schema({
    name:{type:String,required:true,unique:true},
    gender:{type:String,required:true},
    age:{type:Number,required:true},
    classes:[{type:mongoose.Schema.Types.ObjectId,
      ref:"class",
      required:true,
      unique:true}]
}, {
    versionKey: false,
    timestamps: true,
  });
module.exports= mongoose.model("teacher",teacherSchema);