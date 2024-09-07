import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PaymentForm from "./PaymentForm";
import paymentService from "../services/paymentService";

const PaymentEditPage = () => {
  const { id } = useParams();
  const [payment, setPayment] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchPayment = async () => {
      try {
        const { data } = await paymentService.getPaymentById(id);
        setPayment(data.data);
      } catch (error) {
        console.error("Error fetching payment:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPayment();
  }, [id]);

  if (loading) return <p>Loading...</p>;

  return <PaymentForm payment={payment} />;
};

export default PaymentEditPage;
