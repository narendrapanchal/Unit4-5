import { useState,useEffect } from "react";
import { useDispatch,useSelector  } from "react-redux";
import { addTodoLoading,addTodoError,addTodoSuccess,getTodoError,getTodoLoading,getTodoSuccess } from "../store/action";
export const Todos=()=>{
    const [text,setText] =useState("");
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
              }
        catch(err){
            dispatch(getTodoError());
        }
        
        }

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