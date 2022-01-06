import { Link } from "react-router-dom";
export const Navbar=()=>{
return (<div>
    <Link to={"/"}>Home</Link>
    <Link to={"/about"} style={{margin:"10px"}}>About</Link>
    <Link to={"/users"} style={{margin:"10px"}}>Users</Link>
</div>)
}