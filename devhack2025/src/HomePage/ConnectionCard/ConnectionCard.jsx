const ConnectionCard = ({
  width = 100,
  height = 25,
  name,
  email,
  experience,
  funFact,
}) => {
  const cardStyle = {
    width: width + "%",
    height: height + "%",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: "white",
    fontFamily: "Arial, sans-serif",
  };

  const headerStyle = {
    backgroundColor: "#1e3a8a",
    color: "white",
    padding: "16px",
    display: "flex",
    alignItems: "center",
  };

  const imageContainerStyle = {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    overflow: "hidden",
    border: "3px solid white",
    backgroundColor: "#ddd",
    position: "relative",
    top: "50px",
    left: "16px",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const textContainerStyle = {
    padding: "16px",
    color: "#333",
    marginTop: "20px",
  };

  const titleStyle = {
    marginLeft: "12px",
    fontSize: "40px",
    fontWeight: "bold",
    position: "relative",
    color: "black",
    top: "55px",
    left: "16px",
  };

  const textStyle = {
    margin: "6px 0",
    fontSize: "14px",
  };

  return (
    <div style={cardStyle}>
      <div style={headerStyle}>
        <div style={imageContainerStyle}>
          <img
            src="/path-to-your-image.png" // Replace with actual image path
            alt="Profile"
            style={imageStyle}
          />
        </div>
        <h2 style={titleStyle}>{name}</h2>
      </div>
      <div style={textContainerStyle}>
        <p style={textStyle}>
          <strong>Email:</strong> {email} <br />
          <strong>Experience:</strong> {experience} <br />
          <strong>Position:</strong> <br />
          <strong>Fun fact:</strong> {funFact}
        </p>
      </div>
    </div>
  );
};

export default ConnectionCard;
