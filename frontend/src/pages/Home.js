import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/properties");
  };

  return (
    <>
      <Navbar />
      <>
        <div className="home-container">
          <header className="home-header">
            <h1>Welcome to Our Society</h1>
            <p>Your perfect place to live, connect, and thrive.</p>
            <button onClick={handleGetStarted} className="primary-button">
              Get Started
            </button>
          </header>

          <section className="about-section">
            <h2>About Our Society</h2>
            <p>
              Our society is a vibrant community where residents enjoy
              state-of-the-art amenities, green spaces, and a friendly
              atmosphere. Whether you're looking for a place to call home or an
              investment opportunity, we have something for everyone.
            </p>
          </section>

          <section className="features-section">
            <h2>Our Features</h2>
            <div className="features-grid">
              <div className="feature-item">
                <h3>Modern Homes</h3>
                <p>
                  Beautifully designed homes with the latest technology and
                  conveniences.
                </p>
              </div>
              <div className="feature-item">
                <h3>Parks & Recreation</h3>
                <p>
                  Ample green spaces, parks, and recreational areas for all
                  ages.
                </p>
              </div>
              <div className="feature-item">
                <h3>Community Events</h3>
                <p>
                  Engage with neighbors through our regular community events and
                  activities.
                </p>
              </div>
            </div>
          </section>

          <section className="testimonials-section">
            <h2>What Our Residents Say</h2>
            <div className="testimonial">
              <p>
                "Living here has been an absolute dream. The community is
                welcoming, and the amenities are top-notch!"
              </p>
              <p>- John Doe</p>
            </div>
            <div className="testimonial">
              <p>
                "I love the sense of safety and security in this society. It's
                the perfect place for my family."
              </p>
              <p>- Jane Smith</p>
            </div>
          </section>

          <footer className="home-footer">
            <p>&copy; 2024 Our Society. All Rights Reserved.</p>
          </footer>
        </div>
      </>
    </>
  );
}

export default Home;
