// Importing necessary libraries and components
import React, { useContext, useState, useEffect } from "react"; // React library and hooks for state, context, and effect management
import { useParams, Link } from "react-router-dom"; // useParams hook for accessing URL parameters and Link component for navigation
import { CartContext } from "../context/CartContext"; // CartContext for managing cart state
import axios from "axios"; // Axios library for making HTTP requests

// Defining the SingleProduct component
const SingleProduct = () => {
  // Extracting productId from URL parameters
  const { productId } = useParams();
  // State to store the product details
  const [product, setProduct] = useState(null);
  // Creating an axios instance with a base URL
  const api = axios.create({
    baseURL: "http://localhost:8080",
  });
  // Using the CartContext to access the addToCart function
  const { addToCart } = useContext(CartContext);

  // useEffect hook to fetch product details when the component mounts
  useEffect(() => {
    fetchProduct(); // Call fetchProduct function to load product details
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  /**
   * Function to fetch product details from the backend
   * Makes a GET request to the /findbyid endpoint with the productId
   * Sets the product state with the fetched data
   */
  const fetchProduct = async () => {
    try {
      const response = await api.get(`/findbyid?pId=${productId}`); // Fetch product details based on productId
      setProduct(response.data); // Update product state with the fetched data
    } catch (error) {
      console.error("Error fetching product:", error); // Log any errors that occur during the fetch process
    }
  };

  // Display a loading message while waiting for the product data to load
  if (!product) {
    return <div>Loading...</div>;
  }

  /**
   * Function to handle adding the product to the cart
   * Calls the addToCart function from CartContext with the product details
   */
  const handleAddToCart = () => {
    console.log(product); // Log the product details
    addToCart(product); // Add the product to the cart
  };

  /**
   * Function to handle user logout
   * Removes user data from local storage
   */
  const clickHandleLogout = () => {
    localStorage.removeItem("userData"); // Remove user data from local storage to log out the user
  };

  return (
    <div className="singleproduct-blue-theme">
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
        <div className="card card-singleproduct" style={{ background: "#FFF7D4" }}>
          <img
            src={"https://tse1.mm.bing.net/th?id=OIP.IPKX1ZeXZbZuz9q0ssROvgHaEK&pid=Api&P=0&h=180"} // Replace this with the actual product image URL from your backend
            className="card-img-top img-thumbnail rounded mx-auto d-block" id="single-product-image"
            alt={product.pname}
          />
          <div className="card-body text-center">
            <h5 className="card-title">{product.pname}</h5>
            <p className="card-text">{product.pdesc}</p>
            <p className="card-text">Price: ${product.pprice}</p>
          </div>
          <Link to="#" className="btn btn-success" onClick={handleAddToCart}>
            Add to cart
          </Link>
        </div>
      </div>
    </div>
  );
};

// Exporting the SingleProduct component as the default export
export default SingleProduct;
