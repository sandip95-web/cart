import NavBar from "./Components/Navbar/Navbar";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home'
import ProductFullDetail from './Components/Product/ProductFullDetail'
import ProductCartShow from "./Components/Product/ProductCartShow";
import './style.css'
function App() {

  return (
    <div className="App">
      <Router>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/productshow' element={<ProductCartShow/>} />
        <Route path='/product/:productid' element={<ProductFullDetail/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
