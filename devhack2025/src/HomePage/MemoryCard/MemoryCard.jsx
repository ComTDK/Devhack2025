const MemoryCard = ({
  width = 100,
  height = 400,
  name,
  description,
  eventDescription,
  imageEvent,
  imageProfile,
}) => {
  const cardStyle = {
    width: width + "%",
    height: height + "%",
    padding: "12px",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: "white",
    fontFamily: "Arial, sans-serif",
    marginLeft: "12px",
    marginRight: "12px",
  };

  const imageEventContainerStyle = {
    width: "100%",
    height: "75%",
    overflow: "hidden",
    border: "3px solid white",
  };

  const imageEventStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "12px",
  };

  const imageContainerStyle = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    overflow: "hidden",
    border: "3px solid white",
    backgroundColor: "#ddd",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  return (
    <div style={{ padding: "20px" }}>
      <div style={cardStyle}>
        <div style={imageEventContainerStyle}>
          <img
            src={imageEvent} // Replace with actual image path
            alt="Event"
            style={imageEventStyle}
          />
        </div>

        {/* footer */}
        <div>
          <h3 style={{ marginTop: "6px", marginBottom: "5px" }}>
            {eventDescription}
          </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
            }}
          >
            <div style={imageContainerStyle}>
              <img
                src={imageProfile} // Replace with actual image path
                alt="Profile"
                style={imageStyle}
              />
            </div>
            <div>
              <div style={{ fontWeight: "24px" }}>{name}</div>
              <div style={{ color: "gray" }}>{description}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoryCard;
