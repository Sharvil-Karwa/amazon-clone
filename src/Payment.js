import "./Payment.css";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  useStripe,
  useElements,
  CardElement,
} from "@stripe/react-stripe-js";
import React, { useEffect } from "react";
import Header from "./Header";
import { useStateValue } from "./Provider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getBasketTotal } from "./reducer";
import CurrencyFormat from "react-currency-format";

const promise = loadStripe(
  "pk_test_51LaK3DSBJfHEA9CcJjTlzpyOrlfLwphQsrETjJjmUicb5dWOQVlkpcm6WdYaLhqJmEgfV8cA8E9y2WCUxnfDrvA600TnQwf8Xm"
);

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  <Elements stripe={promise}>
    const stripe = useStripe(); const elements = useElements();
  </Elements>;

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
      <Elements stripe={promise}>
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
                {basket.map((item) => (
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
              <div className="payment_details">
                <form onSubmit={handleSubmit}>
                  <CardElement onChange={handleChange} />
                  <div className="payment_priceContainer">
                    <CurrencyFormat
                      renderText={(value) => (
                        <>
                          <p>
                            Subtotal ({basket.length} items):{" "}
                            <strong>{value}</strong>
                          </p>
                        </>
                      )}
                      decimalScale={2}
                      value={getBasketTotal(basket)}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                    <button disabled={processing || disabled || succeeded}>
                      <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                    </button>
                  </div>
                  {error && <div>{error}</div>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </Elements>
    </div>
  );
}

export default Payment;
