import { useContext, useEffect, useState } from "react";
import { useLocation, useParams,Navigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";
export const UsersDetails=()=>{
    const {token} =useContext(AuthContext);
    let {id} =useParams();
    const location =useLocation();
    const [user,setUser]=useState({});
    useEffect(()=>{
        fetch(`https://reqres.in/api/users/${id}`)
        .then((res)=>res.json())
        .then((res)=>{  
            setUser(res.data);
        })
    },[user]);
    useEffect(()=>{
        return(()=>{
            return ""
        })
    },[])
    if(!token){
        return <Navigate to={"/login"}/>
    }
    const goBack=(history="/users")=>{
   
    }
    return (
           <div>
                {user.avatar!=null?<div>
            <img src={user.avatar} alt="" />
            {user.first_name}
            {user.last_name}
        </div>:<div>..Lodaing</div>}
        <button onClick={()=>{
            goBack();
        }}>back</button>
           </div>
        
    )
}