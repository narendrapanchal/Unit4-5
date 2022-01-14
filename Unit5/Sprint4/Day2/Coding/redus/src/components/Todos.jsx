import { useState, useEffect } from "react"
import {Total} from "./Total"
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import { addTodoLoading,addTodoError,addTodoSuccess,getTodoError,getTodoLoading,getTodoSuccess } from "../store/action";

export const Todos=()=>{
    const [text,setText] = useState("");
    const [completed,setComplted]=useState(0);
    const dispatch=useDispatch();
    const {loading,todos,error}=useSelector((state)=>({
        loading:state.loading,
        todos:state.todos,
        error:state.error
    }));
    useEffect(()=>{
        apidata();
        },[]);
    async function apidata(){
        try{
            dispatch(getTodoLoading());
                const data=await fetch('http://localhost:3001/todos').then(e=>e.json())
                dispatch(getTodoSuccess(data));
                let temp=0;
                data.forEach((e)=>{
                    if(e.status==true)
                    temp++;
                })
                setComplted(temp);
              }
        catch(err){
            dispatch(getTodoError());
        }
        
        }
    return ( loading? <div> ...loading</div>:error?<div> Something went wrong</div>:
        <div><Total></Total>
        <div>Todo total {todos.length} completed {completed}</div>
       
        <input type="text" name="" id="" onChange={(e)=>{
            setText(e.target.value)
        }} ></input>
        <button onClick={()=>{
            dispatch(addTodoLoading());
            fetch("http://localhost:3001/todos",{
                method:"POST",
                body:JSON.stringify({status:false,title:text}),
                headers:{
                    "Content-Type":"application/json"
                }
            })
            .then((data)=>data.json())
            .then((data)=>{
                dispatch(addTodoSuccess(data));
                apidata();
            })
            .catch((e)=>{
            console.log(e)
                dispatch(addTodoError(e));
            })

        }}>Addo Todo</button>
        {
            todos.map(({status,title,id})=>(
                <div key={id}>
                 
                    <Link to={`/todos/${id}`}  style={{margin:"10px",textDecoration:"none",color:"black"}}>{title}</Link>
                    <br />
                    <button onClick={()=>{
                          
                          fetch(`http://localhost:3001/todos/${id}`,{
                              method:"DELETE",
                              headers:{
                                  "Content-Type":"application/json"
                              }
                          })
                          .then((data)=>data.json())
                          .then((data)=>{
                           
                              apidata();
                          })
                          .catch((e)=>{
                          console.log(e)
                              dispatch(addTodoError(e));
                          })
                    }}>Delete</button>
                    <button onClick={()=>{
                        if(!status){
            dispatch(addTodoLoading());
            fetch(`http://localhost:3001/todos/${id}`,{
                method:"PATCH",
                body:JSON.stringify({status:true}),
                headers:{
                    "Content-Type":"application/json"
                }
            })
            .then((data)=>data.json())
            .then((data)=>{
                dispatch(addTodoSuccess(data));
                apidata();
            })
            .catch((e)=>{
            console.log(e)
                dispatch(addTodoError(e));
            })
        }
        }}>{status? "completed":"complete"}</button>
                    <Link to={`/todos/${id}/edit`}  style={{margin:"10px"}}>Edit</Link>
                    <br />
                    <br />
                </div>
            ))
        }
        </div>
    )
}