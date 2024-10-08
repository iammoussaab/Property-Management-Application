import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import Tenants from "./pages/Tenants";
import Payments from "./pages/Payments";
import Auth from "./pages/Auth";
import PropertyForm from "./components/PropertyForm";
import TenantForm from "./components/TenantForm";
import PaymentForm from "./components/PaymentForm";
import Footer from "./components/Footer";
import PropertyEditPage from "./components/PropertyEditPage";
import PaymentEditPage from "./components/PaymentEditPage";
import TenantEditPage from "./components/TenantEditPage";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import ContactUs from "./pages/ContactUs";
const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/properties/new" element={<PropertyForm />} />
      <Route path="/properties/:id/edit" element={<PropertyEditPage />} />
      <Route path="/tenants" element={<Tenants />} />
      <Route path="/tenants/new" element={<TenantForm />} />
      <Route path="/tenants/:id/edit" element={<TenantEditPage />} />
      <Route path="/payments" element={<Payments />} />
      <Route path="/payments/new" element={<PaymentForm />} />
      <Route path="/payments/:id/edit" element={<PaymentEditPage />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
