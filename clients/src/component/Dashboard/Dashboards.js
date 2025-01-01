import React from "react";
import "./Dashboards.css"; // Import the CSS file for styling

function Dashboards() {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>Sidebar</h2>
        <ul>
          <li>Dashboard</li>
          <li>Settings</li>
          <li>Profile</li>
        </ul>
      </div>
      <div className="main-content">
        <h1>Main Content</h1>
        <p>Welcome to the dashboard!</p>
      </div>
    </div>
  );
}

export default Dashboards;
