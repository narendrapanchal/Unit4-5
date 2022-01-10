import { Link } from "react-router-dom";
export const Users=()=>{
    return <>
    <div>Users</div>
    {["One", "Two", "Three"].map((e,id)=>(
            <Link to={`/users/${id+1}`} key={id} style={{margin:"10px"}}>{e}</Link>
    ))
    }
    </> 
}