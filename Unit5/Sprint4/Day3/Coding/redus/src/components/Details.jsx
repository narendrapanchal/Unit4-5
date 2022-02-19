import {useDispatch, useSelector} from "react-redux"
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { getTodoError,getTodoLoading,getTodoSuccess } from "../reducers/todo/action";
export const Details=()=>{
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
        <div>
        {
            todos.map((data)=>(
               data.id==id?<div> {data.title}</div>:""
                          
            
            ))}
            
        </div>
    )
}