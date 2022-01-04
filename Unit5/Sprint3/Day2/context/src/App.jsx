import logo from './logo.svg';
import './App.css';
import { Cart } from './components/Cart';
import {Body} from "./components/IncrementButton"
function App() {
  return (
    <div className="App">
      <Cart></Cart>
      <Body></Body>
    </div>
  );
}

export default App;
