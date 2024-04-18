import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import  Footer from './component/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/Mens' element={<ShopCategory  category='Men'/>}/>
        <Route path='/Womens' element={<ShopCategory  category='Women'/>}/>
        <Route path='/Kids' element={<ShopCategory  category='Kid'/>}/>
        <Route path=':product' element={<Product/>}>
          p
        <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>


      </Routes>

      <Footer/>
      </Router>
    </div>
  );
}


export default App;
