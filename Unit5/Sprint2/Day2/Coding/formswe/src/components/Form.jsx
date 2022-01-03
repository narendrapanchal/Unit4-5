import {useRef, useState} from "react"
export const Form=()=>{
const [form,setForm]=useState({
    username:"",
    age:"",
    address:"",
    file:""
  });
  const ref=useRef(null);
  const handleChange=(e)=>{
    // console.log(ref.current.files);
    const {name,value,type,checked}=e.target;
    setForm({
        ...form,
        [name]:type=="checkbox"? checked:value
      })
  }
 
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(form);
  }
  return (
      <form onSubmit={handleSubmit}>
          <input 
      onChange={handleChange}
      name="username"
      type="text"
      placeholder="enter name"
      ></input>
      <input 
      onChange={handleChange}
      name="age"
      type="number"
      placeholder="enter age"
      ></input>
       <input 
      onChange={handleChange}
      name="married"
      type="checkbox"
      placeholder=""
      ></input>
      <input 
      onChange={handleChange}
      name="address"
      type="text"
      placeholder="enter address"
      ></input>
      <input type="file" ref={ref} onChange={handleChange} name="file" id="" />
      <input type="submit" value="submit"></input>
      </form>
  )
}