import logo from './logo.svg';
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {Body} from './components/Body/Body';
import {Shop} from './components/Shop/Shop';
import {Filter} from './components/Filter/Filter';
import {Routes,Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<><Navbar />   <Body/></> }>
       </Route>
       <Route path="/filter" element={<><Navbar/><Filter/></>}>
       </Route>
       <Route path="/shop" element={<><Navbar/><Shop/></>}>
       </Route>

      </Routes>
    </div>
  );
}

export default App;
