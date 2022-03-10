import "./Shop.css";
import {useNavigate} from "react-router-dom";
import queryString from "query-string"
import jsondata from "../data.json";
import { saveData, loadData } from "../localData";
export const Shop=()=>{
    const Navigate=useNavigate();
    const queryParams = queryString.parse(window.location.search);
      let currentshop=jsondata.filter((ele)=>{
          if(ele.name==queryParams.shop) return ele;
      })
      currentshop=currentshop[0];
      console.log(currentshop);
    return (<div>
        <h3>{currentshop.name}</h3>
        <img src={currentshop.image} alt="" />
        <div id="dis_rat"> 
                     <h3><b>Ratings {currentshop.rating}<ion-icon name="star"></ion-icon></b></h3>
                     <h3><b>Flat {currentshop.discount}% OFF</b></h3>
                 </div>
        <div id="date_time">
            <span>Select Date and time</span> <input type="time" id="time" value="" 
            onChange={(e)=>{
                const date = (e.target.value);
                console.log(date);
                e.target=date;

            }}/>
            <input type="date" value="" id="date"
            onChange={(e)=>{
                const date = (e.target.value);
                console.log(date);
                e.target=date;
            }}/>
            <button onClick={()=>{
                //   Navigate(`/checkout?date=${date}&time=${time}&discount=${currentshop.discount}`);
                  saveData("cart",[currentshop]);
                  Navigate("/cart")
            }
            }>Add to Cart</button>
        </div>
    </div>)
}