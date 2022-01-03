import { useState } from "react"
import '../App.css';
export const Form =({getData})=>{
    const [data,setData]=useState({
        title:"",
        ingrediants:"",
        time:"",
        image:"",
        instructions:""
    })
   const handleChange=(e)=>{
       let {name,value}=e.target;
       setData({...data,
        [name]:value});
   } 
   const handleData=()=>{
       
       getData(data);
    console.log(data);
   }
    return (
       
       <div>
            <input type="text" name="title" placeholder="Title"onChange={handleChange} ></input>
            <br />
            <input type="text" name="ingrediants" placeholder="Ingrediants" onChange={handleChange}  ></input>
            <br />  <input type="number" name="time" placeholder="Time to coock" onChange={handleChange}  ></input>
            <br />  <input type="text" name="image" placeholder="Image Link" onChange={handleChange}></input>
            <br />  <input type="text" name="instructions" placeholder="Instaruction" onChange={handleChange} ></input>
            <br /> <button onClick={handleData}>Submit</button>
            </div>
   
    )
}