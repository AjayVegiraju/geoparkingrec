// MainSection.jsx
import React from 'react';
import './MainSection.css';

const MainSection = () => {
  return (
    <section className="main-section">
      <div className="main-section-bg">
        <div className="main-section-content">
          <h1>The way the world travels is changing</h1>
          <p>Increasing the operational efficiency of Robotaxi eAV usage to address climate change</p>
        </div>
      </div>
      <div className="cards-container">
        <div className="card" data-aos="fade-up">
          <div className="card-icon"><i className="fas fa-car"></i></div>
          <h3>Transportation</h3>
          <p>Helping bring Robotaxi service to the world</p>
        </div>
        <div className="card" data-aos="fade-up">
          <div className="card-icon"><i className="fas fa-leaf"></i></div>
          <h3>A green play</h3>
          <p>A component in helping to address climate change</p>
        </div>
        <div className="card" data-aos="fade-up">
          <div className="card-icon"><i className="fas fa-map-marker-alt"></i></div>
          <h3>Our sweet spot</h3>
          <p>Strategically located metro area parking for eAVs</p>
        </div>
      </div>
      <div id="services" className="services-section">
        <div className="services-title">
          <h2>Services</h2>
        </div>
        <div className="additional-text">
          ALL ROBOTAXI/EAV SERVICES USED IN THE WILD:
          <span>CHARGING, CLEANING, WASHING, TECH CHECK, & OTHER...</span>
        </div>
        <div className="services-content">
          <div className="service-item" data-aos="fade-left">
            <div className="image-container">
              <img src="src/assets/4k-wallpaper-sports-cars-on-track-v0-3kgox8x929sa1.jpg" alt="Service 1" />
            </div>
            <div className="text-container">
              <h3>Building the infrastructure today for a better tomorrow</h3>
              <p>The next generation of Autonomous Vehicle transportation may be a more significant global economic game-changer than the internet or going from horses to cars!</p>
              <a href="#">GET TO KNOW US</a>
            </div>
          </div>
          <div className="service-item" data-aos="fade-right">
            <div className="image-container">
              <img src="src/assets/4k-wallpaper-sports-cars-on-track-v0-3kgox8x929sa1.jpg" alt="Service 2" />
            </div>
            <div className="text-container">
              <h3>A modern-day solution</h3>
              <p>GeoParking Technologies, Inc. (GPT) provides parking and operational infrastructure for Robotaxi fleets of electric Autonomous Vehicles (eAV’s).</p>
              <a href="#">GET TO KNOW US</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainSection;
