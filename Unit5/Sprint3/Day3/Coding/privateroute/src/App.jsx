import logo from './logo.svg';
import './App.css';
import {Route,Routes} from "react-router-dom";
import {Navbar} from "./components/Navbar"
import {Dashboard} from "./components/Dashboard";
import {Login} from "./components/Login";
import {Setting} from "./components/Setting";
import {Home} from  "./components/Home";
import {PrivateRoute} from "./components/PrivateRoute"
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
     <Route path="/" element={<Home/>}></Route>
     <Route path="/login/" element={<Login/>}></Route>
     <Route path="/dashboard/" element={<PrivateRoute><Dashboard/></PrivateRoute>}></Route>
      <Route path="/dashboard/settings" element={<PrivateRoute><Setting/></PrivateRoute>}></Route>
      </Routes>
    </div>
  );
}

export default App;
