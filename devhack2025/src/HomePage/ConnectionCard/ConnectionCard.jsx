const ConnectionCard = ({
  width = 100,
  height = 25,
  name,
  email,
  experience,
  position,
  funFact,
  imageProfile,
  cardStyle = {
    width: width + "%",
    height: height + "%",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: "white",
    fontFamily: "Arial, sans-serif",
    marginBottom: "20px", // Add marginBottom here by default
  },
}) => {
  // const cardStyle = {
  //   width: width + "%",
  //   height: height + "%",
  //   borderRadius: "12px",
  //   overflow: "hidden",
  //   boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  //   backgroundColor: "white",
  //   fontFamily: "Arial, sans-serif",
  // };

  const headerStyle = {
    backgroundColor: "#213555",
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
    color: "white",
    top: "55px",
    left: "16px",
    textShadow:
      "1px 1px 0 #213555, " +
      "-1px -1px 0 #213555, " +
      "1px -1px 0 #213555, " +
      "-1px 1px 0 #213555, " +
      "0px 1px 0 #213555, " +
      "1px 0px 0 #213555, " +
      "0px -1px 0 #213555, " +
      "-1px 0px 0 #213555", // Creating a stroke effect
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
            src={imageProfile} // Replace with actual image path
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
          <strong>Position:</strong> {position} <br />
          <strong>Fun fact:</strong> {funFact}
        </p>
      </div>
    </div>
  );
};

export default ConnectionCard;
