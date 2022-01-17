import { useState } from "react"
export const Login=()=>{
    let [userName,setUserName]=useState("");
    let [password,setPassword]=useState("");
    let [admin,setAdmin]=useState(false);
    return (<div>
        <input type="text" placeholder="Enter Username" onChange={(e)=>{
            setUserName(e.target.value);
        }} />
        <br />
        <input type="text" placeholder="Enter Password" onChange={(e)=>{
            setPassword(e.target.value);
        }} />
        <br />
        <span>Admin &nbsp;</span>
        <input type="checkbox" onChange={()=>{
            setAdmin((prev)=>(!prev));
        }}/>
        
        <br />
        <button onClick={()=>{
            let form ={
                userName,
                password,
                admin
            }
            localStorage.setItem("token",JSON.stringify(form));
        }} >Login</button>
    </div>)
}