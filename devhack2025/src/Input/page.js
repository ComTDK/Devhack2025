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
<<<<<<< HEAD
    if (showFunFact < 3) setShowFunFact(showFunFact + 1); // Show next section
=======
    if (showFunFact < 3) setShowFunFact(showFunFact + 1); // Show the FunFact component when the Next button is clicked
>>>>>>> main
  };

  // Function to handle "Previous" button click
  const handlePrevious = () => {
    if (showFunFact > 1) setShowFunFact(showFunFact - 1); // Go back to previous section
  };

  // **Function to send data to backend**
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    // Randomized score between 0 and 100
    const randomScore = Math.floor(Math.random() * 101);

    const userData = {
      name: name,
      contactEmail: email, // Fix column name here to match your database column
      contactLinkedIn: linkedIn, // Fix column name here
      education: education,
      experience: experience,
      score: randomScore, // Add the randomized score here
      funfact: funFact, // Fix column name here
      enjoyTalking: Math.floor(Math.random() * 10), // If you want to keep a default value
      event: event,
    };
    console.log(userData);
    try {
      const response = await fetch("http://localhost:3000/connection", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData), // Convert the object to a JSON string
      });

      if (response.ok) {
        alert("Submission successful!");

        // Clear form fields after submission
        setName("");
        setEmail("");
        setLinkedIn("");
        setEducation("");
        setExperience("");
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
    <div className="input-page">
      <header>
        <h1>Let's hear from you!</h1>
        <p>Fill out your information</p>
      </header>

      {/* Basic Info Section */}
      {showFunFact === 1 && (
        <div className="basic-info">
          <div className="input-group">
            <h4>Name</h4>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter your name"
            />
          </div>
        )}

          <div className="input-group">
            <h4>Contact</h4>
            <label>LinkedIn / Website</label>
            <input
              type="text"
              value={linkedIn}
              onChange={(event) => setLinkedIn(event.target.value)}
              placeholder="Enter your LinkedIn/Website"
            />
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
            />
          </div>
        </div>
      )}

      {/* Conditionally render other sections */}
      {showFunFact === 2 && <FunFact setEvent={setFunFact} event={funFact} />}
      {showFunFact === 3 && <EventInput setEvent={setEvent} event={event} />}

      {/* Footer with Navigation Buttons */}
      <footer>
        {showFunFact > 1 && (
          <button
            type="button"
            className="previous-btn"
            onClick={handlePrevious}
          >
            ← Previous
          </button>
        )}
        {showFunFact < 3 && (
          <button type="button" className="next-btn" onClick={handleNext}>
            Next →
          </button>
        )}
      </footer>
    </div>
  );
};

export default InputPage;
