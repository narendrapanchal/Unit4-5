import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { dataAction } from "../reducers/action";
export const JobList=()=>{
    const dispatch=useDispatch();
    const {data} =useSelector((state)=>({data:state.data}))
   useEffect(()=>{
showData();
   },[]);
   
   async function showData(){ 
      try{
        let temp=await fetch("http://localhost:3001/joblist").then((temp)=>temp.json())
        dispatch(dataAction(temp))
        console.log(temp)
        
      }catch(e){
          console.log(e);
      }
}
    return (<div>
        {data.length?data.map((element)=>
            <h1 key={element.id}> Required {element.title}  <button onClick={()=>{
                fetch("http://localhost:3001/applied",{
                method:"POST",
                body:JSON.stringify(element),
                headers:{
                    "Content-Type":"application/json"
                }
            }).catch((e)=>{
                console.log(e);
            })
            }}>Apply</button> </h1>
        ) :<h1>No Data Found</h1>
        }
    </div>
    )
}