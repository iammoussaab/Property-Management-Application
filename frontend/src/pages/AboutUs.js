import React from "react";
import "../styles/AboutUs.css";

const AboutUs = () => (
  <div className="aboutus-container">
    <section className="hero-section">
      <h1>About Us</h1>
      <p>
        Learn more about our company, our mission, and our team.
      </p>
    </section>
    <section className="aboutus-content">
      <div className="aboutus-item">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide exceptional property management services that exceed our clients' expectations.
        </p>
      </div>
      <div className="aboutus-item">
        <h2>Our Team</h2>
        <p>
          Our team consists of experienced professionals dedicated to managing your properties with the utmost care and efficiency.
        </p>
      </div>
      <div className="aboutus-item">
        <h2>Our Values</h2>
        <p>
          We value integrity, transparency, and customer satisfaction above all else.
        </p>
      </div>
      <div className="aboutus-item">
        <h2>Contact Us</h2>
        <p>
          Get in touch with us to learn more about our services and how we can help you manage your properties.
        </p>
      </div>
    </section>
  </div>
);

export default AboutUs;
