const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="links">
        <div
          style={{
            color: "white",
          }}
        >
          Home
        </div>
        <div
          style={{
            color: "white",
            backgroundColor: "#D8C4B6",
            borderRadius: "8px",
            padding: "10px 20px",
            marginLeft: "16px",
            textDecoration: "none",
          }}
        >
          Profile
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
