import NavBar from "./Components/Navbar/Navbar";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home'
import ProductFullDetail from './Components/Product/ProductFullDetail'
import './style.css'
function App() {

  return (
    <div className="App">
      <Router>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/product/:productid' element={<ProductFullDetail/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
