import React from "react";

const Test = () => {
  return (
    <div className="input-page">
      {/* Header */}
      <header>
        <h1>Let's hear from you!</h1>
        <p>Fill out your information</p>
      </header>

      {/* Footer with Next Button */}
      <footer>
        <button type="button" className="next-btn">
          Next
        </button>
      </footer>
    </div>
  );
};

export default Test;
