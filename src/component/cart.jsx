import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const Cart = () => {
  // Use the CartContext
  const { cartItems, removeItem, removeAll } = useContext(CartContext);
   const { user } = useContext(UserContext);
  const api = axios.create({
    baseURL: "http://localhost:8080",
  });

  const [transactionData, setTransactionData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Calculate the total price whenever cartItems change
    const totalPrice = cartItems.reduce((total, item) => total + item.pprice, 0);
    setTotalPrice(totalPrice);
  }, [cartItems]);

  const handleMakeOrder = async () => {
    try {
      // Prepare the order data from cartItems
      const orderData = cartItems.map((item) => ({
        pId: item.pid,
        pprice: item.pprice,
        // Add other properties of the OrderInputModel here if required
      }));
      setTransactionData(orderData);
      
      // Make the POST request to the makeOrder endpoint with the user ID
      const userData = localStorage.getItem("userData");

      if (userData) {
        const { userId } = JSON.parse(userData);
        console.log(userId);
        console.log(transactionData);
        const response =await  api.post(`/makeorder/${userId}`, transactionData);
        const updatedOrder = response.data;

        // Assuming the response data contains the updated order details
        console.log("Order successful:", updatedOrder);
        removeAll();
        localStorage.setItem("cartItems");
        // Clear the cart after successful order (optional)
        // You may implement it depending on your business logic
        // setCartItems([]);

        // Handle the updated order data or show a success message
      }
    } catch (error) {
      // Handle any errors that occur during the order process
      console.error("Error making order:", error);
    }
  };

  return (
    <div className="shoppingcart-blue-theme">
                  {/*Navbar*/}
                  <nav class="navbar navbar-expand-md navbar-light homenav" >
                <div class="container">
                    <Link class="navbar-brand" to="/">NetCart</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <Link class="nav-link" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/product">Products</Link>
                            </li>
                           
                            <li class="nav-item">
                                <Link class="nav-link" to="/order">Order</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/cart">Cart</Link>
                            </li>
                            
                            <li class="nav-item">
                                <Link class="nav-link" to="/login">SignIn</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/login">SignOut</Link>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </nav>
      <div className="container mt-4">
        <h1 className="mb-4">Shopping Cart</h1>
        <div className="row">
          <div className="col-md-8">
            {cartItems.map((item, index) => (
              <div className="card mb-3" key={index} style={{ background: "#FFF7D4" }}>
                <div className="card-body">
                  <h5 className="card-title">Product Name {item.pname}</h5>
                  <p className="card-text">Description of Product {item.pdesc}</p>
                  <p className="card-text">Price: ${item.pprice}</p>
                  <Link
                    to="#"
                    className="btn btn-danger btn-sm"
                    onClick={() => removeItem(index)}
                  >
                    Remove
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-4">
            <div className="card" style={{ background: "#FFF7D4" }}>
              <div className="card-body">
                <h5 className="card-title">Cart Summary</h5>
                <p className="card-text">Total Items: {cartItems.length}</p>
                <p className="card-text">Total Price: ${totalPrice}</p> {/* Display the total price here */}
                <Link to="/thankyou">
                <button className="btn btn-primary btn-block" onClick={handleMakeOrder}>
                  Checkout
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Cart;
