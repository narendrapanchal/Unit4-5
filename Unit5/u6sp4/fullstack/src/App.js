import './App.css';
import {Login} from "./components/Login";
import {Routes,Route} from "react-router-dom";
import {Teacher} from "./components/Teacher";
import {SingleTeacher} from "./components/SingleTeacher";
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Login />}>
       </Route>
       <Route path="/teacher" element={<Teacher />}>
       </Route>
       <Route path="/singleteacher" element={<SingleTeacher />}>
       </Route>

      </Routes>
         
    </div>
  );
}

export default App;
