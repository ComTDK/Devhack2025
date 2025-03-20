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

  const handleNext = () => {
    if (showFunFact < 3) setShowFunFact(showFunFact + 1);
  };

  const handlePrevious = () => {
    if (showFunFact > 1) setShowFunFact(showFunFact - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const randomScore = Math.floor(Math.random() * 101);

    const userData = {
      name: name,
      contactEmail: email,
      contactLinkedIn: linkedIn,
      education: education,
      experience: experience,
      score: randomScore,
      funfact: funFact,
      enjoyTalking: Math.floor(Math.random() * 10),
      event: event,
    };

    console.log(userData);

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

          <div className="input-group">
            <h4>Contact</h4>
            <label>LinkedIn / Website</label>
            <input
              type="text"
              value={linkedIn}
              onChange={(event) => setLinkedIn(event.target.value)}
              placeholder="Enter your LinkedIn/Website"
            />
            <label style={{ marginTop: "12px" }}>Email</label>
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
      <footer
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "space-between",
        }}
      >
        {showFunFact > 1 && (
          <button
            type="button"
            style={{
              backgroundColor: "#2392ec",
              color: "white" /* Text color */,
              fontSize: "16px" /* Font size */,
              padding: "12px 20px" /* Button padding */,
              border: "none" /* Remove default border */,
              borderRadius: "5px" /* Rounded corners */,
              cursor: "pointer" /* Pointer cursor on hover */,
              transition:
                "background-color 0.3s ease, transform 0.3s ease" /* Smooth transition */,
            }}
            onClick={handlePrevious}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor = "#94b6f9")
            } /* Darker orange on hover */
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = "#2392ec")
            } /* Reset to original color */
          >
            ← Previous
          </button>
        )}

        {showFunFact < 3 && (
          <button
            type="button"
            onClick={handleNext}
            style={{
              backgroundColor: "#2392ec",
              color: "white" /* Text color */,
              fontSize: "16px" /* Font size */,
              padding: "12px 20px" /* Button padding */,
              border: "none" /* Remove default border */,
              borderRadius: "5px" /* Rounded corners */,
              cursor: "pointer" /* Pointer cursor on hover */,
              transition:
                "background-color 0.3s ease, transform 0.3s ease" /* Smooth transition */,
            }}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor = "#94b6f9")
            } /* Darker orange on hover */
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = "#2392ec")
            } /* Reset to original color */
          >
            Next →
          </button>
        )}
      </footer>
    </div>
  );
};

export default InputPage;
