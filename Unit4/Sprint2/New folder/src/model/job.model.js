const mongoose=require("mongoose");
const jobSchema=mongoose.Schema({
    job_name:{type:String,required:true,unique:true},
    skill:{type:String, required:true},
    work_from_home:{type:Number,required:true},
    notice_period_month:{type:Number,required:true},
    job_rating:{type:Number,required:true},
    city:{type:String,required:true}
},{
    versionKey:false,
    timestamps:true
})
module.exports= mongoose.model("job",jobSchema);