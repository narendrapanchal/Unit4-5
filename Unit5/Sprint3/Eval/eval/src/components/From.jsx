import { useState } from "react"

export const Form =()=>{
    const [data,setData]=useState({
        Title:"",
        Ingrediants:"",
        Time:"",
        Image:"",
        Instructions:""
    })
   const handleChange=(e)=>{
       let [name,value]=e.target;
       setData({...data,[name]:value});
   } 
   const handleData=(e)=>{
       e.preventDefault();
    //    getData(data);
    console.log(data);
   }
    return (
        <div>
            <form action="" onSubmit={handleData}>
            <input type="text" name="Title" placeholder="Title"onChange={handleChange} />
            <input type="text" name="Ingrediants" placeholder="Ingrediants" onChange={handleChange}  />
            <input type="number" name="Time" placeholder="Time to coock" onChange={handleChange}  />
            <input type="text" name="Image" placeholder="Image Link" onChange={handleChange} />
            <input type="text" name="Instructions" placeholder="Instaruction" onChange={handleChange} />
            <input type="submit" >Submit</input>
            </form>
        </div>
    )
}