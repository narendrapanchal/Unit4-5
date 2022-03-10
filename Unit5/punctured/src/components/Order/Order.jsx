import "../Body/Body.css";
import {loadData} from "../localData";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
export const Order=()=>{
    const [data,setData]=useState(loadData("order"));
    // let temp=data.filter((ele)=>{
    //     if(ele.name!=null) return ele
    // })
    // setData(temp)
    const Navigate =useNavigate();
    return (<div className="data">
    {data.map((ele)=>(
      <div>
            <h1>{ele.name}</h1>
        <img src={ele.image} alt="" />
        <div> 
            <div><b>Ratings {ele.rating}<ion-icon name="star"></ion-icon></b></div>
            <div><b>Flat {ele.discount}% OFF</b></div>
        </div>
      </div>

    ))}
    {data.length?"":<div><b>No data Available</b></div>}
</div>)
}