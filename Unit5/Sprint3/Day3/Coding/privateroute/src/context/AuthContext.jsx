import { createContext, useState } from "react";
export const AuthContext=createContext({token:"",handleToken:()=>{}});
export const AuthContextProvider=({children})=>{
    const [token,setToken]=useState("");
    const handleToken=(data)=>{
        setToken(data);
    }
    return (<AuthContext.Provider value={{token,setToken,handleToken}}>{children}</AuthContext.Provider>)
}