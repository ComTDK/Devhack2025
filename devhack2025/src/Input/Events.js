// Event.js
import React from "react";
import { FaDownload } from "react-icons/fa"; // Import the download icon
import "./Events.css";

function EventInput() {
  return (
    <div className="event">
      <h3>Did you join any events recently?</h3>

      {/* Event you met them */}
      <div className="input-group">
        <label>Event you attended:</label>
        <input type="text" placeholder="Enter event" />
      </div>

      {/* Location */}
      <div className="input-group">
        <label>Location</label>
        <input type="text" placeholder="Google Map input" />
      </div>

      <div className="upload-photo">
        <button className="upload-btn">
          <FaDownload /> Upload Photo here
        </button>
      </div>
    </div>
  );
}

export default EventInput;
