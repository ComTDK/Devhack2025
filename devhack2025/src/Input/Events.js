// Event.js
import React from "react";
import { FaDownload } from "react-icons/fa"; // Import the download icon
import "./Events.css";

function EventInput({ event, setEvent }) {
  return (
    <div className="event">
      <h3>Did you join any events recently?</h3>

      {/* Event you met them */}
      <div className="input-group">
        <label>Event you attended:</label>
        <input
          type="text"
          value={event}
          onChange={(e) => setEvent(e.target.value)}
          placeholder="Enter event"
        />
      </div>
    </div>
  );
}

export default EventInput;
