import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {Recepie} from "./components/Recepie"
function App() {
  const [show,setShow]=useState(false);

  return (
    <div className="App">
     <h3>hi</h3>
     {/* {show?<Form/>:null} */}
      {/* <button onClick={()=>setShow((!show))}>{!show?"show":"hide"}</button> */}
      {/* <Recepie></Recepie> */}
      {/* <Form></Form> */}
      <Recepie></Recepie>
    </div>
  );
}

export default App;
