import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaBriefcase,
  FaCalendarAlt,
  FaHiking,
  FaBook,
} from "react-icons/fa"; // Importing appropriate icons
import "./View.css"; // Add any specific styles for the view here

const View = ({ name, email, experience, funFact }) => {
  return (
    <div className="main-layout profile-container">
      <div className="profile-header">
        <img src="profile-photo-url" alt="profile" className="profile-photo" />
        <div className="profile-info">
          <h1>{name}</h1>
          <h3>Computer Science @ University of Manitoba</h3>
        </div>
      </div>

      <div className="profile-body">
        {/* Contact Section with Icon */}
        <div className="section">
          <h4>
            <FaEnvelope style={{ marginRight: "10px" }} /> Contact
          </h4>
          <p>Email: {email}</p>
        </div>

        {/* Experience and Positions Section with Icon */}
        <div className="section">
          <h4>
            <FaBriefcase style={{ marginRight: "10px" }} /> Experience and
            Positions
          </h4>
          {experience}
        </div>

        {/* Events Section with Icon */}
        <div className="section">
          <h4>
            <FaCalendarAlt style={{ marginRight: "10px" }} /> Events you
            probably met me at
          </h4>
          <p>a. CUSEC 2025</p>
          <p>b. DevHacks</p>
        </div>

        {/* Fun Fact Section with Icon */}
        <div className="section">
          <h4>
            <FaBook style={{ marginRight: "10px" }} /> Fun Fact about me
          </h4>
          <p>"{funFact}"</p>
        </div>

        {/* Hobbies Section with Icon */}
        <div className="section">
          <h4>
            <FaHiking style={{ marginRight: "10px" }} /> Hobbies
          </h4>
          <ul>
            <li>Badminton</li>
            <li>Gaming</li>
            <li>Hiking</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default View;
