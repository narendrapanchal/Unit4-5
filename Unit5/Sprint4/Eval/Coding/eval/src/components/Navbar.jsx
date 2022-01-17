import { Link } from "react-router-dom"
import "../App.css"
export const Navbar=()=>{
  return  ( <div className="navbar">
            <Link to="/" >Job List</Link>
            <Link to="/appliedjob" > Applied Job</Link>
            <Link to="/login" >Login</Link>
            <Link to="/addjob" > Add Job</Link>
    </div>)
}