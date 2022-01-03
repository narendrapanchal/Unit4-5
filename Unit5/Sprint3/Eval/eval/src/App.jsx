import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  const [show,setShow]=useState(false);
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
    <div className="App">
     <h3>hi</h3>
     {/* {show?<Form/>:null} */}
      {/* <button onClick={()=>setShow((!show))}>{!show?"show":"hide"}</button> */}
      {/* <Recepie></Recepie> */}
      {/* <Form></Form> */}
      <form action="" onSubmit={handleData}>
            <input type="text" name="Title" placeholder="Title"onChange={handleChange} ></input>
            <input type="text" name="Ingrediants" placeholder="Ingrediants" onChange={handleChange} ></input>
            <input type="number" name="Time" placeholder="Time to coock" onChange={handleChange}  ></input>
            <input type="text" name="Image" placeholder="Image Link" onChange={handleChange}></input>
            <input type="text" name="Instructions" placeholder="Instaruction" onChange={handleChange}></input>
            <input type="submit" >Submit</input>
            </form>
    </div>
  );
}

export default App;
