import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Get the userId from local storage
    if (user && user.userId) {
      fetchOrdersByUserId();
    }
    // Add user dependency to the dependency array
  }, [user]);
  const handleCancelOrder = async (orderId) => {
    const response = await axios.put(`http://localhost:8080/cancelOrder/${orderId}`);
    console.log(response.data);
    fetchOrdersByUserId();
  }
  const clickHandleLogout = () => {
    localStorage.removeItem("userData");
  };
  const fetchOrdersByUserId = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/getAllOrders/${user.userId}`);
      console.log(response.data);
      console.log("hello");
      setOrders(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching orders:", error);
      setError("Error fetching orders. Please try again later.");
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="order-blue-theme">
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
                <Link class="btn nav-link" onClick={clickHandleLogout} to="/login">SignOut</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <h1 className="mb-4">Order Page</h1>
        <div className="row">
          <div className="col-md-8" >
            {orders.map((order) => (
              <div className="card mb-3" key={order.orderId} style={{ background: "#FFD95A" }}>
                <div className="card-body">
                  <h5 className="card-title">Order ID: {order.orderId}</h5>

                  <p className="card-text">Order Date: {order.orderDate}</p>
                  <p className="card-text">Status: {order.status}</p>
                  {
                    order.status === "Booked" && (
                      <Link className="btn btn-danger btn-sm" onClick={() => handleCancelOrder(order.orderId)}>
                        Cancel Order
                      </Link>
                    )}
                  {
                    order.status === "Cancelled" && (
                      <button disabled>
                        Cancel Order
                      </button>
                    )
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Order;
