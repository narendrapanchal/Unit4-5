import {useRef, useState} from "react"
export const Form=({getData,children})=>{
const [form,setForm]=useState({
    username:"",
    age:"",
    address:"",
    depart:false,
    salary:0,
    married:false,
    photo:""
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
    getData(form)
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
      <input 
      onChange={handleChange}
      name="depart"
      type="checkbox"
      placeholder="any depart"
      ></input>
      <input 
      onChange={handleChange}
      name="photo"
      type="text"
      placeholder="Photo link"
      ></input>

      <input type="submit" value="submit"></input>
      </form>
  )
}