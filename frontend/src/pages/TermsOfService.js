import React from "react";
import "../styles/TermsOfService.css";

const TermsOfService = () => (
  <div className="terms-of-service-container">
    <section className="hero-section">
      <h1>Terms of Service</h1>
      <p>
        These terms of service outline the rules and regulations for the use of
        our website.
      </p>
    </section>
    <section className="terms-of-service-content">
      <div className="terms-of-service-item">
        <h2>Acceptance of Terms</h2>
        <p>
          By accessing this website, you accept these terms and conditions in
          full. Do not continue to use the website if you do not accept all of
          the terms and conditions stated on this page.
        </p>
      </div>
      <div className="terms-of-service-item">
        <h2>License</h2>
        <p>
          Unless otherwise stated, we own the intellectual property rights for
          all material on the website. All intellectual property rights are
          reserved.
        </p>
      </div>
      <div className="terms-of-service-item">
        <h2>User Comments</h2>
        <p>
          Certain parts of this website offer the opportunity for users to post
          and exchange opinions, information, material, and data. We do not
          screen, edit, publish, or review comments prior to their appearance on
          the website.
        </p>
      </div>
      <div className="terms-of-service-item">
        <h2>Contact Us</h2>
        <p>
          If you have any questions about these terms of service, please contact
          us.
        </p>
      </div>
    </section>
  </div>
);

export default TermsOfService;
