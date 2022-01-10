import { INCREMENT,DECREMENT,ADDTODO } from "./actionType.js";
export const incCount=(data)=>{
    return {type:INCREMENT,payload:data};
}
export const decCount=(data)=>{
    return {type:DECREMENT,payload:data};
}
export const addTodo=(data)=>{
    return {type:ADDTODO,payload:data};
}