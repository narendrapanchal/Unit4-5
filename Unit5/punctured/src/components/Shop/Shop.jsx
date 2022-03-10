import "./Shop.css";
import {useNavigate} from "react-router-dom";
import queryString from "query-string"
import jsondata from "../data.json";
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
    </div>)
}