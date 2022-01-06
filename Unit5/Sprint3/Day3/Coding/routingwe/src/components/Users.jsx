import { Link } from "react-router-dom";
export const Users=()=>{
    return <>
    <div>Users</div>
    {["One", "Two", "Three"].map((e,i)=>(
            <Link to={`/users/i`} style={{margin:"10px"}}>{e}</Link>

    ))

    }
    </> 
}