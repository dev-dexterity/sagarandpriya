import React from 'react';
import './event.css';

const Event = ({ date, time, church, venue }) => {
  return (
    <div className="event-cards-container">
      <div className="event-card">
        <h2 className="event-title"> <span className='demo-title'>Haldi</span> OF <br /> SAGAR AND PRIYA <br /> ON </h2>
        
        <div className="event-details">
          <div className="event-datetime">
            <div className="date-container">
              <span className="calendar-icon">📅</span>
              <span className="date">22 December, 2024</span>
            </div>
            
            <div className="time-container">
              <span className="clock-icon">⏰</span>
              <span className="time">7:00 pm onwards</span>
            </div>
          </div>

          <div className="event-location">
            <p className="church">At {church}</p>
            <p className="venue"> Shanti Nagar Junona Chowk <br /> Babupeth Chandrapur <br /> Near KGN Convent
                  </p>
          </div>

          <div className="map-container">
            <div className="map-placeholder">
              <a href="https://maps.app.goo.gl/kxneRFmyr4aALhJB9" className='btn'>Click here to see the MAP</a>
            </div>
          </div>
        </div>
      </div>

      <div className="event-card">
        <h2 className="event-title"><span className='demo-title'>Wedding</span> OF <br /> SAGAR AND Priya <br /> ON </h2>
        
        <div className="event-details">
          <div className="event-datetime">
            <div className="date-container">
              <span className="calendar-icon">📅</span>
              <span className="date">23 December, 2024</span>
            </div>
            
            <div className="time-container">
              <span className="clock-icon">⏰</span>
              <span className="time">1:20 pm</span>
            </div>
          </div>

          <div className="event-location">
            <p className="church">At {church}</p>
            <p className="venue">Followed by dinner at <br /> Shakuntala Lawn
                  Nagpur Road, In front Of  Vidya Niketan, 
                  Chandrapur</p>
          </div>

          <div className="map-container">
            <div className="map-placeholder">
              <a href="https://www.google.com/maps/place/Shakuntala+Farms+Tulip+Lily+Orchid/@19.9822356,79.2741033,17z/data=!3m1!4b1!4m6!3m5!1s0x3bd2d7f02ef8a215:0x63328b91d87411c6!8m2!3d19.9822356!4d79.2766782!16s%2Fg%2F11gh7pd_6r?hl=en-GB&entry=ttu&g_ep=EgoyMDI0MTIxMC4wIKXMDSoASAFQAw%3D%3D" className='btn'>Click here to see the MAP</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
