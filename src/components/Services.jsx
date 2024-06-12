import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section className="services">
      <div className="services-header">
        <h2>Services</h2>
      </div>
      <div className="services-content">
        <div className="service">
          <div className="service-text-left">
            <h3>Building the infrastructure today for a better tomorrow</h3>
            <p>
              The next generation of Autonomous Vehicle transportation may be a
              more significant global economic game-changer than the internet or
              going from horses to cars!
            </p>
            <a href="/get-to-know-us">Get to know us</a>
          </div>
          <div className="service-image-right">
            <img src="" alt="Service 1" />
          </div>
        </div>
        <div className="service">
          <div className="service-image-left">
            <img src="" alt="Service 2" />
          </div>
          <div className="service-text-right">
            <h3>A modern day solution</h3>
            <p>
              GeoParking Technologies, Inc. (GPT) provides parking and operational
              infrastructure for Robotaxi fleets of electric Autonomous Vehicles
              (eAV's).
            </p>
            <a href="/get-to-know-us">Get to know us</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
