import React, { useState, useEffect } from 'react';
import img from '../../assets/fprint.png'
import './home.css';

const HomePage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('December 23, 2024 00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (difference < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="home-section">
      <div className="main-title">
        <h1>Sagar & Priya</h1>
        <p className="wedding-date">December 23, 2024</p>
      </div>

      <div className="image-container">
        <img 
          src={img} 
          alt="Sagar and Priya" 
          className="couple-image"
        />
      </div>

      <div className="quote-container">
        <p className="quote">
          "Two souls with but a single thought,<br />
          Two hearts that beat as one."
        </p>
      </div>

      <div className="countdown-container">
        <div className="countdown-item">
          <span className="countdown-value">{timeLeft.days}</span>
          <span className="countdown-label">Days</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-value">{timeLeft.hours}</span>
          <span className="countdown-label">Hours</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-value">{timeLeft.minutes}</span>
          <span className="countdown-label">Minutes</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-value">{timeLeft.seconds}</span>
          <span className="countdown-label">Seconds</span>
        </div>
      </div>
      <a href="https://calendar.google.com/calendar/u/0/share?slt=1AQ0kP44tKVKeTG87p6Epp42nuxDv_ADe02rhvkhPT113sDlrci7QzoXI2FkpNSoLqLku8k7fnoU7ag" className='btn save'>SAVE THE DATE</a>
    </section>
  );
};

export default HomePage;