import {Input} from "./Input"
import { useEffect, useRef, useState } from "react";
export const Form=()=>{
    let temp;
    let [start,setStart]=useState(0);
    let [end,setEnd]=useState(0);
    let id=useRef();
    let [bool,setBool]=useState(false);
    useEffect(()=>{
        if(id.current==null){
         id.current=setInterval(()=>{
            // if(temp)
            // clearInterval(id);
            setStart((prev)=>
             {
            console.log(prev)
               if(prev>=end){
                   clearInterval(id.current);
                   id.current=null
                   return prev
                 }else{
                   return prev+=1;
               }
            
            }
       );

       },1000);
    }
    
       return ()=>{
       console.log("Hi Unmouted");
       clearInterval(id.current);
       id.current=null
       }
    },[bool])

  
    return (
        <div>   
            <h2>count {start}</h2> 
            <input type="number" onChange={(e)=>{
                setStart((prev)=>{
                    prev=+e.target.value
                    return prev}) }} name="" id="" ></input>
                     <input type="number" onChange={(e)=>{
                setEnd((prev)=>{
                    prev=+e.target.value
                    return prev}) }} name="" id="" ></input>
                    <button onClick={()=>{setBool(prev=> !prev)}}>Apply</button>
        </div>
    )
}