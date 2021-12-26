import logo from './logo.svg';
import './App.css';

function App() {
  const style={
    background:"red"
  }
  
  return (
    <div className="App">
     {/* <h1 style={style}>Hi</h1>
     {3+9}
     {[1,2,3,4,5].map((e)=>   <h1>helo {e}</h1>)}
   <card>
     <h1>alsn</h1>
     <ul>
     <li>alsn</li>
     <li>alsn</li>
     <li>alsn</li>
     <li>alsn</li>
     <li>alsn</li>
    <li>alsn</li>
     </ul>
   </card> */}
   {/* {
     arr.map((e)=>(<Todos num={e} age={e} name={""}></Todos>))
   }
   {<Todos/>} */}

    </div>
  );
}
function Todos({head,arr}){
  return <div>
<h1> head</h1>
<ul>
  {arr.map((e)=>(<li>e</li>))}
</ul>
  </div>
}

export default App;
