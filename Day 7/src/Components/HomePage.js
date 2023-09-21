import React from "react";
import "./homepage.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <h1 className="pname1">INDOOR EVENTS</h1>
      <h1 className="pname3">OUTDOOR EVENTS</h1>

      <div className="dropdown1">
        <img
          className="img1"
          src="https://media.istockphoto.com/id/1073455468/photo/view-inside-a-bar-no-people.webp?b=1&s=170667a&w=0&k=20&c=cmGRuWeMfDzkTRD7uqzppCqEY0gNdDDQN2qw2PzBtfs="
          alt="Indoor Event" width="400" height="250" top="90"
        />
        <div className="dropdown-content1">
          <div className="desc1">
            <h3>Indoor Event:</h3>
            Indoor Event means an event that is held exclusively indoors;
            does not include the use of decks or other open areas. It requires
            that all doors and windows be kept closed to prevent any excessive
            disturbance to Neighboring Properties. Indoor activities are carried
            out inside a space.
            <br></br>
          </div>
        </div>
      </div>

      <div className="dropdown2">
        <img
          className="img2"
          src="https://media.istockphoto.com/id/1141427484/photo/dj-mixing-outdoor-at-beach-party-festival-with-crowd-of-people-in-background-summer-nightlife.webp?b=1&s=170667a&w=0&k=20&c=MqbJdLXw1ynco1TrBLWMpKvkX3tU74wj07TXWiX9EzI="
          alt="Outdoor Event" width="400" height="250" top="90"
        />
        <div className="dropdown-content2">
          <div className="desc2">
            <h3>Outdoor Event:</h3>
            Outdoor event means an event held at a location generally without a
            permanent structure and may include organized sports games,
            auctions, picnics, concerts, art shows, or short-term events.
            Sunlight and fresh air always ensure a relaxed atmosphere. Your
            guests will enjoy moments much more in the open air.
          </div>
        </div>
      </div>

      <div className="Bg">
        <h1 className="logo1">UNPLUGGED EVENTS</h1>
        <p className="logo2">Brings you Happiness!!!</p>
        <Link to="/usersignup">
          <h1 id="home" className="home">
            New User!
          </h1>
        </Link>
        <Link to="/userlogin">
          <h1 id="about" className="about">
            Login
          </h1>
        </Link>
        <h1 className="textzz">
          <Link to={"/aboutus"}>About us</Link>
        </h1>
      </div>
    </div>
  );
};

export default Homepage;