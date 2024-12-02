// Importing necessary libraries and components
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

// Defining the Order component
const Order = () => {
  // State to store orders
  const [orders, setOrders] = useState([]);
  // Using the UserContext to access user-related data
  const { user } = useContext(UserContext);
  // State to manage loading state
  const [loading, setLoading] = useState(true);
  // State to manage error messages
  const [error, setError] = useState(null);

  // useEffect hook to fetch orders when the user changes
  useEffect(() => {
    // Get the userId from local storage
    if (user && user.userId) {
      fetchOrdersByUserId();
    }
    // Add user dependency to the dependency array
  }, [user]);

  // Function to handle order cancellation
  const handleCancelOrder = async (orderId) => {
    const response = await axios.put(`http://localhost:8080/cancelOrder/${orderId}`);
    console.log(response.data);
    fetchOrdersByUserId(); // Refresh orders after cancellation
  };

  // Function to handle user logout
  const clickHandleLogout = () => {
    localStorage.removeItem("userData"); // Remove user data from local storage
  };

  // Function to fetch orders by user ID
  const fetchOrdersByUserId = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/getAllOrders/${user.userId}`);
      console.log(response.data);
      setOrders(response.data); // Set orders state with fetched data
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error("Error fetching orders:", error);
      setError("Error fetching orders. Please try again later."); // Set error message
      setLoading(false); // Set loading to false after error
    }
  };

  // Display loading message while fetching data
  if (loading) {
    return <div>Loading...</div>;
  }

  // Display error message if there is an error
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="order-blue-theme">
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
                <Link class="btn nav-link" onClick={clickHandleLogout} to="/login">SignOut</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Main content */}
      <div className="container mt-4">
        <h1 className="mb-4">Order Page</h1>
        <div className="row">
          <div className="col-md-8">
            {orders.map((order) => (
              <div className="card mb-3" key={order.orderId} style={{ background: "#FFD95A" }}>
                <div className="card-body">
                  <h5 className="card-title">Order ID: {order.orderId}</h5>
                  <p className="card-text">Order Date: {order.orderDate}</p>
                  <p className="card-text">Status: {order.status}</p>
                  {order.status === "Booked" && (
                    <Link className="btn btn-danger btn-sm" onClick={() => handleCancelOrder(order.orderId)}>
                      Cancel Order
                    </Link>
                  )}
                  {order.status === "Cancelled" && (
                    <button disabled>
                      Cancel Order
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Exporting the Order component as the default export
export default Order;
/*Detailed Documentation
Imports:

import React, { useState, useEffect, useContext } from "react";
Imports React and necessary hooks (useState, useEffect, useContext) from the React library.
import axios from "axios";
Imports the axios library for making HTTP requests.
import { UserContext } from "../context/UserContext";
Imports the UserContext to access user-related data and functions.
import { Link } from "react-router-dom";
Imports the Link component from react-router-dom for navigation between different routes.
Component Definition:

const Order = () => { ... };
Defines a functional component named Order.
State Management:

const [orders, setOrders] = useState([]);
Initializes orders state to store the list of orders.
const [loading, setLoading] = useState(true);
Initializes loading state to manage the loading state.
const [error, setError] = useState(null);
Initializes error state to manage error messages.
Context Usage:

const { user } = useContext(UserContext);
Uses the UserContext to access the user object.
useEffect Hook:

useEffect(() => { ... }, [user]);
Fetches orders when the user changes.
Calls fetchOrdersByUserId if the user object is available.
Order Cancellation Handler:

const handleCancelOrder = async (orderId) => { ... };
Defines an asynchronous function to handle order cancellation.
Makes a PUT request to the cancelOrder endpoint with the order ID.
Refreshes the orders list after cancellation.
Logout Handler:

const clickHandleLogout = () => { ... };
Defines a function to handle user logout.
Removes the userData item from local storage.
Fetch Orders Function:

const fetchOrdersByUserId = async () => { ... };
Defines an asynchronous function to fetch orders by user ID.
Makes a GET request to the getAllOrders endpoint with the user ID.
Sets the orders state with the fetched data.
Handles any errors that occur during the fetch process.
Conditional Rendering:

if (loading) { return <div>Loading...</div>; }
Displays a loading message while fetching data.
if (error) { return <div>{error}</div>; }
Displays an error message if there is an error.
Return Statement:

return ( ... );
Returns the JSX that defines the structure and content of the Order component.
Navbar:

<nav class="navbar navbar-expand-md navbar-light homenav"> ... </nav>
Defines a responsive navigation bar with links to different pages.
Main Content:

<div className="container mt-4"> ... </div>
Defines the main content area of the page.
Contains a list of orders with details and a cancel button for each order.
Export:

export default Order;
Exports the Order component as the default export of the module.
This allows other modules to import and use the Order component.*/
