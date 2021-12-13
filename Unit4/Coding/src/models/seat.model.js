const {Schema, model}=require("mongoose");
const seat=new Schema({
    show_Id:{
        type:Schema.Types.ObjectId,
        ref:"show",
        required:true,
    }
},{
    versionKey:false,
    timestamps:true
})
module.exports=model("seat",seat);