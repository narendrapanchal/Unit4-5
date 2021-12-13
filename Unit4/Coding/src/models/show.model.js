const {Schema, model}=require("mongoose");
const showSchema=new Schema({
    timing:{type:String,required:true},
    movie_Id:{
        type:Schema.Types.ObjectId,
        ref:"movie",
        required:true,
    },
    total_seat:{type:Number},
    screen_Id:{ type:Schema.Types.ObjectId,
        ref:"screen",
        required:true,
    }
},{
    versionKey:false,
    timestamps:true
})
module.exports=model("show",showSchema);