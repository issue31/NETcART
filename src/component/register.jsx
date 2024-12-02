// Importing necessary libraries and components
import React, { useState } from "react"; // React library and useState hook for state management
import axios from "axios"; // Axios library for making HTTP requests
import { Link, useNavigate } from "react-router-dom"; // Link component for navigation and useNavigate hook for programmatic navigation
import { toast, ToastContainer } from "react-toastify"; // Toastify library for notifications
import "react-toastify/dist/ReactToastify.css"; // Importing Toastify CSS for styling notifications

// Defining the Register component
const Register = () => {
  // State variables to store form input values
  const [username, setUsername] = useState(""); // State for username input
  const [email, setEmail] = useState(""); // State for email input
  const [password, setPassword] = useState(""); // State for password input
  const [address, setAddress] = useState(""); // State for address input
  const history = useNavigate(); // useNavigate hook for programmatic navigation

  /**
   * Function to handle form submission
   * Makes a POST request to the /adduser endpoint with the form data
   * Displays a success message and redirects to the login page on successful registration
   */
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      const response = await axios.post("http://localhost:8080/adduser", {
        username,
        email,
        password,
        address,
      });
      // Handle the response, e.g., show a success message or redirect to another page
      console.log(response.data); // Log the response data
      toast.success("Registration Successful!"); // Display a success message using Toastify

      // Automatically navigate to the login page after 5 seconds
      setTimeout(() => {
        history("/login"); // Navigate to the login page
      }, 5000);
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error(error); // Log the error
    }
  };

  return (
    <div>
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
              {/* Empty list for future navigation items */}
            </ul>
          </div>
        </div>
      </nav>
      <div className="blue-gradient-theme">
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title text-center">Sign Up</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter your name"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} // Update username state on input change
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter your email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} // Update email state on input change
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter your password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} // Update password state on input change
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="address">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder="Enter your address"
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)} // Update address state on input change
                      />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">
                      Sign Up
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Toastify Container for Notifications */}
        <ToastContainer />
      </div>
    </div>
  );
};

// Exporting the Register component as the default export
export default Register;
