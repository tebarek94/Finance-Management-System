import React from "react";
import { Link } from "react-router-dom";
import "./HeaderComponent.css"; // Import the CSS file

function HeaderComponent() {
  return (
    <div className="header-nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">SignUp</Link>
        </li>
      </ul>
    </div>
  );
}

export default HeaderComponent;
