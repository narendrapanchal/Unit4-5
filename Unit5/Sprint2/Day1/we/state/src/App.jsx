
import { useState } from 'react';
import './App.css';
import { Todo } from './components/Todo';
function App() {
  let [data,setData]=useState("");
  const handleData=(value)=>{
    console.log("Parent Received ",value);
    setData(value);
  }

  return (
    <div className="App">
     <h3>Child receiver</h3>
     <Sibling1  data={data}/>
     <Sibling2  num={8} handleData={handleData}/>
      <button>buton</button>
      <br />
      <br />
      <Todo/>
      </div>
  );
}

const  Sibling2=({num,handleData})=>{
  handleData("Aaj ka din")
    return <h1>Hi {num} narendra</h1>
  }
  const  Sibling1=({data})=>{return  <h1>j {data}</h1>}

export default App;