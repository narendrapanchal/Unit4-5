import { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import {loadData,saveData} from "../localData";
import "./Payment.css"
export const Payment = () => {
   const Navigate=useNavigate();
   return (<div>
       <div id="signup">
   <form onSubmit={(e)=>{
       let data=loadData("order");
       let cartData=loadData("cart");
       if(data==null)
       saveData("order",[cartData])
       else        saveData("order",[...data,cartData[0]]);
    //    console.log("Narendra")
       Navigate("/order");
   }} id="signup-form">
<input type="text" id="name" placeholder="Name"></input>
      <br />
  <input type="number"  placeholder="Account Number"></input>
  <br/>
  <input type="text" id="number" placeholder="CVV"></input>
     <br />
<input type="number" id="mobile" placeholder="Mobile"></input>
        <br />
       <input id="type-submit" type="submit"></input>
   </form>
</div>
   </div>)
}