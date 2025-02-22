import React, { useState } from "react";
import FunFact from "./FunFact";
import "./InputStyles.css";
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

  // Function to handle "Next" button click
  const handleNext = () => {
    if (showFunFact < 3) setShowFunFact(showFunFact + 1); // Show next section
  };

  // Function to handle "Previous" button click
  const handlePrevious = () => {
    if (showFunFact > 1) setShowFunFact(showFunFact - 1); // Go back to previous section
  };

  // **Function to send data to backend**
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    const userData = {
      name,
      email,
      education,
      experience,
      linkedIn,
      funFact,
      event,
    };

    try {
      const response = await fetch("http://localhost:3000/connection", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        alert("Submission successful!");

        // Clear form fields after submission
        setName("");
        setEmail("");
        setEducation("");
        setExperience("");
        setLinkedIn("");
        setFunFact("");
        setEvent("");
        setShowFunFact(1);
      } else {
        alert("Submission Failed.");
      }
    } catch (error) {
      console.error("Error submitting form: ", error);
    }
  };

  return (
    <div className="input-page main-layout">
      <header>
        <h1>Let's hear from you!</h1>
        <p>Fill out your information</p>
        <br />
      </header>

      {/* Form Submission */}
      <form onSubmit={handleSubmit}>
        {/* Section 1: Basic Info */}
        {showFunFact === 1 && (
          <div className="basic-info">
            <div className="input-group">
              <h4>Name</h4>
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="input-group">
              <h4>Contact</h4>
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email"
                required
              />
              <label>LinkedIn / Website</label>
              <input
                type="text"
                value={linkedIn}
                onChange={(event) => setLinkedIn(event.target.value)}
                placeholder="Enter your LinkedIn/Website"
              />
            </div>

            <div className="input-group">
              <h4>Education and Field of Study</h4>
              <input
                type="text"
                value={education}
                onChange={(event) => setEducation(event.target.value)}
                placeholder="Enter your education/field of study"
              />
            </div>

            <div className="input-group">
              <h4>Experience and Company</h4>
              <input
                value={experience}
                onChange={(event) => setExperience(event.target.value)}
                type="text"
                placeholder="Enter your experience/company"
              />
            </div>
          </div>
        )}

        {/* Section 2: Fun Fact */}
        {showFunFact === 2 && <FunFact setEvent={setFunFact} event={funFact} />}

        {/* Section 3: Event Info */}
        {showFunFact === 3 && <EventInput setEvent={setEvent} event={event} />}

        {/* Footer Navigation */}
        <footer style={{ display: "flex", flex: 1 }}>
          {showFunFact > 1 && (
            <button type="button" className="next-btn" onClick={handlePrevious}>
              ← Previous
            </button>
          )}
          {showFunFact < 3 ? (
            <button type="button" onClick={handleNext} className="next-btn">
              Next →
            </button>
          ) : (
            <button type="submit" className="next-btn">
              Submit
            </button>
          )}
        </footer>
      </form>
    </div>
  );
};

export default InputPage;
