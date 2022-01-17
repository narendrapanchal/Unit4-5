import { useEffect, useState } from "react"
export const AppliedList=()=>{
    let [data,setData]=useState([]);
   useEffect(()=>{
showData();
   },[]);
   
   async function showData(){ 
      try{
        let data=await fetch("http://localhost:3001/applied").then((temp)=>temp.json())
        setData(data);
        console.log(data)
        
      }catch(e){
          console.log(e);
      }
}
    return (<div>
        {data.length?data.map((element)=>
            <h1 key={element.id}> Required {element.title}   </h1>
        ) :<h1>No Data Found</h1>
        }
    </div>
    )
}