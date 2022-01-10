import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { About } from './components/About';
import {Navbar} from "./components/Navbar"
import { Routes,Route } from 'react-router-dom';
import { Users } from './components/Users';
import {UsersDetails} from "./components/UserDetail"
import { Login } from './components/Login';
import {PrivateRoute} from "./components/PrivateRoute"
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home/>}>

      </Route>
      <Route path="/about" element={<About/>}>

      </Route>
      <Route path="/users"  element={<Users/>}>
      </Route>
      <Route path="/users/:id" element={<PrivateRoute><UsersDetails/></PrivateRoute>}>
      </Route>
      <Route path="/login" element={<Login/>}>
      </Route>
      <Route path="*" element={<div>Page not found</div>}>
      </Route>
    </Routes>
    
    </div>
  );
}

export default App;
