import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link for routing
import "./UserRegistration.css"; // Importing the CSS file
import axios from "axios";

function UserRegistration() {
  const navigate = useNavigate(); // Move useNavigate inside the component
  const [formData, setFormData] = useState({
    name: "",
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

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/user/signup",
        formData
      );
      console.log("User signed up:", response.data);
      navigate("/login");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="signup-buttons">
            <button type="submit">Sign Up</button>
          </div>
        </form>
        <p>
          Already have an account? <Link to="/login">Go to Login</Link>
        </p>
      </div>
    </div>
  );
}

export default UserRegistration;
