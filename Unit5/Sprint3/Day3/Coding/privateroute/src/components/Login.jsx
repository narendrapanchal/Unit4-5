import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Login=()=>{
    const [form,setForm]=useState({});
    const handleChange=({target:{name,value}})=>{
        setForm({...form,[name]:value});
    }
    const {handleToken} =useContext(AuthContext);
    const navigate=useNavigate();

    return <div>
        <input type="text" name="email" placeholder="email" onChange={handleChange}/>
        <input type="text" name="password" placeholder="password" onChange={handleChange}/>
        <button onClick={()=>{
            try{
                fetch("https://reqres.in/api/login",{
                    method:"POST",
                    body:JSON.stringify(form),
                    headers:{
                        "Content-type": "application/json"
                    }
                })
                .then(res=>{
                    return res.json();
                })
                .then(res=>{
                    console.log(res);
                    if(res.token!=null){
                        handleToken(res.token);
                    }
                })
                .catch(e=>{
                    console.log(e.message);
                })
       
              
            }
            catch(e){
                console.log(e.message)
            }
        }}>Sign in</button>
    </div>
}