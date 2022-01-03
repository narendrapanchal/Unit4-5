import {Input} from "./Input"
import { useEffect, useState } from "react";
export const Form=()=>{
    let temp;
    let [start,setStart]=useState(1);
    let [end,setEnd]=useState(7);
    useEffect(()=>{
        
        const id=setInterval(()=>{
            // if(temp)
            // clearInterval(id);
            setStart((prev)=>
           {
            console.log(prev)
               if(prev>=end){
                   clearInterval(id);
                   return prev
               }else{
                   return prev+=1;
               }
           
           }
       );
        

       },1000);
    
       return ()=>{
       console.log("Hi Unmouted");
       clearInterval(id);
       }
    },[])
    const handleData=(first)=>{
        temp=first;
        setStart((prev)=>{
            prev=+first.start;
            return prev;
        });
        setEnd((pre)=>{
            pre=+first.end;
            return pre;
        })
   console.log(start,end);
   const id=setInterval(()=>{
            
    setStart((prev)=>
   {
    console.log(prev)
       if(prev>=end){
           clearInterval(id);
           return prev
       }else{
           return prev+=1;
       }
   
   }

);


},1000);
    }
    return (
        <div>   
            <h2>count {start}</h2> 
            <Input getData={handleData}></Input>
        </div>
    )
}