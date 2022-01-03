import logo from './logo.svg';
import './App.css';
import { Timer } from './components/Timer';
// import { Form } from './components/Form';
import { Todo } from './components/Todo';
import { useState } from 'react';
import { Form } from './components/FormTimer';
function App() {
  const [show,setShow]=useState(false);
  return (
    <div className="App">
      {/* <Form/> */}
      {/* <Todo/> */}
      {show?<Form/>:null}
      <button onClick={()=>setShow((!show))}>{!show?"show":"hide"}</button>

    </div>
  );
}

export default App;
