import "./Payment.css";
import React, { useEffect } from "react";
import Header from "./Header";
import { useStateValue } from "./Provider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { getBasketTotal } from "./reducer";
import CurrencyFormat from "react-currency-format";
import axios from "axios";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
  };

  const handleChange = function (e) {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div>
      <Header />

      <div className="payment">
        <div className="payment_container">
          <h1>
            Checkout (<Link to="/checkout">{basket.length} items</Link>)
          </h1>
          <div className="payment_section">
            <div className="payment_title">
              <h3>Delivery Address</h3>
            </div>
            <div className="payment_address">
              <p>{user ? user.email : "sharvil"}</p>
              <p>123 Fake Street</p>
              <p>Dublin, Ireland</p>
            </div>
          </div>
          <div className="payment_section">
            <div className="payment_title">
              <h3>Review Items and Delivery</h3>
            </div>
            <div className="payment_items">
              {basket?.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          </div>
          <div className="payment_section">
            <div className="payment_title">
              <h3>Payment Method</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
