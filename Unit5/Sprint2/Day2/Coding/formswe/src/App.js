import logo from './logo.svg';
import './App.css';
import { Form } from './components/Form';
import {useState,useRef, useEffect} from "react"
function App() {
  const test=useRef(1);
  const [d,setD]=useState(null);
  const inputRef=useRef(null);
 
  return (
    <div className="App" className="style">
      {/* <button onClick={()=>{
       test.current++;
       console.log(test);
     }}> Increment</button>
      <button onClick={()=>setD(d+1)} >render</button>
      Taking input value using ref
      <input ref={inputRef}></input>
      <button onClick={()=>{
        console.log(inputRef.current.value)
      }}>button</button>   */}
      <Form></Form>
    </div>
  );
}

export default App;
