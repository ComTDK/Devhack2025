import React from "react";
import { Link } from "react-router-dom";
import { MdOutlinePersonAddAlt } from "react-icons/md";

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
      zIndex: 10, // Ensure it stays on top of other content
      marginLeft: "10px",
    },
    links: {
      display: "flex",
      flexDirection: "row", // Stack links vertically
      gap: "10px", // Space between links
      alignItems: "center", // Center items horizontally
    },
    linkButton: {
      borderRadius: "8px",
      textDecoration: "none",
      cursor: "pointer",
      textAlign: "center", // Center text inside the button
    },
  };

  return (
    <div style={sidebarStyles.sidebar}>
      <div style={sidebarStyles.links}>
        <Link
          to="/input"
          style={{
            textDecoration: "none",
            display: "flex",
            flexDirection: "row", // Stack links vertically
            gap: "5px", // Space between links
            alignItems: "center", // Center items horizontally
            fontSize: "20px", // Adjust font size as needed
            backgroundColor: "#f0f0f0", // Light gray background
            padding: "10px", // Add padding for better appearance
            borderRadius: "8px", // Rounded corners for the button
          }}
        >
          <MdOutlinePersonAddAlt size={60} />
          <div style={sidebarStyles.linkButton}>Add connection</div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
