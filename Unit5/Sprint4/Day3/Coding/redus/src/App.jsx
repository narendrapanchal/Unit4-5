import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { Navbar } from './components/Navbar';
import { Todos } from './components/Todos';
import { Details } from './components/Details';
import { Edit } from './components/Edit';
import { Login } from './components/Login';
import {PrivateRoute} from "./components/PrivateRoute";
function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Routes>
       <Route path="/" element={<PrivateRoute> <Todos/> </PrivateRoute>}></Route>
       <Route path="/todos/:id" element={<Details/>}></Route>
       <Route path="/todos/:id/edit" element={<Edit/>}></Route>
       <Route path="/login" element={<Login/>}></Route>
       <Route path="*" element={<div>Page Not Found</div>}></Route>
     </Routes>
    </div>
  );
}

export default App;