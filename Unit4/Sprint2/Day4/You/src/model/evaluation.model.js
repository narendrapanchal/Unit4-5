const mongoose=require("mongoose");
const evaluationSchema=mongoose.Schema({
    date:{type:String,required:true},
    topic_name:{type:String,required:true},
    instructor_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }

},{
    
        versionKey: false,
        timestamps: true,
      
});
module.exports= mongoose.model("evaluation",evaluationSchema);