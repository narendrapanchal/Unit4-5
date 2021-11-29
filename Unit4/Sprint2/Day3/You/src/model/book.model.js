const mongoose=require("mongoose");
let bookSchema=mongoose.Schema({
        book_name:{type:String,require:true,unique:true},
        body:{type:String,required:true},
        section_id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"section",
            required:true
        },
        author_id:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"author",
            required:true,
        }]

},{
    versionKey:false,
    timestamps:true
}

);

module.exports=mongoose.model("book",bookSchema);