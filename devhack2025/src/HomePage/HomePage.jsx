import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Navbar from "./Navbar";
import ConnectionCard from "./ConnectionCard/ConnectionCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="main-layout">
      {/* Main content section on the left */}
      <div className="content">
        <section className="memories">
          <h2>Look back on your memories</h2>
          <div style={{ width: "600px", margin: "auto" }}>
            <Slider {...settings}>
              <ConnectionCard
                width={200}
                height={70}
                name={"Claudius Marco Andrew"}
                email={"marco123@gmail.com"}
                experience={"Monkey Pox"}
                funFact={"Monkey in Pox"}
              ></ConnectionCard>
              <ConnectionCard width={200} height={70}></ConnectionCard>
              <ConnectionCard width={200} height={70}></ConnectionCard>
              <ConnectionCard width={200} height={70}></ConnectionCard>
              <ConnectionCard width={200} height={70}></ConnectionCard>
              <ConnectionCard width={200} height={70}></ConnectionCard>
            </Slider>
          </div>
        </section>

        <section className="connections">
          <h2>Your connections</h2>

          <ConnectionCard></ConnectionCard>
        </section>
      </div>

      {/* Sidebar with a button to go to the input page */}
      <div className="sidebar-placeholder">
        <Link to="/input">
          {/* Link to navigate to InputPage */}
          <button className="go-to-input-btn">Add Connection</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
