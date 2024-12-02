// Importing necessary libraries and components
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/UserContext";

// Creating an axios instance with a base URL
const api = axios.create({ baseURL: "http://localhost:8080" });

// Defining the Login component
const Login = () => {
  // Using the useNavigate hook for navigation
  const history = useNavigate();
  // State to store email input
  const [email, setEmail] = useState("");
  // State to store password input
  const [password, setPassword] = useState("");
  // Using the UserContext to access the updateUser function
  const { updateUser } = useContext(UserContext);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      // Making a GET request to the login endpoint with email and password
      const response = await api.get(`/login/${email}`, {
        params: {
          password: password,
        },
      });

      // Handle the response, e.g., set user data in local storage or redirect to another page
      const userData = response.data;
      updateUser(userData); // Update user context with the retrieved user data
      localStorage.setItem("userData", JSON.stringify(userData)); // Store user data in local storage

      history("/"); // Navigate to the home page
      console.log(userData); // Log user data to the console
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      {/* Navbar */}
      <nav class="navbar navbar-expand-md navbar-light homenav">
        <div class="container">
          <Link class="navbar-brand" to="/">NetCart</Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <span className="justify-content-evenly">
              <Link to="/register">
                <button type="submit" className="btn btn-success">
                  Signup
                </button>
              </Link>
            </span>
          </div>
        </div>
      </nav>
      {/* Login form */}
      <form onSubmit={handleSubmit} className="signin-container">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            <strong>Email</strong>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            <strong>Password</strong>
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Login
        </button>
      </form>
    </div>
  );
};

// Exporting the Login component as the default export
export default Login;
/*Detailed Documentation
Imports:

import React, { useContext, useState } from "react";
Imports React and necessary hooks (useContext, useState) from the React library.
import { Link, useNavigate } from "react-router-dom";
Imports the Link component for navigation and useNavigate hook for programmatic navigation.
import axios from "axios";
Imports the axios library for making HTTP requests.
import { UserContext } from "../context/UserContext";
Imports the UserContext to access user-related data and functions.
Axios Instance:

const api = axios.create({ baseURL: "http://localhost:8080" });
Creates an axios instance with a base URL for making HTTP requests.
Component Definition:

const Login = () => { ... };
Defines a functional component named Login.
State Management:

const [email, setEmail] = useState("");
Initializes email state to store the email input.
const [password, setPassword] = useState("");
Initializes password state to store the password input.
Context Usage:

const { updateUser } = useContext(UserContext);
Uses the UserContext to access the updateUser function.
Form Submission Handler:

const handleSubmit = async (e) => { ... };
Defines an asynchronous function to handle form submission.
Prevents the default form submission behavior.
Makes a GET request to the login endpoint with email and password.
Updates the user context and local storage with the retrieved user data.
Navigates to the home page upon successful login.
Logs user data to the console.
Handles any errors that occur during the login process.
Return Statement:

return ( ... );
Returns the JSX that defines the structure and content of the Login component.
Navbar:

<nav class="navbar navbar-expand-md navbar-light homenav"> ... </nav>
Defines a responsive navigation bar with a brand link and a signup button.
Login Form:

<form onSubmit={handleSubmit} className="signin-container"> ... </form>
Defines a form for user login.
Contains input fields for email and password, and a submit button.
Export:

export default Login;
Exports the Login component as the default export of the module.
This allows other modules to import and use the Login component.*/
