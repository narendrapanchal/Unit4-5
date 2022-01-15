import {GET_TODO_ERROR,GET_TODO_LOADING,GET_TODO_SUCCESS,ADD_TODO,
    REMOVE_TODO,ADD_TODO_SUCCESS,ADD_TODO_ERROR,ADD_TODO_LOADING} from "./actionTypes.js";
let init={count:0,todos:[],error:false,loading:false};
export const reducer=(state=init,{type,payload})=>{
switch(type){
case ADD_TODO:
    return {...state,todos:[...state.todos,payload]}
case ADD_TODO_LOADING:
    return {...state,loading:true}
case ADD_TODO_SUCCESS:
    return {...state,todos:[...state.todos,payload],loading:false}
case ADD_TODO_ERROR:
    return {...state,loading:false,error:true}
case GET_TODO_SUCCESS:
    return {...state,todos:payload,loading:false}
case GET_TODO_LOADING:
    return {...state,todos:[...state.todos,payload],loading:true}
case GET_TODO_ERROR:
    return {...state,loading:false,error:true}  
case REMOVE_TODO:
    return (()=>{
        state.todos.filter((data)=>{
            return data!=payload;
        })
        return {...state};
    })   
    case REMOVE_TODO:
        return {...state,todos:[payload]};          
default:
    return state;
}
}