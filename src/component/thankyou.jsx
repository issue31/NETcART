// Importing the React library
import React from 'react';
// Importing the Link component from react-router-dom for navigation
import { Link } from 'react-router-dom';

// Defining the ThankYouPage component
const ThankYouPage = () => {
  // Function to handle user logout
  const clickHandleLogout = () => {
    localStorage.removeItem("userData"); // Remove user data from local storage
  };

  return (
    <div className="thankyou-yellow">
      {/* Navbar */}
      <nav class="navbar navbar-expand-md navbar-light homenav">
        <div class="container">
          {/* Brand link */}
          <Link class="navbar-brand" to="/">NetCart</Link>
          {/* Navbar toggler for mobile view */}
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          {/* Collapsible navbar content */}
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav ml-auto">
              {/* Home link */}
              <li class="nav-item active">
                <Link class="nav-link" to="/">Home</Link>
              </li>
              {/* Products link */}
              <li class="nav-item">
                <Link class="nav-link" to="/product">Products</Link>
              </li>
              {/* Order link */}
              <li class="nav-item">
                <Link class="nav-link" to="/order">Order</Link>
              </li>
              {/* Cart link */}
              <li class="nav-item">
                <Link class="nav-link" to="/cart">Cart</Link>
              </li>
              {/* SignIn link */}
              <li class="nav-item">
                <Link class="nav-link" to="/login">SignIn</Link>
              </li>
              {/* SignOut link with logout handler */}
              <li class="nav-item">
                <Link class="btn nav-link" onClick={clickHandleLogout} to="/login">SignOut</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Main content */}
      <div className="container mt-5">
        <div className="jumbotron text-center">
          <h1 className="display-4 text-dark"><strong>Thank you for shopping with us!</strong></h1>
          <p className="lead text-dark">Your order has been placed successfully and COD is available.</p>
        </div>
      </div>
    </div>
  );
};

// Exporting the ThankYouPage component as the default export
export default ThankYouPage;
/*
Detailed Documentation
Imports:

import React from 'react';
Imports the React library, which is necessary for creating React components.
import { Link } from 'react-router-dom';
Imports the Link component from react-router-dom for navigation between different routes.
Component Definition:

const ThankYouPage = () => { ... };
Defines a functional component named ThankYouPage.
Logout Handler:

const clickHandleLogout = () => { ... };
Defines a function named clickHandleLogout that removes the userData item from local storage when called.
Return Statement:

return ( ... );
Returns the JSX that defines the structure and content of the ThankYouPage component.
Navbar:

<nav class="navbar navbar-expand-md navbar-light homenav"> ... </nav>
Defines a responsive navigation bar with links to different pages.
Includes a brand link, a toggler button for mobile view, and collapsible content with navigation links.
Main Content:

<div className="container mt-5"> ... </div>
Defines the main content area of the page.
Contains a jumbotron with a thank you message and order confirmation.
Export:

export default ThankYouPage;
Exports the ThankYouPage component as the default export of the module.
This allows other modules to import and use the ThankYouPage component.*/
