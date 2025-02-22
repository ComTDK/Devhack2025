import React from "react";
import {
  FaEnvelope,
  FaBriefcase,
  FaCalendarAlt,
  FaHiking,
  FaBook,
  FaListAlt,
  FaLightbulb,
} from "react-icons/fa"; // Importing icons
import "./View.css"; // Add any specific styles for the view here

const View = ({ name, email, experience, funFact }) => {
  return (
    <div className="main-layout">
      {/* Main Profile Section */}
      <div className="profile-container">
        <div className="profile-header">
          <img
            src="profile-photo-url"
            alt="profile"
            className="profile-photo"
          />
          <div className="profile-info">
            <h1>{name}</h1>
            <h3>Computer Science @ University of Manitoba</h3>
          </div>
        </div>

        <div className="profile-body">
          {/* Contact Section */}
          <div className="section">
            <h4>
              <FaEnvelope style={{ marginRight: "10px" }} /> Contact
            </h4>
            <p>Email: {email}</p>
          </div>

          {/* Experience and Positions Section */}
          <div className="section">
            <h4>
              <FaBriefcase style={{ marginRight: "10px" }} /> Experience and
              Positions
            </h4>
            {experience}
          </div>

          {/* Events Section */}
          <div className="section">
            <h4>
              <FaCalendarAlt style={{ marginRight: "10px" }} /> Events you
              probably met me at
            </h4>
            <p>a. CUSEC 2025</p>
            <p>b. DevHacks</p>
          </div>

          {/* Fun Fact Section */}
          <div className="section">
            <h4>
              <FaBook style={{ marginRight: "10px" }} /> Fun Fact about me
            </h4>
            <p>"{funFact}"</p>
          </div>

          {/* Hobbies Section */}
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

      {/* Sidebar for Suggestions and Follow-Ups */}
      <div className="sidebar">
        <h4>
          <FaLightbulb style={{ marginRight: "10px" }} /> Suggestions
        </h4>
        <p>
          Stay in touch! Follow up with your connections within a week for
          better retention.
        </p>

        <h4>
          <FaListAlt style={{ marginRight: "10px" }} /> Follow-Up List
        </h4>
        <ul>
          <li>Email John Doe - Discuss project collaboration</li>
          <li>Connect with Sarah on LinkedIn</li>
          <li>Follow up with Mark about the job opening</li>
          <li>Schedule a coffee chat with Alice</li>
        </ul>
      </div>
    </div>
  );
};

export default View;
