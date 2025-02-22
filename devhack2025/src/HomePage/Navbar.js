import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">
          {/* Link to navigate to InputPage */}
          <div
            style={{
              color: "white",
              backgroundColor: "#D8C4B6",
              borderRadius: "8px",
              padding: "10px 20px",
              marginLeft: "16px",
              textDecoration: "none",
            }}
          >
            Home
          </div>
        </Link>

        <Link to="/profile">
          {/* Link to Profile page */}
          <div
            style={{
              color: "white",
              backgroundColor: "#D8C4B6",
              borderRadius: "8px",
              padding: "10px 20px",
              marginLeft: "16px",
              textDecoration: "none",
            }}
          >
            Profile
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
