import logo from './logo.svg';
import './App.css';

function App() {
  let head1="First";
  let head2="second"
  let style={
    textAlign:"left",
    marginLeft:"20px"
  }
  return (
    <div className="App" style={style}>
      <Todos head={head1} arr={["first","first","first","first","first"]}/>
      <Todos head={head2} arr={["Second","first","first","first","first"]}/>
    </div>
  );
}
function Todos({head,arr}){
  return <div>
<h1> {head}</h1>
<ul>
  {arr.map((e)=>(<li>{e}</li>))}
</ul>
  </div>
}

export default App;
