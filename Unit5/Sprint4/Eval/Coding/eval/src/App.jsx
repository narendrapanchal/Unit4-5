import logo from './logo.svg';
import { Navbar } from './components/Navbar';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import {Login} from "./components/Login"
import {JobList} from "./components/JobList"
import {AddJob} from "./components/AddJob";
import {PrivateRoute} from "./components/PrivateRoute";
function App() {
  return (
    <div className="App">
      <div>Hi</div>
     <Navbar/>
     <Routes>
       <Route path="/" element={  <PrivateRoute><JobList/></PrivateRoute>}>
       </Route>
       <Route path="login" element={<Login/>}></Route>
       <Route path="addjob" element={<PrivateRoute> <AddJob/></PrivateRoute>}></Route>

     </Routes>
    </div>
  );
}

export default App;
