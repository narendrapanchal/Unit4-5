const {Schema,model}=require("mongoose");

const gallerySchema=new Schema({
    picture:[{type:String,required:true}],
    userId:{
        type: Schema.Types.ObjectId,
        ref:"user",
        required:true,
        unique:true
    }
},{
    versionKey:false,
    timestamps:true
})
module.exports=model("gallery",gallerySchema);