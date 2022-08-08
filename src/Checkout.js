import React from "react";
import "./Checkout.css";
import Header from "./Header";
import Subtotal from "./Subtotal";
import { useStateValue } from "./Provider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <>
      <Header />
      <div className="checkout">
        <div className="checkout__left">
          <img
            src="https://5.imimg.com/data5/QE/UV/YB/SELLER-56975382/i-will-create-10-sizes-html5-creative-banner-ads-1000x1000.jpg"
            alt="checkout"
            className="checkout__ad"
          />
          <div>
            <h2 className="checkout__title">Your Shopping Cart</h2>
            <div className="checkout__items">
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
        </div>

        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    </>
  );
}

export default Checkout;
