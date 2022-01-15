import { children, useContext } from "react"
import { Navigate, Route } from "react-router-dom";
import { loadData } from "../utils/localStorage";

export const PrivateRoute=({children})=>{
    
   
    
    if(!loadData("token")){
        return <Navigate to ={"/login"}/>
    }
    return children
}