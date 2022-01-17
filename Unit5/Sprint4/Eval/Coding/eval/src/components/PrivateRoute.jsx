import { Navigate } from "react-router-dom"

export const PrivateRoute=(children)=>{
    if(!localStorage.getItem("token")){
       return  <Navigate to={"/login"}/>
    }
    return children
}