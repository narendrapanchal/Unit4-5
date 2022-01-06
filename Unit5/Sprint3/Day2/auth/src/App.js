import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { AuthContext } from './context/AuthContext';
import { useContext } from 'react';
function App() {
  const {isAuth} = useContext(AuthContext)
  return (
    <div className="App">
      hi Narendra {isAuth==false? "False":"True"}
      <br></br>
    <Navbar></Navbar>
    </div>
  );
}

export default App;
