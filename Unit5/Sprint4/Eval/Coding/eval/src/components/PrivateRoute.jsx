import { Navigate } from "react-router-dom"

export const PrivateRoute=({children})=>{
    if(!JSON.parse(localStorage.getItem("token")).userName){
       return  <Navigate to={"/login"}/>
    }
    return children
}