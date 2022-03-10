import "./Body.css"
import jsondata from "../data.json";
import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import cycle from "./cycle.png";
import queryString from "query-string"
export const Body=()=>{
    const queryParams = queryString.parse(window.location.search);
    const Navigate=useNavigate();
    const [data,setData]=useState(jsondata);
    useEffect(()=>{
        var temp=data;
        console.log(temp);
        console.log(queryParams,"query");
      if(Object.keys(queryParams).length!=0){
        if(queryParams.radius!="null"){
            console.log(temp,"hi");
            temp=temp.filter((ele)=>{
                if(ele.distance<=queryParams.radius) return ele;
            })
        }
        console.log(temp);
        if(queryParams.rating!="null"){
            temp=temp.filter((ele)=>{
                if(ele.rating<=+queryParams.rating) return ele;
            })
        }
        console.log(temp);
        if(queryParams.onlinePayment!="null"){
            temp=temp.filter((ele)=>{
                if(queryParams.onlinePayment=="false") {
                    if(queryParams.onlinePayment==false){
                        return ele;
                    }
                }
                if(queryParams.onlinePayment=="true") {
                    if(queryParams.onlinePayment==true){
                        return ele;
                    }
                }
            })
        }
        console.log(temp);
        if(queryParams.discount!="null"){
            temp=temp.filter((ele)=>{
                if(ele.discount>=+queryParams.discount) return ele;
            })
        }
      }
        console.log(temp);
        setData(temp)
     },[]);
    return (
        <div>
         <div id="logoimage">
           <div id="welcome">WELCOME TO PU<span>N</span>CT<span>U</span>RE<span>D</span></div>
             <img id="welcomeimage" src={cycle} alt="hi" />
         </div>
         <div id="filters"><div onClick={()=>{
             Navigate("/filter")
         }}><b>Filters</b></div></div>
         <div className="data">
             {data.map((ele)=>{
             return  <div onClick={()=>{
                 Navigate(`/shop?shop=${ele.name}`)
             }}>
                     <h1>{ele.name}</h1>
                 <img src={ele.image} alt="" />
                 <div> 
                     <div><b>Ratings {ele.rating}<ion-icon name="star"></ion-icon></b></div>
                     <div><b>Flat {ele.discount}% OFF</b></div>
                 </div>
               </div>

             })}
             {data.length?"":<div><b>No data Available</b></div>}
         </div>
        </div>
    )
}