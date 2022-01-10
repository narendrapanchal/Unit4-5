import { INCREMENT,DECREMENT,ADDTODO } from "./actionType.js";
export const reducer=(state,{type,payload})=>{
    switch(type){
        case INCREMENT:
        return {...state,count:state.count+payload};
        case DECREMENT:
        return {...state,count:state.count-payload};
        case ADDTODO:
        return{...state,todo:[...state.todo, payload]};
        default:
        return state;
    }
};