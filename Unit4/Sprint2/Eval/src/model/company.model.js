const mongoose=require("mongoose");
const companySchema=mongoose.Schema({
    company_name:{type:String,required:true,unique:true},
    company_datails:{type:String, required:true},
    job_ids:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"job",
        required:true,
    }]
})
module.exports= mongoose.model("companies",companySchema);