import React from 'react';
import './Eventtype.css';

const EventType = () => {
  return (
    <div>
    <div className="online-event-container">
    <h1 className="unplugged-header">EVENT TYPES</h1>
    <div className="event-section">
      <h2>Birthday Party</h2>
      <img
        src="https://images.unsplash.com/photo-1502035618526-6b2f1f5bca1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJpcnRoZGF5JTIwcGFydHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        alt="Birthday Party Event"
      />
      <p>A birthday party is a joyous celebration held to commemorate the anniversary of a person's birth. Typically, it involves inviting friends and family to come together for a special gathering. 
      The party often includes elements such as decorations, a birthday cake with candles to make a wish, singing "Happy Birthday," giving and receiving gifts, games, and delicious food and drinks.</p>
    </div>
      <div className="event-section">
        <h2>Online Events</h2>
        <img
          src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b25saW5lJTIwZXZldHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          alt="Online Event"
        />
        <p>Online events are digital gatherings hosted on the internet. They bring people together virtually to share information, collaborate, or celebrate, often utilizing video conferencing and interactive platforms. 
        Online events can include webinars, virtual conferences, livestreamed performances, and social gatherings, providing accessibility and convenience for participants worldwide.</p>
      </div>

      <div className="event-section">
        <h2>Concerts</h2>
        <img
          src="https://images.unsplash.com/photo-1619229665876-f54b2276b7bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uY2VydHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          alt="Concert Event"
        />
        <p>Concerts are live music performances where musicians and bands perform in front of an audience. They offer a unique and immersive experience, allowing fans to connect with their favorite artists and enjoy music in a communal setting.
        They often feature impressive lighting, sound systems, and visual effects to enhance the overall sensory experience, making concerts a beloved form of entertainment worldwide.</p>
      </div>


      <div className="event-section">
        <h2>Fairs</h2>
        <img
          src="https://images.unsplash.com/photo-1561490497-43bc900ac2d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhaXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          alt="Fair Event"
        />
        <p>Fairs are temporary events where vendors, exhibitors, and attractions gather to showcase goods, services, and entertainment. They offer a diverse range of products, food, games, and cultural experiences, creating a vibrant and festive atmosphere for attendees to enjoy. 
        Fairs can be themed, such as agricultural fairs or art fairs, and are often a source of community engagement and entertainment.</p>
      </div>
    </div>
    </div>
  );
};

export default EventType;