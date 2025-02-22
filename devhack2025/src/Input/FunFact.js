import React, { useState, useEffect } from "react";
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
} from "react-icons/fa";
import "./FunFact.css";

function FunFact({ setEvent, event }) {
  const [selectedHobbies, setSelectedHobbies] = useState([]); // Track selected hobbies
  const [timeLeft, setTimeLeft] = useState(5); // Timer state (10 seconds)

  // Timer countdown effect
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleClick = (hobby) => {
    if (selectedHobbies.includes(hobby)) {
      setSelectedHobbies(selectedHobbies.filter((item) => item !== hobby));
    } else {
      setSelectedHobbies([...selectedHobbies, hobby]);
    }
  };

  return (
    <div className="fun-fact">
      <h3>Hobbies</h3>
      {/* Timer Display */}
      <p className="timer"> Mini Timer: {timeLeft}s</p>
      <label>Click on the icons that apply for you</label>
      <br />

      <div className="hobbies-grid">
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

      <div className="hobbies-grid">
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

      <div className="hobbies-grid">
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
      </div>

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
