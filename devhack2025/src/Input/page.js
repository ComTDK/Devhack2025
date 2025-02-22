import React from "react";
import BasicInfo from "./BasicInfo"; // Correct the import path
import "./InputStyles.css"; // Import the shared CSS file

const InputPage = () => {
  return (
    <div className="input-page">
      {/* Header */}
      <header>
        <h1>Let's hear from you!</h1>
        <p>Fill out your information</p>
      </header>

      {/* Basic Info Section */}
      <BasicInfo />

      {/* Footer with Next Button */}
      <footer>
        <button type="button" className="next-btn">
          Next
        </button>
      </footer>
    </div>
  );
};

export default InputPage;
