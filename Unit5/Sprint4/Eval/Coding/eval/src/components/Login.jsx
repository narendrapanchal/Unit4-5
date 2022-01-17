import { useState } from "react"
import {saveData} from "../utils/loacalStorage";
export const Login=()=>{
    let [userName,setUserName]=useState("");
    let [password,setPassword]=useState("");
    let [admin,setAdmin]=useState(false);
    return (<div>
        <input type="text" placeholder="Enter Username" onChange={(e)=>{
            setUserName(e.target.value);
        }} />
        <input type="text" placeholder="Enter Password" onChange={(e)=>{
            setPassword(e.target.value);
        }} />
        <Label>Admin</Label>
        <checkbox onChange={()=>{
            setAdmin((prev)=>(!prev));
        }}></checkbox>
        <button onClick={()=>{
            
        }} >Login</button>
    </div>)
}