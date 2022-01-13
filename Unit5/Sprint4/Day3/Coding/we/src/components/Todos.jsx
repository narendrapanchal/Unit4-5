import { useState } from "react"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addTodoLoading,addTodoError,addTodoSuccess,getTodoError,getTodoLoading,getTodoSuccess } from "../feature/Todos/action";
import { useEffect } from "react";
export const Todos=()=>{
    const [text,setText] =useState("");
    const {loading,todos,error}=useSelector((state)=>({
        loading:state.todosState.loading,
        todos:state.todosState.todos,
        error:state.todosState.error
    }),function(prev,curr){
        if(prev.loading==curr.loading && prev.err==curr.error){
            return true
        }
        return false;
    });
    useEffect(()=>{
    apidata();
    },[])
    async function apidata(){
        try{
            dispatch(getTodoLoading());
           
                const data=await   fetch('http://localhost:3001/todos').then(e=>e.json())
                dispatch(getTodoSuccess(data));
        }
        catch(err){
            dispatch(getTodoError());
        }
        
        }
    const dispatch=useDispatch();
    return loading?<div>...Loading</div>:error?<div>Something went wrong</div> :<div>
        <input type="text" placeholder="Enter Todo" onChange={(e)=>{
            setText(e.target.value)
        }}/>
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
        }
        }>Add todo</button>
        {
            todos.map(({id,title})=><div key={id}>{title}{id}</div>)
        }
    </div>
}