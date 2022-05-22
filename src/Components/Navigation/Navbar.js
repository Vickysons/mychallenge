import React from "react";
import {
  car,
  client_four,
  client_one,
  client_three,
  client_two,
  lambo,
  top,
} from "../../import";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";
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
      </div>
      <div className="section_three">
        <div className="first">
          <h1>Welcome!</h1>
          <h1>What we have to offer.</h1>
        </div>
        <div className="second">
          <div className="address">
            <div className="iconic">
              <AcUnitIcon />
              <h3>Address Pick Up</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto, ducimus?
            </p>
          </div>
          <div className="airport">
            <div className="iconic">
              <MenuBookIcon />
              <h3>Airport Travelers</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, dicta.
            </p>
          </div>
          <div className="sale">
            <div className="iconic">
              <AnnouncementIcon />
              <h3>Resources For Sales</h3>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae,
              veritatis!
            </p>
          </div>
          <div className="taxi">
            <div className="iconic">
              <DoDisturbIcon />
              <h3>Cars Hire</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, exercitationem.
            </p>
          </div>
          <div className="rank">
            <div className="iconic">
              <VerifiedUserIcon />
              <h3>Cars Ranking</h3>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore,
              mollitia.
            </p>
          </div>
          <div className="gps">
            <div className="iconic">
              <CircleNotificationsIcon />
              <h3>GPS Servicing</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, molestias!
            </p>
          </div>
        </div>
      </div>
      <div className="section_four">
        <div className="right_section">
          <h1>
            <span id="press">Press</span> <span id="app">App On</span>
          </h1>
          <h1 id="mar">The Market, Get In Mine</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ut
            vitae in accusamus sed ipsam omnis animi natus molestias labore.
          </p>
        </div>
        <div className="left_section">
          <img src={client_four} alt="" srcset="" />
        </div>
      </div>
      <div className="section_five">
        <div className="section_five_heading">
          <h1>Client's</h1>
          <h1>Testimonies</h1>
        </div>
        <div className="section_five_props">
          <div className="section_five_first">
            <img src={client_one} alt="" />
            <h3>Rodrigo Perez</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              debitis necessitatibus quas suscipit tempora numquam beatae, saepe
              nesciunt incidunt voluptatibus laboriosam illum voluptas accusamus
              quae, tempore harum ipsum fugiat ipsa!
            </p>
          </div>
          <div className="section_five_second">
            <img src={client_two} alt="" />
            <h3>James Brown</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              debitis necessitatibus quas suscipit tempora numquam beatae, saepe
              nesciunt incidunt voluptatibus laboriosam illum voluptas accusamus
              quae, tempore harum ipsum fugiat ipsa!
            </p>
          </div>
          <div className="section_five_third">
            <img src={client_three} alt="" />
            <h3>Clark Johnson</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              debitis necessitatibus quas suscipit tempora numquam beatae, saepe
              nesciunt incidunt voluptatibus laboriosam illum voluptas accusamus
              quae, tempore harum ipsum fugiat ipsa!
            </p>
          </div>
        </div>
      </div>
      <div className="section_six">
        <div className="footer">
          <div className="footer_bar">
            <div className="flash">
              <h1>F</h1>
            </div>
            <div className="lash">
              <h1>lash</h1>
            </div>
          </div>
          <h3>Lorem ipsum dolor sit amet.</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
            dignissimos quibusdam volupta{" "}
          </p>
        </div>
        <div className="footer_two">
          <h1>Documentary</h1>
          <h3>Lorem ipsum dolor sit amet.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
            assumenda in rem blanditiis eius
          </p>
        </div>
        <div className="footer_three">
          <h1>Contact</h1>
          <h3>Lorem ipsum dolor sit amet.</h3>
          <p>0802637468</p>
          <p>0905473537</p>
        </div>
      </div>
    </>
  );
}

export default navbar;
