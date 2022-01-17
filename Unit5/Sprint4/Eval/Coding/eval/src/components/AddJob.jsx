import { useState } from "react"
import { Navigate } from "react-router-dom";
export const AddJob=()=>{
    let [company,setCompany]=useState("");
    let [title,setTitle]=useState("");
    let [salary,setSalary]=useState(100000);
    let [description,setDescription]=useState("");
    let [location,setLocation]=useState("");
    let [type,setType]=useState("");
    let adminConfirm=JSON.parse(localStorage.getItem("token"))
   if(!adminConfirm.admin)
   return <Navigate to={"/login"}/>
    return (<div>
        <input type="text" placeholder="Company Name" onChange={(e)=>{
            setCompany(e.target.value);
        }} />
        <br />
        <input type="text" placeholder="Enter Title" onChange={(e)=>{
            setTitle(e.target.value);
        }} />
        <br />
        <input type="number" placeholder="Enter Salary" onChange={(e)=>{
            setSalary(e.target.value);
        }} />
        <br />
        <input type="text" placeholder="Enter Description" onChange={(e)=>{
            setDescription(e.target.value);
        }} />
        <br />
        <input type="text" placeholder="Enter location" onChange={(e)=>{
            setLocation(e.target.value);
        }} />
        <br />
        <input type="text" placeholder="Enter Type" onChange={(e)=>{
            setType(e.target.value);
        }} />
        <br />
     
        <br />
        <button onClick={()=>{
            let form ={
                company,
                title,
                salary,
                description,
                location,
                type
            }
            fetch("http://localhost:3001/joblist",{
                method:"POST",
                body:JSON.stringify(form),
                headers:{
                    "Content-Type":"application/json"
                }
            }).catch((e)=>{
                console.log(e);
            })
        }} >Post Job</button>
    </div>)
}