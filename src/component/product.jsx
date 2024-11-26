import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaFilter, FaSearch } from "react-icons/fa";
import { Form, FormControl, Button } from "react-bootstrap";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/getallproduct");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/findproduct/${searchValue}`
      );
      if (Array.isArray(response.data)) {
        setProducts(response.data);
      } else {
        setProducts([response.data]); // Wrap the single object in an array
      }
    } catch (error) {
      console.log(error.response.data);
      setProducts([]);
    }
  };
  console.log("Products:", products);
  const clickHandleLogout = () => {
    localStorage.removeItem("userData");
  };
  return (
    <div className="product-blue-theme">
      {/*Navbar*/}
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
              <li class="nav-item">
                <Link class="btn nav-link" onClick={clickHandleLogout} to="/login">SignOut</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className="container"
        style={{ marginTop: "15px", marginBottom: "15px" }}
      >
        <div
          style={{
            backgroundColor: "light-goldenroad",
            padding: "10px 20px 10px 20px",
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

export default Product;
