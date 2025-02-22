// FunFact.js
import React, { useState } from "react";
import {
  FaCoffee,
  FaRunning,
  FaMusic,
  FaBook,
  FaUtensils,
  FaPlane,
  FaHiking,
  FaGamepad,
  FaBicycle,
  FaPaintBrush,
  FaFish,
  FaVideo,
} from "react-icons/fa"; // Importing the icons
import { useHistory } from "react-router-dom"; // Use useHistory for routing in v5
import "./FunFact.css";

function FunFact({ setEvent, event }) {
  const [selectedHobbies, setSelectedHobbies] = useState([]); // State to track selected hobbies
  const history = useHistory(); // Use useHistory hook for navigation

  // Function to handle hobby selection
  const handleClick = (hobby) => {
    if (selectedHobbies.includes(hobby)) {
      // If hobby is already selected, remove it
      setSelectedHobbies(selectedHobbies.filter((item) => item !== hobby));
    } else {
      // If hobby is not selected, add it
      setSelectedHobbies([...selectedHobbies, hobby]);
    }
  };

  return (
    <div className="fun-fact">
      {/* <h3>Hobbies</h3>
      <label>Click on the icons that apply for you</label>
      <br />

      {/* First row of hobbies */}
      {/* <div className="hobbies-grid">
        <div
          className={`icon ${
            selectedHobbies.includes("coffee") ? "selected" : ""
          }`}
          onClick={() => handleClick("coffee")}
        >
          <FaCoffee />
        </div>
        <div
          className={`icon ${
            selectedHobbies.includes("running") ? "selected" : ""
          }`}
          onClick={() => handleClick("running")}
        >
          <FaRunning />
        </div>
        <div
          className={`icon ${
            selectedHobbies.includes("music") ? "selected" : ""
          }`}
          onClick={() => handleClick("music")}
        >
          <FaMusic />
        </div>
        <div
          className={`icon ${
            selectedHobbies.includes("reading") ? "selected" : ""
          }`}
          onClick={() => handleClick("reading")}
        >
          <FaBook />
        </div>
      </div>

      {/* Second row of hobbies */}
      {/* <div className="hobbies-grid">
        <div
          className={`icon ${
            selectedHobbies.includes("cooking") ? "selected" : ""
          }`}
          onClick={() => handleClick("cooking")}
        >
          <FaUtensils />
        </div>
        <div
          className={`icon ${
            selectedHobbies.includes("travelling") ? "selected" : ""
          }`}
          onClick={() => handleClick("travelling")}
        >
          <FaPlane />
        </div>
        <div
          className={`icon ${
            selectedHobbies.includes("hiking") ? "selected" : ""
          }`}
          onClick={() => handleClick("hiking")}
        >
          <FaHiking />
        </div>
        <div
          className={`icon ${
            selectedHobbies.includes("gaming") ? "selected" : ""
          }`}
          onClick={() => handleClick("gaming")}
        >
          <FaGamepad />
        </div>
      </div>

      {/* Third row of hobbies */}
      {/* <div className="hobbies-grid">
        <div
          className={`icon ${
            selectedHobbies.includes("cycling") ? "selected" : ""
          }`}
          onClick={() => handleClick("cycling")}
        >
          <FaBicycle />
        </div>
        <div
          className={`icon ${
            selectedHobbies.includes("painting") ? "selected" : ""
          }`}
          onClick={() => handleClick("painting")}
        >
          <FaPaintBrush />
        </div>
        <div
          className={`icon ${
            selectedHobbies.includes("fishing") ? "selected" : ""
          }`}
          onClick={() => handleClick("fishing")}
        >
          <FaFish />
        </div>
        <div
          className={`icon ${
            selectedHobbies.includes("videography") ? "selected" : ""
          }`}
          onClick={() => handleClick("videography")}
        >
          <FaVideo />
        </div>
      </div> */}
      <div className="fun-fact-input">
        <br />
        <h3>Fun fact</h3>
        <label>Tell us one fun fact about bro!</label>
        <input
          type="text"
          value={event}
          onChange={(e) => setEvent(e.target.value)}
          placeholder="Enter your fun fact"
        />
      </div>
    </div>
  );
}

export default FunFact;
