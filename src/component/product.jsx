// Importing necessary libraries and components
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaFilter, FaSearch } from "react-icons/fa";
import { Form, FormControl, Button } from "react-bootstrap";

// Defining the Product component
const Product = () => {
  // State to store the list of products
  const [products, setProducts] = useState([]);
  // State to store the search input value
  const [searchValue, setSearchValue] = useState("");

  // useEffect hook to fetch products when the component mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  // Function to fetch all products from the backend
  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/getallproduct");
      setProducts(response.data); // Set the products state with the fetched data
    } catch (error) {
      console.error("Error fetching products:", error); // Log any errors
    }
  };

  // Function to handle product search
  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/findproduct/${searchValue}`
      );
      if (Array.isArray(response.data)) {
        setProducts(response.data); // Set the products state with the search results
      } else {
        setProducts([response.data]); // Wrap the single object in an array
      }
    } catch (error) {
      console.log(error.response.data); // Log any errors
      setProducts([]); // Clear the products state if an error occurs
    }
  };

  // Function to handle user logout
  const clickHandleLogout = () => {
    localStorage.removeItem("userData"); // Remove user data from local storage
  };

  return (
    <div className="product-blue-theme">
      {/* Navbar */}
      <nav className="navbar navbar-expand-md navbar-light homenav">
        <div className="container">
          <Link className="navbar-brand" to="/">
            NetCart
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/order">
                  Order
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  Cart
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  SignIn
                </Link>
              </li>
              <li className="nav-item">
                <Link className="btn nav-link" onClick={clickHandleLogout} to="/login">
                  SignOut
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Search and filter section */}
      <div
        className="container"
        style={{ marginTop: "15px", marginBottom: "15px" }}
      >
        <div
          style={{
            backgroundColor: "light-goldenroad",
            padding: "10px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: "0px 0px 50px 0px rgba(0,0,0,0.2)",
            borderRadius: "6px",
          }}
        >
          <Form className="d-flex ms-lg-3">
            <FormControl
              type="text"
              placeholder="Search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              required
            />
            <Button variant="outline-light mx-1" onClick={handleSearch}>
              <FaSearch />
            </Button>
          </Form>
          <div className="dropdown">
            <button
              className="btn btn-primary"
              type="button"
              id="categoryDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <FaFilter />
            </button>
          </div>
        </div>
      </div>
      {/* Product list */}
      <div className="container mt-4">
        <h1 className="mb-4">Product Page</h1>
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4 mb-4" key={product.pid}>
              <div className="card" style={{ background: "#FFF7D4" }}>
                <img
                  src="https://tse1.mm.bing.net/th?id=OIP.IPKX1ZeXZbZuz9q0ssROvgHaEK&pid=Api&P=0&h=180" // Replace this with the actual product image URL from your backend
                  className="card-img-top"
                  alt={product.pname}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.pname}</h5>
                  <p className="card-text">{product.pdesc}</p>
                  <p className="card-text">Price: ${product.pprice}</p>
                  <Link
                    to={`/product/${product.pid}`}
                    className="btn button-buynow"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Exporting the Product component as the default export
export default Product;
