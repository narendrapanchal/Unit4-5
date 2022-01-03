import { useState } from "react"

export const Input=({getData})=>{
    let [data,setData]=useState({
        start:0,
        end:999999
    });
    const handleChange=(e)=>{
        let {name,value}=e.target;
        setData({...data,
        [name]:value
        })
    }
    const handleClick=()=>{
        getData(data);
    }
    return (  <div>
        <input type="number" name="start" onChange={handleChange}>
        </input>
        <input type="number" name="end" onChange={handleChange}>
        </input>
        <button onClick={handleClick}>apply</button>
    </div>)
        
    
}