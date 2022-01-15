import {LOGIN_ERROR,LOGIN_LOADING,LOGIN_SUCCESS} from "./actionTypes.js";
let init={isAuth:{},error:false,loading:false};
export const reducer=(state=init,{type,payload})=>{
switch(type){
case LOGIN_LOADING:
    return {...state,loading:true}
case LOGIN_ERROR:
    return {...state,loading:false,error:true}
case LOGIN_SUCCESS:
    return {...state,isAuth:payload,loading:false}        
default:
    return state;
}
}