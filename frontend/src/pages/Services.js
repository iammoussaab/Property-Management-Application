import React from "react";
import "../styles/Services.css";

const Services = () => (
  <div className="services-container">
    <section className="hero-section">
      <h1>Our Services</h1>
      <p>
        We offer a wide range of property management services to meet your
        needs.
      </p>
    </section>
    <section className="services-list">
      <div className="service-item">
        <h2>Property Management</h2>
        <p>
          Comprehensive management services for residential and commercial
          properties.
        </p>
      </div>
      <div className="service-item">
        <h2>Tenant Screening</h2>
        <p>
          Thorough screening processes to ensure reliable and responsible
          tenants.
        </p>
      </div>
      <div className="service-item">
        <h2>Maintenance Services</h2>
        <p>
          Prompt and professional maintenance services to keep your property in
          top condition.
        </p>
      </div>
      <div className="service-item">
        <h2>Financial Reporting</h2>
        <p>
          Detailed financial reports to keep you informed about your property's
          performance.
        </p>
      </div>
    </section>
  </div>
);

export default Services;
