const {Schema, model}=require("mongoose");
const movieSchema=new Schema({
    name:{type:String,required:true},
    actors:[{type:String,required:true}],
    languages:[{type:String,required:true}],
    directors:[{type:URL,required:true}],
    poster_url:{type:URL,required:true}
},{
    versionKey:false,
    timestamps:true
})
module.exports=model("movie",movieSchema);