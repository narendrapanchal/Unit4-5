const express=require("express");
const app=express();
const mongoose=require('mongoose');

/*
1 - connect to mongodb server --
2 -- creat a schema for our data 
3 -- craet a model from the schema
*/


//sep 1
const connect=()=>{
    return mongoose.connect("mongodb+srv://narendra1:narendra1@cluster0.fcwxv.mongodb.net/entertainment");
}

//step 2
const userSchema= new mongoose.Schema({
    movie_name : {type:String,required:true},
    movie_genre : {type:String},
    production_year : {type:Number,required:true},
    budget : {type:Number,required:true},
},
{
    versionKey:false,
    timestamps:true
}
)
//step 3
 const User=mongoose.model("movie",userSchema); // User.create() ==(true h) db.users.insert()
/*
users 
post = /users
get all=/users
get one = users/:id
update one =/users/:id
delete one=/users/:id
*/
app.use(express.json());


//1
app.get('/movies/equal_movie/:movie_name',async(req,res)=>{  //thenable
        const users=await User.find({movie_name: req.params.movie_name}).lean().exec();
        res.send({users});
})
//2
app.get('/movies/not_equal_movie/:movie_name',async(req,res)=>{  //thenable
    const users=await User.find({$not: {movie_name:req.params.movie_name}}).lean().exec();
    res.send({users});
})
//3
app.get('/movies/greater_equal_budget/:budget',async(req,res)=>{  //thenable
    const users=await User.find( {budget:{$gte:req.params.budget}}).lean().exec();
    res.send({users});
})
//4
app.get('/movies/less_equal_budget/:budget',async(req,res)=>{  //thenable
    const users=await User.find( {budget:{$lte:req.params.budget}}).lean().exec();
    res.send({users});
})

//5
app.get('/movies/after/:year/and_budget_greater/:budget',async(req,res)=>{  //thenable
    const users=await User.find({$and:[{budget:{$gt:req.params.budget}},{production_year:{$gt:req.params.year}}]}).lean().exec();
    res.send({users});
})
//6
app.get('/movies/after/:year/or_budget_greater/:budget',async(req,res)=>{  //thenable
    const users=await User.find({$or:[{budget:{$gt:req.params.budget}},{production_year:{$gt:req.params.year}}]}).sort({budget:1}).lean().exec();
    res.send({users});
})

//7
app.get('/movies/before/:year/and_budget_lesser/:budget',async(req,res)=>{  //thenable
    const users=await User.find({$and:[{budget:{$lte:req.params.budget}},{production_year:{$lte:req.params.year}}]}).sort({budget:1}).lean().exec();
    res.send({users});
})
//8
app.get('/movies/producedin/:year/or_budget_not/:budget',async(req,res)=>{  //thenable
    const users=await User.find({$or:[{budget:{$not:req.params.budget}},{production_year:{$not:req.params.year}}]}).sort({budget:1}).lean().exec();
    res.send({users});
})
//9
app.get('movies/from/:year1/:to/:year2',async(req,res)=>{
    const users=await User.find({$and:[{production_year:{$gte:req.params.year1}},{production_year:{$lte:req.params.year2}}]})
    res.send(users);
    
})
//10
app.get('/movies/sorted_reverse_productionyear_Movie_name/',async(req,res)=>{  //thenable
    const users=await User.find({}).sort({production_year:-1,movie_name:1}).lean().exec();
    res.send({users});
})
//11
app.get('/movies/sorted_reverse_productionyear_Movie_name_ski_ten_next_five/',async(req,res)=>{  //thenable
    const users=await User.find({}).sort({production_year:-1,movie_name:1}).skip(10).limit(5).lean().exec();
    res.send({users});
})

//12
app.get('/movies/sorted_reverse_productionyear_Movie_name_remove_first_ten/',async(req,res)=>{  //thenable
    let users=await User.find({}).sort({production_year:-1,movie_name:1}).limit(10).lean().exec(); 
  
    const deta= users.map(async(temp)=>{
       delete temp.movie_genre;
       let id=temp._id.toString();
       console.log("temp",temp);
     return await User.findOneAndReplace({_id:id},temp,{
            new: true,
        }); 
        /*
          const user=await User.findByIdAndUpdate(req.params.id,req.body,{
            new: true,
        });
        */

    })
    Promise.all(deta).then(datatemp=>{
        res.send({datatemp});
    })
    
})
/*
db.movies.find({"production_year": {$lt: 2020}}).limit(10).forEach(function(movie){db.movies.update({_id: movie._id}, {$unset:{"movie_genre": ""}})})
*/
app.get('/movies',async(req,res)=>{  //thenable
    let movies=await User.find({});
    res.send({movies});
})
app.get('/movies/:id',async(req,res)=>{  //thenable
    let movie=await User.findOne({_id:req.params.id});
    res.send({movie});
})


app.post("/movies/",async(req,res)=>{
try{
    const movie =await User.create(req.body);
    res.status(201).send(movie);
}
catch(e){
    res.status(500).json({status:e});
}
    
});

app.patch("/movies/:id",async(req,res,next)=>{
    try{
        //fetched -> updated -> don't fetch
        const user=await User.findByIdAndUpdate(req.params.id,req.body,{
            new: true,
        });
        
         return res.status(201).send(user);
    }catch(e){
        res.status(500).json({status:e});
    }
})

app.put("/movies/:id",async(req,res,next)=>{
    try{
        //fetched -> updated -> don't fetch
        const user=await User.findByIdAndUpdate(req.params.id,req.body,{
            new: true,
        })
    }
    catch(e){
        res.status(500).json({status:e});
    }
})

    app.delete("/movies/:id",async(req,res)=>{
  try{
    const user=await User.findByIdAndDelete(req.params.id).lean().exec();
   return  res.status(200).send(user);
  }
  catch(e){
    res.status(500).json({status:e});

  }
    })


app.listen(1234,async(req,res)=>{
    await connect();
    console.log("running 1234 port");
})