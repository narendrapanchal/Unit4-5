import logo from './logo.svg';
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {Body} from './components/Body/Body';
import {Shop} from './components/Shop/Shop';
import {Cart} from './components/Cart/Cart';
import {Filter} from './components/Filter/Filter';
import {Routes,Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar/>
    <Routes>
      <Route path="/" element={<Body/> }>
       </Route>
       <Route path="/filter" element={<Filter/>}>
       </Route>
       <Route path="/shop" element={<Shop/>}>
       </Route>
       <Route path="/cart" element={<Cart/>}>
       </Route>
      </Routes>
    </div>
  );
}

export default App;
