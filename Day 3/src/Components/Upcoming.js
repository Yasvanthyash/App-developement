import React from 'react';
import './Eventtype.css';

const Upcoming = () => {
  return (
    <div>
    <div className="online-event-container1">
    <h1 className="unplugged-header">UPCOMING EVENTS</h1>
    <div className="event-section">
      <h2>Concerts</h2>
      <img
        src="https://w0.peakpx.com/wallpaper/791/288/HD-wallpaper-arijit-singh-thumbnail.jpg"
        alt="Concert Event"
      />
      <ul>
      <li>Concert By: Arijth Singh</li>
      <li>Date:20-12-2023</li>
      <li>Location: Nehru Stadium,Chennai</li>
      </ul>
    </div>
     
      <div className="event-section">
        <h2>Birthday Party</h2>
        <img
          src="https://images.unsplash.com/photo-1611424564096-3b8838e8438b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNpcmN1c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Birthday Party Event" width="360" height="400"
        />
        <ul>
      <li>Conducted By: Jambo Circus</li>
      <li>Date:2-11-2023</li>
      <li>Location: VOC Ground,Coimbatore</li>
      </ul>
      </div>

      <div className="event-section">
        <h2>Book Fair</h2>
        <img
          src="https://t3.ftcdn.net/jpg/01/37/63/20/240_F_137632023_JsuYf2ajxIqgM0c2Mr78Ws8XVqiVJ4LT.jpg"
          alt="Fair Event" width="360" height="400"
        />
        <ul>
      <li>Conducted By: TamilNadu Book Association</li>
      <li>Date:2-12-2023</li>
      <li>Location: Codissia,Coimbatore</li>
      </ul>
      </div>
    </div>
    </div>
  );
};

export default Upcoming;