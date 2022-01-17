import { useEffect, useState } from "react"
export const JobList=()=>{
    let [data,setData]=useState([]);
   useEffect(()=>{
showData();
   },[]);
   
   async function showData(){ 
      try{
        let data=await fetch("http://localhost:3001/joblist").then((temp)=>temp.json())
        setData(data);
        console.log(data)
        
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