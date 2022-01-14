import logo from './logo.svg';
import './App.css';
import { useSelector ,useDispatch} from 'react-redux';
import {addTodo} from "./feature/Todos/action";
import {Todos} from "./components/Todos"
import {Counter} from "./components/Counter"
function App() {
  return (
    <div className="App">
     <Counter></Counter>
     <h1>hi </h1>
       <Todos></Todos>

    </div>
  );
}

export default App;
