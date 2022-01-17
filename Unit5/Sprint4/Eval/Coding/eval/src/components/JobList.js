import { useState } from "react"

export const JobList=()=>{
    let [data,setData]=useState([]);
    fetch("http://localhost:30001/joblist").then((temp)=>temp.json()).then((temp)=>{
        setData(temp);
    }).catch((e)=>{
        console.log(e);
    })
    return (<div>
        {data.length?data.map(({title,id})=>{
            <h1 key={id}> Required {title} </h1>
        }) :<h1>No Data Found</h1>
    }
    </div>)
}