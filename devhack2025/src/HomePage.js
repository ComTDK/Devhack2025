import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Navbar from "./Navbar";

const HomePage = () => {
  return (
    <div className="main-layout">
      {/* Main content section on the left */}
      <div className="content">
        <section className="memories">
          <h2>Look back on your memories</h2>
          <div className="memories-placeholder">{/* Your content here */}</div>
        </section>

        <section className="connections">
          <h2>Your connections</h2>
          <div className="connections-placeholder">
            {/* Your content here */}
          </div>
        </section>
      </div>

      {/* Sidebar with a button to go to the input page */}
      <div className="sidebar-placeholder">
        <Link to="/input">
          {" "}
          {/* Link to navigate to InputPage */}
          <button className="go-to-input-btn">Add Connection</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
