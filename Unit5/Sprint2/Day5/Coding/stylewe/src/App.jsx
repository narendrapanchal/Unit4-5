import logo from './logo.svg';
import './App.css';
import { Button,Div,Theme } from './components/Button';
import { useState } from 'react';
function App() {
  const [theme,steTheme]=useState();
  return (
    <div className="App">
      <Button theme={theme} onClick={()=>{
        console.log("Button Clicked")
      }}>Button</Button>
      <Div>Hi
        <p>P tag</p>
      </Div>
      <Theme onClick={steTheme((prev)=>(prev=="white"?"black":"white"))}></Theme>
    </div>
  );
}

export default App;