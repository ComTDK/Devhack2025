// BasicInfo.js
import React from "react";
import "./InputStyles.css"; // Import the shared CSS file

const BasicInfo = () => {
  return (
    <div className="basic-info">
      <div className="input-group">
        <h3>Name</h3>
        <input type="text" id="name" placeholder="Enter your name" />
      </div>
      <div className="input-group">
        <h3>Contact</h3>
        <p>LinkedIn / Website</p>
        <input
          type="text"
          id="linkedin"
          placeholder="Enter your LinkedIn/Website"
        />
      </div>
      <div className="input-group">
        <p>Email</p>
        <input type="text" id="email" placeholder="Enter your email" />
      </div>
      <div className="input-group">
        <h3>Education and Field of Study</h3>
        <input type="text" id="education" placeholder="Enter your education" />
      </div>
      <div className="input-group">
        <h3>Experience and Company</h3>
        <input
          type="text"
          id="company"
          placeholder="Enter your company/experience"
        />
      </div>
    </div>
  );
};

export default BasicInfo;
