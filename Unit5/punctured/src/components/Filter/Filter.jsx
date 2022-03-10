import "./Filter.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useEffect} from "react";

export const Filter=()=>{
    
    const Navigate=useNavigate()
    const [rating,setRating]=useState(null);
    let [discount,setDiscount]=useState(null);
    let [radius,setRadius]=useState(null);
    let [onlinePayment,setOnlinePayment]=useState(null);
    function giveratings(num){
        let ratings=document.querySelectorAll("#ratings > ion-icon");
                for(let i=0;i<5;i++){
                    if(i<=num){
                        ratings[i].name="star";
                    }else{
                        ratings.name="star-outline";
                    }
                }
                setRating(num+1);
    }
   
    return (<div id ="allfilter">
        <div> Filter by Minimum Ratings
            <div id="ratings"><ion-icon name="star-outline" onClick={()=>{
                giveratings(0);
            }}></ion-icon><ion-icon name="star-outline" onClick={()=>{
                giveratings(1);
            }}></ion-icon><ion-icon name="star-outline" onClick={(e)=>{
                giveratings(2);
            }}></ion-icon><ion-icon name="star-outline" onClick={(e)=>{
                giveratings(3);
            }}></ion-icon><ion-icon name="star-outline" onClick={(e)=>{
                giveratings(4);
            }}></ion-icon></div>
        </div>
        <br />
        <div>
             Filter by Radius Distance
            <br />
            <input type="range" id="points" name="points" min="0" max="20" onChange={(e)=>{
                document.getElementById("distancerange").textContent=e.target.value;
                setRadius(e.target.value);
                
            }}></input>
             <span id="distancerange">20</span>km
        </div>
        <br />
        <div>
            Online Payment Availaility
            <input type="checkbox" onChange={()=>{
                setOnlinePayment((prev)=>prev==false?true:false);
            }}/>
        </div>
        <br />
        <div>
           Minumum Discounts
            <label for="points">Filter by discount:</label>
            <br />
            <input type="range"  name="points" min="0" onChange={(e)=>{
             document.getElementById("discountrange").textContent=e.target.value;
             setDiscount(+e.target.value);
          }} max="25"/>
             <span id="discountrange">0</span>%
        </div>
        <button onClick={()=>{
            console.log(`?rating=${rating}&discount=${discount}&radius=${radius}&onlinePayment=${onlinePayment}`);
            Navigate(`/?rating=${rating}&discount=${discount}&radius=${radius}&onlinePayment=${onlinePayment}`)
        }}>Apply</button>
    </div>)
}