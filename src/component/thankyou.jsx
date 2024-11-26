import React from 'react';
import { Link } from 'react-router-dom';

const ThankYouPage = () => {
  const clickHandleLogout = () => {
    localStorage.removeItem("userData");
};
  return (
    <div className="thankyou-yellow">
      {/*Navbar*/}
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
    <div className="container mt-5">
      <div className="jumbotron text-center">
        <h1 className="display-4 text-dark"><strong>Thank you for shopping with us!</strong></h1>
        <p className="lead text-dark">Your order has been placed successfully and COD is available.</p>
      </div>
    </div>
    
    </div>
  );
};

export default ThankYouPage;
