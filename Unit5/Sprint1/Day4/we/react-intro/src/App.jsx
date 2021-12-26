import './App.css';
import { useState } from 'react';
function App() {
  const [count, setCount]=useState(1);

  const addOne=(value)=>{
    
    if(value==2){
      setCount((prev)=>{
        if(prev>100)
        return 0;
        else return prev*2
      })
    }else
    setCount(count+value)
  }

  return (
    <div className="App" >
      <h3>count {count}</h3>
      <button onClick={()=>addOne(1)}>Addone 1</button>
      <button onClick={()=>addOne(-1)}>Decone 1</button>
      <br />
      <button onClick={()=>{addOne(2)}}>Mul * 2</button>
    </div>
  );
}

export default App;