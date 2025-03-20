import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Navbar from "./Navbar";
import ConnectionCard from "./ConnectionCard/ConnectionCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MemoryCard from "./MemoryCard/MemoryCard";
import { IoCameraOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import "./Homepage.css";
import Sidebar from "./Sidebar";
const HomePage = () => {
  const settings = {
    dots: false, // Show navigation dots
    infinite: false, // Keep sliding infinitely
    speed: 500, // Smooth transition speed
    slidesToShow: 4, // Show multiple slides at once
    slidesToScroll: 1, // Move one slide at a time
    swipeToSlide: true, // Allow smooth swipe without snapping to fixed slides
    draggable: true, // Enable mouse dragging
    touchThreshold: 15, // Adjust sensitivity for smoother swipe
    variableWidth: false, // Keep slide width consistent
    centerMode: false, // Prevent center positioning that might cause overlap
  };

  return (
    <div className="main-layout">
      {/* Main content section on the left */}
      <div className="content">
        <section className="memories">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <IoCameraOutline size={40} />
            <div style={{ fontWeight: "bold", fontSize: "24px" }}>
              Look back on your memories
            </div>
          </div>

          <div style={{ width: "1200px" }}>
            <Slider {...settings}>
              <div style={{ padding: "10px" }}>
                <MemoryCard
                  imageProfile="https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Dog-512.png"
                  imageEvent="https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Dog-512.png"
                  name="Claudius Marco Andrew"
                  description="Monkey in the pox"
                  eventDescription="Career fair"
                />
              </div>
              <div style={{ padding: "10px" }}>
                <MemoryCard
                  imageProfile="https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Dog-512.png"
                  imageEvent="https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Dog-512.png"
                  name="Claudius Marco Andrew"
                  description="Monkey in the pox"
                  eventDescription="Career fair"
                />
              </div>
              <div style={{ padding: "10px" }}>
                <MemoryCard
                  imageProfile="https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Dog-512.png"
                  imageEvent="https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Dog-512.png"
                  name="Claudius Marco Andrew"
                  description="Monkey in the pox"
                  eventDescription="Career fair"
                />
              </div>
              <div style={{ padding: "10px" }}>
                <MemoryCard
                  imageProfile="https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Dog-512.png"
                  imageEvent="https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Dog-512.png"
                  name="Claudius Marco Andrew"
                  description="Monkey in the pox"
                  eventDescription="Career fair"
                />
              </div>
            </Slider>
          </div>
        </section>

        <section className="connections">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              alignItems: "center",
              marginBottom: "12px",
            }}
          >
            <FaRegHeart size={40} />
            <div
              style={{
                fontWeight: "bold",
                fontSize: "24px",
              }}
            >
              Your Connections
            </div>
          </div>
          <ConnectionCard
            width={80} // Smaller width
            height={50} // Smaller height
            name={"Claudius Marco Andrew"}
            email={"marco123@gmail.com"}
            experience={"Computer Science Student"}
            position={"2nd Year Student"}
            funFact={"I have 3 French Bulldogs waiting for me at home!"}
            imageProfile={
              "https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Dog-512.png"
            }
          ></ConnectionCard>
          <ConnectionCard
            width={80} // Smaller width
            height={50} // Smaller height
            name={"John Doe"} // Add a default name
            email={"johndoe@example.com"} // Add a default email
            experience={"Web Developer"} // Add a default experience
            position={"Junior Developer"} // Add a default position
            funFact={"I love coding!"} // Add a default fun fact
            imageProfile={
              "https://cdn-icons-png.flaticon.com/512/4775/4775486.png"
            }
          ></ConnectionCard>
          <ConnectionCard
            width={80} // Smaller width
            height={50} // Smaller height
            name={"John Doe"} // Add a default name
            email={"johndoe@example.com"} // Add a default email
            experience={"Web Developer"} // Add a default experience
            position={"Junior Developer"} // Add a default position
            funFact={"I love coding!"} // Add a default fun fact
            imageProfile={
              "https://cdn-icons-png.flaticon.com/512/4775/4775486.png"
            }
          />
          <ConnectionCard
            width={80} // Smaller width
            height={50} // Smaller height
            name={"Michael Smith"}
            email={"michael.smith@example.com"}
            experience={"Data Scientist"}
            position={"Lead Data Analyst"}
            funFact={"I’m a coffee enthusiast and a chess player!"}
            imageProfile={
              "https://cdn-icons-png.flaticon.com/512/3093/3093444.png"
            }
          />
          <ConnectionCard
            width={80} // Smaller width
            height={50} // Smaller height
            name={"Olivia Brown"}
            email={"olivia.brown@example.com"}
            experience={"Marketing Manager"}
            position={"Head of Digital Marketing"}
            funFact={"I can solve a Rubik’s Cube in under 2 minutes!"}
            imageProfile={
              "https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Penguin-512.png"
            }
          />
        </section>
      </div>

      {/* Sidebar with a button to go to the input page */}
      <div style={{ marginLeft: "20px", backgroundColor: "red" }}>
        <Sidebar></Sidebar>
      </div>
    </div>
  );
};

export default HomePage;
