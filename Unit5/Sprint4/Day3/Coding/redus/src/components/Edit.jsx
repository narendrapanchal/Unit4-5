import { useState, useEffect } from "react"
import {Total} from "./Total"
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import { addTodoLoading,addTodoError,addTodoSuccess,getTodoError,getTodoLoading,getTodoSuccess } from "../reducers/todo/action";
import { useParams } from "react-router-dom";
export const Edit=()=>{
    const [text,setText] = useState("");
    const dispatch=useDispatch();
    const {id} =useParams();
    const {loading,todos,error}=useSelector((state)=>({
        loading:state.todoReducer.loading,
        todos:state.todoReducer.todos,
        error:state.todoReducer.error
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
    return ( loading? <div> ...loading</div>:error?<div> Something went wrong</div>:
        <div><Total></Total>
        <div>Todo</div>
       
        <input type="text" name="" id="" onChange={(e)=>{
            setText(e.target.value)
        }} ></input>
        <button onClick={()=>{
            dispatch(addTodoLoading());
            fetch(`http://localhost:3001/todos/${id}`,{
                method:"PATCH",
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

        }}>Edit Todo</button>
        {
            todos.map((data)=>(
               data.id==id?<div> {data.title}</div>:""
                          
            
            ))}
        </div>
    )
}