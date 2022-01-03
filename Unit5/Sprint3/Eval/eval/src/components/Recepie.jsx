import { useEffect, useState } from "react"
import {Form} from "./Form";
import { Div } from "./Items";

import '../App.css';
export const Recepie=()=>{
    const [order,setOrder]=useState([])
    const [list,setList]=useState([]);
    const [page,setPage]=useState(1);
    useEffect(()=>{
        makeList();
    },[]);
    useEffect(()=>{
        makeList();
    },[page,list]);
   const  handleList=(oneData)=>{
       console.log(oneData)
   fetch("http://localhost:3001/recepie",{
       method:"POST",
       body:JSON.stringify(oneData),
       headers:{
           "content-type":"application/json"
       }
   }
   )
   makeList();
   }
   const makeList=()=>{
       fetch(`http://localhost:3001/recepie?_page=${page}`)
       .then(res=>res.json())
       .then ((res)=>{
           setList(res);
       })
   }
   const showData=(obj)=>{
   
       let temp=[];
      let  { title,ingrediants,time,image,instructions}=obj;
      temp.push(title) 
      temp.push(ingrediants) 
      temp.push(time) 
      temp.push(image) 
      temp.push(instructions) 
      console.log(temp)
      setOrder([...temp]);
   }
   
    return (
        <div>
            <div className="App">
            <Form className="Formargin" getData={handleList}></Form>
           <div> {list.map((e,i)=>(
                <div  onClick={()=>{
                    showData(e);
                }}>
                    <div key={i} >
                    <h1 > Title {e.title}</h1>
                    <h3  >Time {e.time} sec.</h3>
                    </div>
                </div>
            ))

            }
            </div>

            </div >
            <div className="Centrue">
                {  order.map((e)=>(
                    <h1>{e}</h1>
                    
                    ))}
            </div>

        </div>
    )
}