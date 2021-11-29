const express=require("express");
const Book=require("../model/book.model");
const Author=require("../model/author.model");
const Section=require("../model/section.model");
const Checkout=require("../model/checkout.model");
const router=express.Router();

router.get("/author_sectioin/:author/:section",async(req,res)=>{
    try{
        let authors=await Author.find({author_name:req.params.author}).lean().exec();
        let sections=await Section.find({section_name:req.params.section}).lean().exec();
        let checkouts=await Checkout.find().lean().exec();
      if(sections.length&&authors.length){
        let findid=sections[0]._id.toString();
        let findAuthid=authors[0]._id.toString();
        let books=await Book.find({section_id:findid}).lean().exec();
        let desirebooks=[];
       books.forEach((ele)=>{
         let eleid=ele.author_id;
         let check=false;
         eleid.forEach((each)=>{
             let eachid=each.toString();
             console.log(eachid,findAuthid);
             if(eachid==findAuthid){
                 check=true;
             }
         })
         if(check)
         desirebooks.push(ele.book_name);
       })
       res.send(desirebooks);

      }else res.send([]);
    }catch(e){
        res.status(500).send(e);
    }
});

router.get("/checkout/:section",async(req,res)=>{
    try{
        let sections=await Section.find({section_name:req.params.section}).lean().exec();
        let checkouts=await Checkout.find().lean().exec();

      if(sections.length){
        let findid=sections[0]._id;
        let books=await Book.find({section_id:findid}).lean().exec();
        let desirebooks=[];
       books.forEach((ele)=>{
         let eleid=ele._id.toString();
         let check=true;
         checkouts.forEach((each)=>{
             let eachid=each.book_id.toString();
             if(eachid==eleid){
                 check=false;
             }
         })
         if(check)
         desirebooks.push(ele.book_name);
       })
       res.send(desirebooks);

      }else res.send([]);
    }catch(e){
        res.status(500).send(e);
    }
});

router.get("/author/:name",async(req,res)=>{
    try{
        let authors=await Author.find({author_name:req.params.name}).lean().exec();
        let books=await Book.find().lean().exec();
        let obj={};
      if(authors.length){
        let findid=authors[0]._id;
        let booksByAuth=books.map((book)=>{
            let temparr=book.author_id;
            temparr.forEach((ele)=>{
                ele=ele.toString();
                if(ele==findid){
                    obj[book.book_name]=1;
                }
            })
        })
        res.send(Object.keys(obj));
      }else res.send([]);
    }catch(e){
        res.status(500).send(e);
    }
});
router.get("/section/:name",async(req,res)=>{
    try{
        const books=await Book.find();
         let data= books.map(async(temp)=>{
             let tempsection=await Section.findById(temp.section_id);
             if(tempsection.section_name==req.params.name){
              return temp.book_name;
             }
         })
         Promise.all(data).then(temp=>{
           let out=[];
           for(let i=0;i<temp.length;i++){
               if(temp[i]!=null){
                   out.push(temp[i]);
               }
           }
           res.send(out);
        })

    }catch(e){
        res.status(500).send(e);
    }
});
router.get("",async(req,res)=>{
    try{
        const books=await Book.find().
        populate("section_id").
        populate("author_id")
        .lean().exec();
        res.send(books);
    }catch(e){
        res.status(500).send(e);
    }
});
router.get("/:id",async(req,res)=>{
    try{
        const books=await Book.findById(req.params.id)
        .lean()
        .exec();
        res.send(books);
    }catch(e){
        res.status(500).send(e);
    }
});
router.post("",async(req,res)=>{
try{
    const books=await Book.create(req.body);
    res.send(books);
}catch(e){
    res.status(500).send(e);
}
});
router.patch("/:id",async(req,res)=>{
try{
    const books=await Book.findByIdAndUpdate(req.params.id,req.body,{
        new:true
    }).lean().exec();

    res.send(books);
}
catch(e){
    res.status(500).send(e);
}
})
router.delete("/id",async(req,res)=>{
    try{
        const books=await Book.findByIdAndDelete(raq.params.id).lean().exec();
    }catch(e){
        res.status(500).send(e);
    }
});

module.exports=router;