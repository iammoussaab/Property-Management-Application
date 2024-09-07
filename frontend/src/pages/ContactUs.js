import React from "react";
import "../styles/ContactUs.css";

const ContactUs = () => (
  <div className="contact-us-container">
    <section className="hero-section">
      <h1>Contact Us</h1>
      <p>
        We would love to hear from you. Please fill out the form below to get in
        touch with us.
      </p>
    </section>
    <section className="contact-us-content">
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  </div>
);

export default ContactUs;
