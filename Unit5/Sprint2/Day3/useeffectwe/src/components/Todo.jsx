import { useEffect, useState } from "react"

export const Todo=()=>{
    const [text,setText]=useState("");
    const [todo,setTodo]=useState([]);
    const [page,setPage]=useState(1);
    useEffect(()=>{
        getTodo()
        },[])
    useEffect(()=>{
    getTodo()
    },[page])
    const getTodo=()=>{
        fetch(`http://localhost:3001/todo?_page=${page}&_limit=3`)
        .then((res)=>res.json())
        .then((res)=>{
            setTodo(res);
         
        })
        console.log(todo)
    }
    const addTodo=()=>{
        const payload={
            title:text,
            status:false
        };
       
        fetch("http://localhost:3001/todo",{
            method:"POST",
            body:JSON.stringify(payload),
            headers:{
                "content-type":"application/json",
            }
        })
            getTodo();
    }
    return(
        <div>
            <input
             type="text"
              value={text} 
              onChange={(e)=> setText(e.target.value)}
               placeholder="Enter Todo" />
                 
            <button 
            onClick={addTodo} 
           
            >Add todo</button>
            {
                todo.map((e,i)=>
                
                   ( <div key={i}> {e.title}</div>)
                )
            }
            <button disabled={page==1} onClick={()=>{setPage(page-1)}}>Prev</button>
            <button disabled={todo.length==0} onClick={()=>{setPage(page+1)}}>Next</button>
        </div>
    )
}
// https://reactwithhooks.netlify.app/
// json-server db.json --port 3001 --watch
