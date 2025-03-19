import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  // Define styles as objects
  const sidebarStyles = {
    sidebar: {
      position: "fixed", // Fix the sidebar in place
      top: 0, // Position at the top of the screen
      right: 100, // Position on the right side of the screen
      height: "100vh", // Full height of the viewport
      width: "120px", // Width of the sidebar
      display: "flex",
      justifyContent: "center", // Center items vertically
      alignItems: "center", // Center items horizontally
      //   backgroundColor: "#4F709C",
      zIndex: 10, // Ensure it stays on top of other content
      marginLeft: "10px",
    },
    links: {
      display: "flex",
      flexDirection: "column", // Stack links vertically
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
    <div style={sidebarStyles.sidebar}>
      <div style={sidebarStyles.links}>
        <Link to="/input" style={{ textDecoration: "none" }}>
          <div style={sidebarStyles.linkButton}>Add connection</div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
