import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Define styles as objects
  const navbarStyles = {
    navbar: {
      position: "fixed", // Fix the navbar in place
      top: 0, // Position at the top of the screen
      left: 0, // Start from the left edge
      right: 0, // Stretch to the right edge
      display: "flex",
      justifyContent: "flex-end", // Align content to the right
      alignItems: "center", // Center items vertically
      backgroundColor: "#4F709C",
      padding: "10px 20px", // Add some padding
      zIndex: 1000, // Ensure it stays on top of other content
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Optional: Add a shadow for better visibility
      marginBottom: "10px",
    },
    links: {
      display: "flex",
      gap: "16px", // Space between links
    },
    linkButton: {
      color: "white",
      backgroundColor: "#D8C4B6",
      borderRadius: "8px",
      padding: "10px 20px",
      textDecoration: "none",
      cursor: "pointer",
      textAlign: "center", // Center text inside the button
    },
  };

  return (
    <div style={navbarStyles.navbar}>
      <div style={navbarStyles.links}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div style={navbarStyles.linkButton}>Home</div>
        </Link>
        <Link to="/profile" style={{ textDecoration: "none" }}>
          <div style={navbarStyles.linkButton}>Profile</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
