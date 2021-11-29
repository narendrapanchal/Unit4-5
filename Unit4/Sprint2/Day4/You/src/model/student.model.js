const mongoose=require("mongoose");
const studentSchema=mongoose.Schema({
    roll_id:{type:Number,required:true},
    batch:{type:String,required:true},
    score:{type:Number,required:false},
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
        unique:true
    },
    evaluation_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"evaluation",
        required:true,
        unique:true
    }
},{
    
        versionKey: false,
        timestamps: true,
      
});
module.exports= mongoose.model("student",studentSchema);