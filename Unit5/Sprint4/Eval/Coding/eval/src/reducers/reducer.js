import { DATA } from "./actionTypes";
let init={data:[]};
export const reducer=(state=init,{type,payload})=>{
    switch(type){
        case DATA:
            return {...state,data:payload}
            default :
            return state;
    }
} 
