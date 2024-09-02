import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import paymentService from "../services/paymentService";
import "../styles/PaymentList.css"; // Import CSS for styling

const PaymentList = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      const { data } = await paymentService.getPayments();
      setPayments(data.data);
    };
    fetchPayments();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this payment?")) {
      await paymentService.deletePayment(id);
      setPayments(payments.filter((payment) => payment._id !== id));
    }
  };

  return (
    <div className="payment-list">
      <h2>Payments</h2>
      <Link to="/payments/new" className="add-payment-link">
        Record New Payment
      </Link>
      <ul className="payment-items">
        {Array.isArray(payments) &&
          payments.map((payment) => (
            <li key={payment._id} className="payment-item">
              <span className="payment-details">
                {payment.tenant && payment.tenant.name} ${payment.amount} -{" "}
                {payment.settled ? "Settled" : "Pending"}
              </span>
              <div className="payment-actions">
                <Link
                  to={`/payments/${payment._id}/edit`}
                  className="edit-link"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(payment._id)}
                  className="delete-button"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PaymentList;
