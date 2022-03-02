import {useNavigate} from "react-router-dom";
import { useState,useEffect } from "react";
export const Login=()=>{
    let Navigate=useNavigate();
    let [token,setToken]=useState("");
    if(localStorage.getItem("token")!=null){
        Navigate("/teacher");
    }
    useEffect(()=>{
        if(token){
            Navigate("/teacher");
        }
    })
    function loginuser(){
        let pass=document.getElementById("password").value;
        let email=document.getElementById("email").value;
        let data={
            email:email,
            password:pass
        }

       
        fetch("https://reqres.in/api/login",{
            method:'POST',
            body:JSON.stringify(data),
            headers:{
                    "Content-Type": "application/json",
                }
        })
        .then((res)=>{
            return res.json();

        })
        .then((res)=>{
            localStorage.setItem("token",JSON.stringify(res));
            Navigate("/teacher");
            console.log(res,"Hi");//eve.holt@reqres.in  cityslicka
        })
        .catch((err)=>{
            alert("Please input correct credentials")
          console.log(err);
        });
    }
    return (<div> <input id="email" type="email" placeholder="Email" />
    <input placeholder="Password" id="password" type="password"/>
     <button onClick={()=>{
        loginuser();
    }}>Login</button>
    
    </div>)
}