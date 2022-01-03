import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  const [show,setShow]=useState(false);
  return (
    <div className="App">
     <h3>hi</h3>
     {/* {show?<Form/>:null} */}
      <button onClick={()=>setShow((!show))}>{!show?"show":"hide"}</button>

    </div>
  );
}

export default App;
