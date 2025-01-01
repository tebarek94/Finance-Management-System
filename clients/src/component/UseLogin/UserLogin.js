import React, { useState } from "react";
import "./UserLogin.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function UserLogin() {
  const navigate = useNavigate(); // Move useNavigate inside the component

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/user/login",
        formData
      );
      console.log("User logged in:", response.data);

      // Navigate to a dashboard or homepage after successful login
      navigate("/dashboards");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login User</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="login-buttons">
            <button type="submit">Login</button>
            <Link to="/signup" className="signup-link">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserLogin;
