const express=require("express");
const app=express();
app.use(express.json());
const connect=require("../src/configs/db");
const sectionController=require("../src/controller/section.controller");
const checkoutController=require("../src/controller/checkout.controller");
const bookController=require("../src/controller/book.controller");
const authorController=require("../src/controller/author.controller");

app.use("/sections",sectionController);
app.use("/checkouts",checkoutController);
app.use("/books",bookController);
app.use("/authors",authorController);

app.listen(12345,async()=>{
    await connect();
    console.log("listening 12345");
})