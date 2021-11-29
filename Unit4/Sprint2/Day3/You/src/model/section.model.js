const mongoose=require("mongoose");
let sectionSchema=mongoose.Schema({
        section_name:{type:String,require:true,unique:true},
},{
    versionKey:false,
    timestamps:true
}

);

module.exports=mongoose.model("section",sectionSchema);