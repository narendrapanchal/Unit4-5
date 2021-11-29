const mongoose=require("mongoose");
let checkoutSchema=mongoose.Schema({
        user_name:{type:String,require:true},
        book_id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"book",
            required:true,
            unique:true
        }
},{
    versionKey:false,
    timestamps:true
}

);

module.exports=mongoose.model("checkout",checkoutSchema);