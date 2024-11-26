import React, { useContext, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import axios from "axios";

const SingleProduct = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const api = axios.create({
    baseURL: "http://localhost:8080",
  });
  const { addToCart } = useContext(CartContext);

  useEffect(() => {

    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await api.get(`/findbyid?pId=${productId}`); // Update the API endpoint to match your backend
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  if (!product) {
    return <div>Loading...</div>; // You can show a loading message here while waiting for the product data to load.
  }
  const handleAddToCart = () => {
    console.log(product);
    addToCart(product); // Assuming you're adding only one quantity, modify as needed
  };
  const clickHandleLogout = () => {
    localStorage.removeItem("userData");
  };
  return (
    <div className="singleproduct-blue-theme">
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
      <div className="container mt-4" >
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

export default SingleProduct;
