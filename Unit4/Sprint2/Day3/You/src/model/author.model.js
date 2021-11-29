const mongoose=require("mongoose");
let authorSchema=mongoose.Schema({
        author_name:{type:String,require:true,unique:true}
},{
    versionKey:false,
    timestamps:true
}
);

module.exports=mongoose.model("author",authorSchema);