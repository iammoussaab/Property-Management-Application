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
const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/properties/new" element={<PropertyForm />} />
      <Route path="/properties/:id/edit" element={<PropertyForm />} />
      <Route path="/tenants" element={<Tenants />} />
      <Route path="/tenants/new" element={<TenantForm />} />
      <Route path="/tenants/:id/edit" element={<TenantForm />} />
      <Route path="/payments" element={<Payments />} />
      <Route path="/payments/new" element={<PaymentForm />} />
      <Route path="/payments/:id/edit" element={<PaymentForm />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
