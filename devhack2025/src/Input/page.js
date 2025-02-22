// InputPage.js
import React, { useState } from "react";
import FunFact from "./FunFact"; // Import the FunFact component
import "./InputStyles.css"; // Import the shared CSS file
import EventInput from "./Events";
const InputPage = () => {
  const [showFunFact, setShowFunFact] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [funFact, setFunFact] = useState("");
  const [event, setEvent] = useState("");
  // Function to handle the "Next" button click
  const handleNext = () => {
    if (showFunFact < 4) setShowFunFact(showFunFact + 1); // Show the FunFact component when the Next button is clicked
  };
  // Navigate to the previous page (back to page.js)
  const handlePrevious = () => {
    if (showFunFact > 1) setShowFunFact(showFunFact - 1);
  };
  return (
    <div className="input-page main-layout">
      {/* Header */}
      <header>
        <h1>Let's hear from you!</h1>
        <p>Fill out your information</p>
        <br />
      </header>

      {/* Basic Info Section */}
      {showFunFact === 1 && (
        <div className="basic-info">
          <div className="input-group">
            <h4>Name</h4>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.value)}
              placeholder="Enter your name"
            />
          </div>

          <div className="input-group">
            <h4>Contact</h4>
            <label>LinkedIn / Website</label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.value)}
              placeholder="Enter your LinkedIn/Website"
            />
            <label>Email</label>
            <input
              type="text"
              value={linkedIn}
              onChange={(event) => setLinkedIn(event.value)}
              placeholder="Enter your email"
            />
          </div>

          <div className="input-group">
            <h4>Education and Field of Study</h4>
            <input
              type="text"
              value={education}
              onChange={(event) => setEducation(event.value)}
              placeholder="Enter your education/field of study"
            />
          </div>

          <div className="input-group">
            <h4>Experience and Company</h4>
            <input
              value={experience}
              onChange={(event) => setExperience(event.value)}
              type="text"
              placeholder="Enter your experience/company"
            />
          </div>
        </div>
      )}

      {/* Conditionally render the FunFact component */}
      {showFunFact === 2 && <FunFact setEvent={setFunFact} event={funFact} />}

      {/* Conditionally render the Event component */}
      {showFunFact === 3 && <EventInput setEvent={setEvent} event={event} />}

      {/* Footer with Next Button */}
      <footer style={{ display: "flex", flex: 1 }}>
        <button type="button" className="next-btn" onClick={handlePrevious}>
          ← Previous
        </button>
        <button onClick={handleNext} className="next-btn">
          Next →
        </button>
      </footer>

      <div>{event}</div>
    </div>
  );
};

export default InputPage;
