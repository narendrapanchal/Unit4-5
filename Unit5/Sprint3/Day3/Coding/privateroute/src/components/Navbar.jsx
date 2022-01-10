import { Link } from "react-router-dom";
export const Navbar=()=>{
return (<div>
    <Link to={"/"}>Home</Link>
    <Link to={"/dashboard"} style={{margin:"10px"}}>Dashboard</Link>
    <Link to={"/dashboard/settings"} style={{margin:"10px"}}>Setting</Link>
    <Link to={"/Login"} style={{margin:"10px"}}>Login</Link>
</div>)
}