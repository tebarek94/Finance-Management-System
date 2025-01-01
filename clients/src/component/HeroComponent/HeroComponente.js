import React from "react";
import "./HeroComponent.css"; // Importing the CSS file

function HeroComponente() {
  return (
    <div className="hero-container">
      <h1>Welcome to Finance Management System</h1>
      <p>
        Build a user-friendly finance management dashboard with a landing page,
        authentication, and data visualization, integrating with a pre-built
        backend. Showcase skills in Chakra UI, ReactJS, Vite, TypeScript, and
        Tailwind CSS.
      </p>
      <div className="hero-buttons">
        <button>SignUp</button>
        <button>Learn more</button>
      </div>
    </div>
  );
}

export default HeroComponente;
