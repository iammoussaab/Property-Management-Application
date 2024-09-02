import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import paymentService from "../services/paymentService";
import tenantService from "../services/tenantService";
import "../styles/PaymentForm.css"; // Import CSS for styling

const PaymentForm = ({ payment }) => {
  const [formData, setFormData] = useState(
    payment || {
      tenant: "",
      date: "",
      amount: 0,
      settled: false,
    }
  );
  const [tenants, setTenants] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTenants = async () => {
      const { data } = await tenantService.getTenants();
      setTenants(data.data);
    };
    fetchTenants();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "settled" ? e.target.checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (payment) {
      await paymentService.updatePayment(payment._id, formData);
    } else {
      await paymentService.addPayment(formData);
    }
    navigate("/payments");
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <label className="form-label">
        Tenant:
        <select
          name="tenant"
          value={formData.tenant}
          onChange={handleChange}
          required
          className="form-select"
        >
          <option value="">Select Tenant</option>
          {Array.isArray(tenants) &&
            tenants.map((tenant) => (
              <option key={tenant._id} value={tenant._id}>
                {tenant.name}
              </option>
            ))}
        </select>
      </label>
      <label className="form-label">
        Date:
        <input
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="form-input"
        />
      </label>
      <label className="form-label">
        Amount:
        <input
          name="amount"
          type="number"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Amount"
          required
          className="form-input"
        />
      </label>
      <label className="form-label">
        Settled:
        <input
          name="settled"
          type="checkbox"
          checked={formData.settled}
          onChange={handleChange}
          className="form-checkbox"
        />
      </label>
      <button type="submit" className="form-button">
        Save
      </button>
    </form>
  );
};

export default PaymentForm;
