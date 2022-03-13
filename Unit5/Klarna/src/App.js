import logo from './logo.svg';
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {Body} from './components/Body/Body';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1>
        All deals and coupons.
      </h1>
      <h5>The best online deals and coupons, including Klarna exclusives, updated daily.</h5>
      <Body/>
    </div>
  );
}

export default App;
