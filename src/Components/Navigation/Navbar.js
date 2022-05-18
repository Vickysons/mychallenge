import React from "react";
import { car, lambo } from "../../import";
import "./Navbar.css";
function navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar_logo">
          <div className="flash">
            <h1>F</h1>
          </div>
          <div className="lash">
            <h1>lash</h1>
          </div>
        </div>
        <div className="center_navbar">
          <h3 id="home">Home</h3>
          <h3 id="packages">Packages</h3>
          <h3 id="services">Services</h3>
          <h3 id="portfolio">Portfolio</h3>
          <h3 id="about">About us</h3>
        </div>
        <div className="right_navbar">
          <div className="log_in">
            <button id="log">Log In</button>
          </div>
          <div className="sign_in">
            <button id="sign">Sign In</button>
          </div>
        </div>
      </div>
      <div className="section_one">
        <div className="right_side">
          <h1>
            The fast, <span id="style">affordable </span> way to ride.
          </h1>
          <p>
            Lorem, ipsum dolor sit amet e cum excepturi, nostrum, asperiores a
            quasi quae blanditiis maxime tenetur aperiam deleniti repellat.
          </p>
          <div className="btn">
            <button id="pick">pick up</button>
            <button id="rent">rent</button>
          </div>
        </div>
        <div className="left_side">
          <img src={car} alt="image" />
        </div>
      </div>
      <div className="section_two">
        <div className="heading">
          <h1>Our</h1>
          <h1>Tarriffs</h1>
        </div>
        <div className="one">
          <div className="side_one">
            <img src={lambo} alt="image" />
            <h2>Regular Class</h2>
            <p>
              <span id="text"> Lorem ipsum dolor sit amet,</span>
              <br /> consectetur adipisicing elit. Enim, earum.
            </p>
            <h3>$1.2M</h3>
            <button id="btn_one">order now</button>
          </div>
          <div className="side_two">
            <img src={lambo} alt="image" />
            <h2>Standard Class</h2>
            <p>
              <span id="text_two"> Lorem ipsum dolor sit amet,</span>
              <br /> consectetur adipisicing elit. Enim, earum.
            </p>
            <h3>$1.5M</h3>
            <button id="btn_two">order now</button>
          </div>
          <div className="side_three">
            <img src={lambo} alt="image" />
            <h2>Luxury Class</h2>
            <p>
              <span id="text_three"> Lorem ipsum dolor sit amet,</span>
              <br /> consectetur adipisicing elit. Enim, earum.
            </p>
            <h3>$1.8M</h3>
            <button id="btn_three">order now</button>
          </div>
        </div>
        <div className="section_three">
          <div className="frist">
            <h1>Welcome!</h1>
            <h1>What we have to offer.</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default navbar;
