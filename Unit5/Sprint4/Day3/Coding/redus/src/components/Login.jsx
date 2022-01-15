import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import {loadData,saveData} from "../utils/localStorage"
import { useDispatch } from "react-redux";
import {login_Success,login_Loading,login_Error} from "../reducers/login/action";
export const Login=()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const dispatch=useDispatch();
        const {isAuth,loading,error} =useSelector((state)=>({
            loading:state.loginReducer.loading,
            isAuth:state.loginReducer.isAuth,
            error:state.loginReducer.error
        }))
        useEffect(()=>{
            webData();
        },[]);

        async function webData(){
            if(loadData("token")){            
                dispatch(login_Success(JSON.parse(loadData("token"))))
            }   
        
        }


    return loading? <div>...Loading</div>:error? <div>Something went wrong</div>:<div>{isAuth.token? "": <input type="text" name="email" placeholder="email" onChange={(e)=>{
        setEmail(e.target.value);
    }}/>}
       {isAuth.token?"":<input type="text" name="password" placeholder="password" onChange={(e)=>{
            setPassword(e.target.value);
        }}/>}
        
        <button onClick={(e)=>{
            try{
               console.log(e.target.textContent)
          
                    dispatch(login_Loading());
                    let form={
                        email:email,
                        password:password
                    }
                    fetch("https://reqres.in/api/login/",{
                        method:"POST",
                        body:JSON.stringify(form),
                        headers:{
                            "Content-Type": "application/json"
                        }
                    })
                    .then((res)=>{
                    
                        return res.json();
                    })
                    .then((res)=>{
               
                if(res.token){
                            console.log(res.token)
                            dispatch(login_Success(res));
                           saveData("token",JSON.stringify(res))
                           console.log(res.token,"tpken narne");
                }else{
                    dispatch(login_Error());
                }
                    })
                    .catch((e)=>{
                        console.log(e.message,"na");
                        dispatch(login_Error());
                    })
                
            }
            catch(e){
                console.log(e.message);
                dispatch(login_Error())
            }
        }}>  {isAuth.token? `Loged in`: "Login" }</button>
    </div>
}