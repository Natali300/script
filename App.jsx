import './App.css';
import React,{useState} from 'react';
import books from './books';
import Navbar from './component/Navbar';
import { BrowserRouter as Rourer, Routes, Route } from 'react-router-dom';
import HomePage from './component/pages/HomePage';
import CartPage from './component/pages/CartPage';

function App() {
  const[cart,setCart] = useState([]);
  const addToCart = (book) => {
    setCart([...cart,book]);
  };
  const removeFromCart = (id) => {
    const index =cart.findIndex(book => book.id === id);
    if(index !== -1){
      const newCart = [...cart];
      newCart.splice(index,1);
      setCart(newCart);
    }
  };
  const clearCart = () => {
    setCart([]);
  };
  return (
    <Router>
      <Navbar cartCount={cart.length}/>
      <Routes>
        <Route path="/" element={<HomePage books={books} addToCart={addToCart}/>} />
        <Route path="/cart" element={<CartPage cartItems={cart} removeFromCart={removeFromCart} clearCart = {clearCart}/>}/>
      </Routes>
    </Router>
  );
};
   
export default App;