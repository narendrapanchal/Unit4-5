import "./Navbar.css"
export const Navbar=()=>{
return (<div className="header">
    <div>PU<span>N</span>CT<span>U</span>RE<span>D</span></div>
    <div>
        <select name="Location" id="">
        <option value="Jaipur">Jaipur</option>
        <option value="Delhi">Delhi</option>
        <option value="Alwar">Alwar</option>
        <option value="Banglore">Banglore</option>
        <option value="Mumbai">Mumbai</option>
        </select>
    </div>
</div>)
}