import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { About } from './components/About';
import {Navbar} from "./components/Navbar"
import { Routes,Route } from 'react-router-dom';
import { Users } from './components/Users';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home/>}>

      </Route>
      <Route path="/about" element={<About/>}>

      </Route>
      <Route path="/users" element={<Users/>}>
      </Route>
      <Route path="/users/:userid" element={<Users/>}>

</Route>
    </Routes>
    
    </div>
  );
}

export default App;
