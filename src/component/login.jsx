import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/UserContext";

const api = axios.create({ baseURL: "http://localhost:8080" });

const Login = () => {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { updateUser } = useContext(UserContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.get(`/login/${email}`, {
        params: {
          password: password,
        },
      });

      // Handle the response, e.g., set user data in local storage or redirect to another page

      const userData = response.data;
      updateUser(userData);
      localStorage.setItem("userData", JSON.stringify(userData));

      history("/");
      console.log(userData);
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      {/*Navbar*/}
      <nav class="navbar navbar-expand-md navbar-light homenav" >
        <div class="container">
          <Link class="navbar-brand" to="/">NetCart</Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            
            <span className="justify-content-evenly">
          <Link to="/register">
            <button type="submit" className=" btn btn-success">
              Signup
            </button>
          </Link>
        </span>
            
          </div>
        </div>
      </nav>
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

export default Login;
