import { useEffect, useState } from "react"
import {Form} from "./Form";
export const Recepie=()=>{
    const [list,setList]=useState([]);
    const [page,setPage]=useState(1);
    useEffect(()=>{
        makeList();
    })
   const  handleList=(oneData)=>{
   fetch("http://localhost:3001/recepie",{
       method:"POST",
       body:JSON.stringify(oneData),
       headers:{
           "content-type":"application/json"
       }
   }
   )
   }
   const makeList=()=>{
       fetch(`http://localhost:3001/recepie?_page=${page}&_limit=3`)
       .then(res=>res.json())
       .then ((res)=>{
           setList(res);
       })
   }
    return (
        <div>
            <Form getData={handleList}></Form>
            {list.map((e)=>(
                <div>
                    <h1>e.title</h1>
                    <h3>e.time</h3>
                </div>
            ))

            }
        </div>
    )
}