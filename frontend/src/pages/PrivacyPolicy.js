import React from "react";
import "../styles/PrivacyPolicy.css";

const PrivacyPolicy = () => (
  <div className="privacy-policy-container">
    <section className="hero-section">
      <h1>Privacy Policy</h1>
      <p>
        Your privacy is important to us. This privacy policy explains how we
        handle your personal information.
      </p>
    </section>
    <section className="privacy-policy-content">
      <div className="privacy-policy-item">
        <h2>Information Collection</h2>
        <p>
          We collect information to provide better services to our users. This
          includes information you provide to us and information we collect
          automatically.
        </p>
      </div>
      <div className="privacy-policy-item">
        <h2>Information Use</h2>
        <p>
          We use the information we collect to provide, maintain, and improve
          our services, as well as to protect our users.
        </p>
      </div>
      <div className="privacy-policy-item">
        <h2>Information Sharing</h2>
        <p>
          We do not share personal information with companies, organizations, or
          individuals outside of our company except in the following cases: with
          your consent, for legal reasons, or to protect our users.
        </p>
      </div>
      <div className="privacy-policy-item">
        <h2>Contact Us</h2>
        <p>
          If you have any questions about this privacy policy, please contact
          us.
        </p>
      </div>
    </section>
  </div>
);

export default PrivacyPolicy;
