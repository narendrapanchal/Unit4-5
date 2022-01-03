import { useState } from "react"

export const Form =()=>{
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
   const handleData=(e)=>{
       e.preventDefault();
    //    getData(data);
    console.log(data);
   }
    return (
        <div>
            <form action="" onSubmit={handleData}>
            <input type="text" name="title" placeholder="Title"onChange={handleChange} ></input>
            <input type="text" name="ingrediants" placeholder="Ingrediants" onChange={handleChange}  ></input>
            <input type="number" name="time" placeholder="Time to coock" onChange={handleChange}  ></input>
            <input type="text" name="image" placeholder="Image Link" onChange={handleChange}></input>
            <input type="text" name="instructions" placeholder="Instaruction" onChange={handleChange} ></input>
            <input type="submit" >Submit</input>
            </form>
        </div>
    )
}