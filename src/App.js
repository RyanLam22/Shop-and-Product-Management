import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AddProduct from './components/ProductForm';
import AddShop from './components/ShopForm';
import {Link, Route, BrowserRouter as Router, Routes} from 'react-router-dom';




function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">Shop and Product Management</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to='/'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/add/product'>Add Product</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/add/shop'>Add Shop</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/add/product' element={<AddProduct />} /> 
          <Route path='/add/shop' element={<AddShop />} /> 
        </Routes>
      </div>
    </Router>  
  );
}
function Home() {
  return <h2>Welcome to Shop and Product Management</h2>;
}
export default App;
