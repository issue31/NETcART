import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './component/home';
import Login from './component/login';
import Register from './component/register';
import Product from './component/product';
import Order from './component/order';
import Cart from './component/cart';
import SingleProduct from './component/singleproduct';
import { CartContextProvider } from "./context/CartContext";
import ThankYouPage from './component/thankyou';

function App() {
  return (
    <Router>
      <CartContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product" element={<Product />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='/thankyou' element={<ThankYouPage />} />
          <Route path="/product/:productId" element={<SingleProduct />} />

        </Routes>
      </CartContextProvider>
    </Router>
  );
}

export default App;
