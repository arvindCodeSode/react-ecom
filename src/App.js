import './App.css';
import './Navbar.css';
import './Signup.css'
import Navbar from './components/common/Navbar';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/product/Products';
import MyCart from './components/product/MyCart';
import SignUp from './components/user/Signup';
import Login from './components/user/Login';
import DeleteProduct from './components/product/DeleteProduct';
import UpdateProduct from './components/product/UpdateProduct';
import AddProduct from './components/product/AddProduct';
import Footer from './components/common/Footer';
import PrivateComponent from './components/PrivateComponent';
import Product from './components/product/Product';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
              <Route element = { <PrivateComponent /> }>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/addproduct' element={<AddProduct></AddProduct>}></Route>
                <Route path='/deleteproduct/:id' element={<DeleteProduct></DeleteProduct>}></Route>
                <Route path='/updateproduct/:id' element={<UpdateProduct></UpdateProduct>}></Route>
                <Route path='/product/:id' element={<Product></Product>}></Route>
                <Route path='/products' element={<Products></Products>}></Route>
                <Route path='/mycart' element={<MyCart></MyCart>}></Route>
              </Route>
              <Route path='/signup' element={<SignUp></SignUp>}></Route>
              <Route path='/login' element={<Login></Login>}></Route>
          </Routes>
      </BrowserRouter>
      <Footer></Footer>

    </div>
  );
}

export default App;
