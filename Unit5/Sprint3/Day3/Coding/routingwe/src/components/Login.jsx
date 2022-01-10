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
                fetch("reqres.in/api/login",{
                    method:"POST",
                    body:JSON.stringify(form),
                });
                handleToken("111324");
                navigate(-1);
            }catch{

            }
        }}>Sign in</button>
    </div>
}