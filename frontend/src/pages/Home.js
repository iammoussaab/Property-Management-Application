import React from "react";
import "../styles/Home.css"; // Import the CSS file for styling

const Home = () => (
  <div className="home-container">
    <header className="hero-section">
      <h1>Property Management Solutions</h1>
      <p>
        Your trusted partner in managing residential and commercial properties
        with ease and efficiency.
      </p>
      <a href="/services" className="cta-button">
        Explore Our Services
      </a>
    </header>
    <section className="about-us">
      <h2>About Us</h2>
      <p>
        At Property Management Solutions, we are committed to delivering
        exceptional management services tailored to your needs. Our team of
        seasoned professionals ensures the seamless operation of your
        properties, offering personalized attention and expert solutions.
      </p>
      <a href="/about" className="learn-more">
        Learn More About Us
      </a>
    </section>
    <section className="featured-services">
      <h2>Our Core Services</h2>
      <ul>
        <li>
          <strong>Comprehensive Tenant Screening:</strong> Rigorous background
          checks to secure reliable tenants.
        </li>
        <li>
          <strong>Proactive Property Maintenance:</strong> Around-the-clock
          maintenance to maintain property standards.
        </li>
        <li>
          <strong>Efficient Leasing Management:</strong> Streamlined leasing
          processes to optimize occupancy rates.
        </li>
        <li>
          <strong>Transparent Financial Reporting:</strong> Detailed and
          transparent financial insights for your investments.
        </li>
      </ul>
      <a href="/services" className="learn-more">
        View All Services
      </a>
    </section>
    <section className="testimonials">
      <h2>Client Testimonials</h2>
      <blockquote>
        <p>
          "The professionalism and expertise of Property Management Solutions
          have significantly enhanced our property management experience. Highly
          recommended!"
        </p>
        <footer>— John Doe, Property Owner</footer>
      </blockquote>
      <blockquote>
        <p>
          "A reliable and efficient partner in property management. Their
          attention to detail and responsiveness are unparalleled."
        </p>
        <footer>— Jane Smith, Business Owner</footer>
      </blockquote>
    </section>
  </div>
);

export default Home;
