import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import paymentService from "../services/paymentService";
import "../styles/PaymentList.css"; // Import CSS for styling

const PaymentList = () => {
  const [payments, setPayments] = useState([]);
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      await paymentService.deletePayment(id);
      setPayments(payments.filter((payment) => payment._id !== id));
      console.log("Payment deleted successfully");
    } catch (error) {
      console.error("Error deleting payment:", error);
    }
  };

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const { data } = await paymentService.getPayments();
        setPayments(data.data);
      } catch (error) {
        if (error.response && error.response.status === 400) {
          navigate("/auth"); // Redirect to login page
        } else {
          console.error("Error fetching payments:", error);
        }
      }
    };
    fetchPayments();
  }, [navigate]);

  return (
    <div className="payment-list">
      <h2>Payments</h2>
      <Link to="/payments/new" className="add-payment-link">
        Add New Payment
      </Link>
      <ul className="payment-items">
        {Array.isArray(payments) &&
          payments.map((payment) => (
            <li key={payment._id} className="payment-item">
              <span className="payment-details">
                {payment.amount} - {payment.date} - {payment.tenantName}
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
