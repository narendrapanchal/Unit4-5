import "./Cart.css";
import "../Body/Body.css";
import { loadData } from "../localData";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
export const Cart=()=>{
    const [data,setData]=useState(loadData("cart"));
    console.log(loadData)
    const Navigate=useNavigate()
   return (<div>
    
    <div className="data">
        {data.map((ele)=>{
        return  <div onClick={()=>{
          
        }}>
                <h1>{ele.name}</h1>
            <img src={ele.image} alt="" />
            <div> 
                <div><b>Ratings {ele.rating}<ion-icon name="star"></ion-icon></b></div>
                <div><b>Flat {ele.discount}% OFF</b></div>
            </div>
          </div>

        })}
        {data.length?"":<div><b>No data Found</b></div>}
    </div>
    <button onClick={()=>{
        Navigate("checkout")
    }}>Checkout</button>
   </div>)
}