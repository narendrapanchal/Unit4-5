const express=require("express");
const app=express();
const data=require("./data.json");
app.use(express.json());
const authorise=(persmission)=>{
    return (req,res,next)=>{
        req.body.name="Narendra";
        console.log(persmission);
        next();
    }
}


app.get('/', authorise("Narendra"),(req,res)=>{

    res.status(200).send([{requested_by:req.body.name},{books:data}]);
})

app.get('/books/:id', authorise("Narendra"),(req,res)=>{
    const newData=data.filter((user)=> user.id!==req.params.id);
    res.send({requested_by:req.body.name},{book:newData});
})


// const authorisepost=(persmission)=>{
   
//     return (req, res, next) => {
//         console.log("Panchal");
//         const originalSendFunc = res.send.bind(res);
//         res.send = function (body) {
//           body.name = "Nrupul Dev";
//           console.log("Narendra" , body);
//            // do whatever here
//           return originalSendFunc(body);
//         };
//         next();
// }
// }
// app.get('/', authorise(),  (req, res)=>{
//     res.send({requested: req.body.name, myname : "Ramdas"})
// })



const authorisepost = (permission) => {
    return (req, res, next) => {
    //   const originalSendFunc = res.send.bind(res);
    //   res.send = function (body) {
    //     body.name = permission;
    //     console.log(body); // do whatever here
    //     return originalSendFunc(body);
    //   };
    req.name=permission;
      next();
    };
  };
//   app.post('/', authorisepost(),  (req, res)=>{
//     res.send({requested: req.body.name, myname : "Ramdas"});
// })
// app.post('/', authorisepost(),  (req, res)=>{
//     res.send([...data, "Ramdas"])
// })

app.post("/books/",authorisepost("narendra"),(req,res)=>{
    let newData=[...data,{requested_by:req.name}];
    res.send(newData);
});

app.patch("/:id",(req,res,next)=>{
    let newData= data.map(user=>{
        if(req.params.id==user.id){
            if(req?.body?.email){
                user.email=req.body.email;
            }
            if(req?.body?.gender){
                user.gender=req.body.gender;
            }
            if(req?.body?.id){
                user.id=req.body.gender;
            }
            if(req?.body?.first_name){
                user.first_name=req.body.first_name;
            }
            return user;
        }
       return
    })
    res.send(newData)
})

app.put("/:email",(req,res,next)=>{
    let newData= data.map(user=>{
        if(req.params.email==user.email){
           user=req.body;
        }
        return user;
    })
    res.send(newData)
})

    app.delete("/books/:id",(req,res)=>{
        const newData=data.filter((user)=> user.id!==req.params.id);
        res.send(newData);
    })


app.listen(1234,()=>{
    console.log("running 123 port");
})


/**const authorise = (permission) => {
  return (req, res, next) => {
    const originalSendFunc = res.send.bind(res);
    res.send = function (body) {
      body.name = "Nrupul Dev";
      console.log(body); // do whatever here
      return originalSendFunc(body);
    };
    next();
  };
};

*/