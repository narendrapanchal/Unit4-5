import { useEffect, useRef, useState } from "react"
import { Form } from "./Form";
export const Todo=()=>{
    const [todo,setTodo]=useState([]);
    const check=useRef(false);
    const [page,setPage]=useState(1);// useRef  useEffect
    useEffect(()=>{
console.log("Secoind");
    })
    useEffect(()=>{
        getTodo()
        console.log("third");
        },[])
    useEffect(()=>{
    console.log("Fourth")
    },[page])
    const getTodo=()=>{
        fetch(`http://localhost:3001/users?_page=${page}&_limit=5`)
        .then((res)=>res.json())
        .then((res)=>{
            setTodo(res);
         
        })
        console.log(todo)
    }
    const changehappen=(payload)=>{
        console.log(payload,"payload")
        fetch("http://localhost:3001/users",{
            method:"POST",
            body:JSON.stringify(payload),
            headers:{
                "content-type":"application/json",
            }
        })
        console.log("mysecond")
            getTodo();
    }
    const  deletekaro =(id)=>{
        console.log(id)
         fetch(`http://localhost:3001/users/${id}`,{
    method: "DELETE",
    headers:{
        "Content-Type":"application/json"
    },
    })
    console.log("mysecond")
  
}
console.log("firsts")
    return(
        <div>
           
            <Form getData={changehappen} ></Form>
            {
                todo.map((e,i)=>
                   ( <div key={i}> {e.username} {e.id} <button onClick={async()=>{
                    let temp=  await deletekaro(e.id);
                       getTodo()

                   }}>Delete</button></div>)
                )
            }
            <button disabled={page==1} onClick={()=>{setPage(page-1)}}>Prev</button>
            <button disabled={todo.length==0} onClick={()=>{setPage(page+1)}}>Next</button>
        </div>
    )
}
// https://reactwithhooks.netlify.app/
// json-server db.json --port 3001 --watch
