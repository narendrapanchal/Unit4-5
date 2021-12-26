import logo from './logo.svg';
import './App.css';
import {Todos,Todo} from "./components/Todo"
function App() {
  let head1="First";
  let head2="second"
  let style={
    textAlign:"left",
    marginLeft:"20px"
  }
  return (
    <div className="App" style={style}>
      {true?<h1>Hi Narendra</h1>:<h1>By Narendra</h1>}
      <Todos head={head1} arr={["first","first","first","first","first"]}/>
      <Todos head={head2} arr={["Second","first","first","first","first"]}/>
    </div>
  );
}

export default App;