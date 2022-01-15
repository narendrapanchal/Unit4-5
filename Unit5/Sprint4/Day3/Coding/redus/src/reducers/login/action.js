
import { LOGIN_LOADING,LOGIN_SUCCESS,LOGIN_ERROR  } from "./actionTypes.js";

export const login_Loading=()=>({
    type:LOGIN_LOADING
})
export const login_Success=(data)=>({
    type:LOGIN_SUCCESS,
    payload:data
})
export const login_Error=(data)=>({
    type:LOGIN_ERROR
})
