import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
/* Importing necessary components for different pages in the app */
import Home from './component/home'; // Home page component
import Login from './component/login'; // Login page component
import Register from './component/register'; // Registration page component
import Product from './component/product'; // Product listing page component
import Order from './component/order'; // Order management page component
import Cart from './component/cart'; // Shopping cart component
import SingleProduct from './component/singleproduct'; // Detailed view of a single product
import { CartContextProvider } from "./context/CartContext"; // Context provider for cart-related state
import ThankYouPage from './component/thankyou'; // Thank you page after purchase

/* Main application component */
function App() {
  return (
    <Router>
      {/* Wrapping the application with CartContextProvider to provide global state */}
      <CartContextProvider>
        <Routes>
          {/* Route for the home page */}
          <Route path="/" element={<Home />} />

          {/* Route for the login page */}
          <Route path="/login" element={<Login />} />

          {/* Route for the registration page */}
          <Route path="/register" element={<Register />} />

          {/* Route for the product listing page */}
          <Route path="/product" element={<Product />} />

          {/* Route for the order management page */}
          <Route path="/order" element={<Order />} />

          {/* Route for the shopping cart page */}
          <Route path="/cart" element={<Cart />} />

          {/* Route for the thank you page */}
          <Route path='/thankyou' element={<ThankYouPage />} />

          {/* Dynamic route for viewing a single product by its ID */}
          <Route path="/product/:productId" element={<SingleProduct />} />
        </Routes>
      </CartContextProvider>
    </Router>
  );
}

export default App;
