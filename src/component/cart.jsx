// Importing necessary libraries and components
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

// Defining the Cart component
const Cart = () => {
  // Using the CartContext to access cart-related functions and data
  const { cartItems, removeItem, removeAll } = useContext(CartContext);
  // Using the UserContext to access user-related data
  const { user } = useContext(UserContext);

  // Creating an axios instance with a base URL
  const api = axios.create({
    baseURL: "http://localhost:8080",
  });

  // State to store transaction data
  const [transactionData, setTransactionData] = useState([]);
  // State to store the total price of items in the cart
  const [totalPrice, setTotalPrice] = useState(0);

  // useEffect hook to calculate the total price whenever cartItems change
  useEffect(() => {
    const totalPrice = cartItems.reduce((total, item) => total + item.pprice, 0);
    setTotalPrice(totalPrice);
  }, [cartItems]);

  // Function to handle making an order
  const handleMakeOrder = async () => {
    try {
      // Prepare the order data from cartItems
      const orderData = cartItems.map((item) => ({
        pId: item.pid,
        pprice: item.pprice,
        // Add other properties of the OrderInputModel here if required
      }));
      setTransactionData(orderData);

      // Retrieve user data from local storage
      const userData = localStorage.getItem("userData");

      if (userData) {
        const { userId } = JSON.parse(userData);
        console.log(userId);
        console.log(transactionData);
        // Make the POST request to the makeOrder endpoint with the user ID
        const response = await api.post(`/makeorder/${userId}`, transactionData);
        const updatedOrder = response.data;

        // Assuming the response data contains the updated order details
        console.log("Order successful:", updatedOrder);
        // Clear the cart after successful order
        removeAll();
        localStorage.setItem("cartItems", JSON.stringify([]));
      }
    } catch (error) {
      // Handle any errors that occur during the order process
      console.error("Error making order:", error);
    }
  };

  return (
    <div className="shoppingcart-blue-theme">
      {/* Navbar */}
      <nav class="navbar navbar-expand-md navbar-light homenav">
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
      {/* Main content */}
      <div className="container mt-4">
        <h1 className="mb-4">Shopping Cart</h1>
        <div className="row">
          <div className="col-md-8">
            {cartItems.map((item, index) => (
              <div className="card mb-3" key={index} style={{ background: "#FFF7D4" }}>
                <div className="card-body">
                  <h5 className="card-title">Product Name: {item.pname}</h5>
                  <p className="card-text">Description: {item.pdesc}</p>
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

// Exporting the Cart component as the default export
export default Cart;
/*Detailed Documentation
Imports:

import React, { useContext, useEffect, useState } from "react";
Imports React and necessary hooks (useContext, useEffect, useState) from the React library.
import { Link } from "react-router-dom";
Imports the Link component from react-router-dom for navigation.
import axios from "axios";
Imports the axios library for making HTTP requests.
import { CartContext } from "../context/CartContext";
Imports the CartContext to access cart-related data and functions.
import { UserContext } from "../context/UserContext";
Imports the UserContext to access user-related data.
Component Definition:

const Cart = () => { ... };
Defines a functional component named Cart.
Context Usage:

const { cartItems, removeItem, removeAll } = useContext(CartContext);
Uses the CartContext to access cartItems, removeItem, and removeAll functions.
const { user } = useContext(UserContext);
Uses the UserContext to access the user object.
Axios Instance:

const api = axios.create({ baseURL: "http://localhost:8080" });
Creates an axios instance with a base URL for making HTTP requests.
State Management:

const [transactionData, setTransactionData] = useState([]);
Initializes transactionData state to store order data.
const [totalPrice, setTotalPrice] = useState(0);
Initializes totalPrice state to store the total price of items in the cart.
useEffect Hook:

useEffect(() => { ... }, [cartItems]);
Calculates the total price whenever cartItems change and updates the totalPrice state.
Order Handling:

const handleMakeOrder = async () => { ... };
Defines an asynchronous function to handle making an order.
Prepares order data from cartItems and sets transactionData.
Retrieves user data from local storage and makes a POST request to the makeOrder endpoint.
Clears the cart after a successful order.
Return Statement:

return ( ... );
Returns the JSX that defines the structure and content of the Cart component.
Navbar:

<nav class="navbar navbar-expand-md navbar-light homenav"> ... </nav>
Defines a responsive navigation bar with links to different pages.
Main Content:

<div className="container mt-4"> ... </div>
Defines the main content area of the page.
Contains a list of cart items and a cart summary with a checkout button.
Export:

export default Cart;
Exports the Cart component as the default export of the module.
This allows other modules to import and use the Cart component.*/
