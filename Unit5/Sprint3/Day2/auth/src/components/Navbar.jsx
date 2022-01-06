import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"

export const Navbar=()=>{
    const  {isAuth,toggleAuth} = useContext(AuthContext);
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    let [token,setToken]=useState("");
    const sendrequest=()=>{
        if(isAuth){
            toggleAuth();
            setToken("");
        }else{
            let obj={
                email:username,
                password:password
            }
            fetch(`https://reqres.in/api/login?email`,{
                body:JSON.stringify(obj),
                method:"POST",
                headers:
                    { 'content-type': 'application/json'} 
                
            })
            .then(res=>res.json())
            .then(res=>{
                console.log(res);
                if(res.token!=null){
                    setToken(res.token);
                    toggleAuth();
                }
            })
            .catch(e=>{
                console.log(e.message,e);
            })
        }
    }
    return (
        <div>
            <input type="text" onChange={(e)=>{
                setUsername(e.target.value)
                console.log(username,password)
            }} ></input>
            <input type="text" onChange={(e)=>{
                setPassword(e.target.value)
                console.log(username,password)

            }}  ></input>

            <br />
            <h1>{isAuth==true?token:"Wrong Data"}</h1>
            <br />

            <button onClick={()=>{
       sendrequest();
    }}>
        {isAuth==false? "Login":"Logout"}
    </button>
        </div>
    )

}