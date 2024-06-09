
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import ShopCategory from './pages/ShopCategory';
import Cart from './pages/Cart';
import Product from './pages/Product';
import LoginSignup from './pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import Tea_banner from './Components/Assets/banner4.jpg'
import Teawears_banner from './Components/Assets/banner4.jpg'
import Gifts_banner from './Components/Assets/banner4.jpg'
import Cafe_banner from './Components/Assets/banner4.jpg'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Tea' element={<ShopCategory banner={Tea_banner} category="Tea"/>}/>
        <Route path='/Teaweares' element={<ShopCategory banner={Teawears_banner} category="Teaweares"/>}/>
        <Route path='/Gifts' element={<ShopCategory banner={Gifts_banner} category="Gifts"/>}/>
        <Route path='/Cafe' element={<ShopCategory banner={Cafe_banner} category="Cafe"/>}/>
        <Route path='/product' element={<Product/>}/>
           <Route path=':productId' element={<Product/>}/>

        <Route path='/Cart' element={<Cart/>}/>

        <Route path='/login' element={<LoginSignup/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
      </div>);
}

export default App;
