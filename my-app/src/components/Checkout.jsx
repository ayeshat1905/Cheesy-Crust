import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiCreditCard,
} from "react-icons/fi";

import Navbar from "./Navbar";
import Footer from "./Footer";



import "./style.css";
import { useCart } from "../Context/CartContext";

const Checkout = () => {
  const {
    cart,
    subtotal,
    clearCart,
  } = useCart();

  const navigate = useNavigate();

  const [payment, setPayment] = useState("cash");

  const delivery = subtotal > 0 ? 150 : 0;
  const total = subtotal + delivery;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      return;
    }

    alert("Your order has been placed successfully!");

    clearCart();

    navigate("/");
  };

  if (cart.length === 0) {
    return (
      <div className="checkout-page">

        <Navbar />

        <div className="checkout-empty">

          <h2>Your Cart is Empty</h2>

          <p>
            Please add some delicious food before checking out.
          </p>

          <Link to="/menu">
            Go To Menu
          </Link>

        </div>

        <Footer />

      </div>
    );
  }

  return (
    <div className="checkout-page">

      <Navbar />

      {/* HERO */}

      <section className="checkout-hero">

        <div className="checkout-hero-overlay"></div>

        <div className="checkout-hero-content">

          <h1>Checkout</h1>

           <div className="breadcrumb">
     <button className="text">
  <a href="/">Home</a>
  <span>›</span>
  <span>Check out</span>
</button>
          </div>

        </div>

      </section>


      {/* CHECKOUT */}

      <section className="checkout-section">

        <form
          className="checkout-container"
          onSubmit={handleSubmit}
        >

          {/* CUSTOMER INFORMATION */}

          <div className="checkout-form">

            <h2>Billing Details</h2>

            <div className="checkout-grid">

              <div className="checkout-field">

                <label>
                  Your Name <span>*</span>
                </label>

                <div className="checkout-input">

                  <FiUser />

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>


              <div className="checkout-field">

                <label>
                  Email <span>*</span>
                </label>

                <div className="checkout-input">

                  <FiMail />

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>


              <div className="checkout-field">

                <label>
                  Phone Number <span>*</span>
                </label>

                <div className="checkout-input">

                  <FiPhone />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter Your Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>


              <div className="checkout-field">

                <label>
                  City <span>*</span>
                </label>

                <div className="checkout-input">

                  <FiMapPin />

                  <input
                    type="text"
                    name="city"
                    placeholder="Enter City"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>


              <div className="checkout-field full-field">

                <label>
                  Delivery Address <span>*</span>
                </label>

                <div className="checkout-input">

                  <FiMapPin />

                  <input
                    type="text"
                    name="address"
                    placeholder="Enter Your Complete Address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>


              <div className="checkout-field full-field">

                <label>
                  Order Notes
                </label>

                <textarea
                  name="notes"
                  placeholder="Notes about your order..."
                  value={formData.notes}
                  onChange={handleChange}
                ></textarea>

              </div>

            </div>


            {/* PAYMENT */}

            <div className="payment-section">

              <h2>Payment Method</h2>

              <label className="payment-option">

                <input
                  type="radio"
                  value="cash"
                  checked={payment === "cash"}
                  onChange={(e) => setPayment(e.target.value)}
                />

                <div>
                  <strong>Cash on Delivery</strong>
                  <p>Pay when your order arrives.</p>
                </div>

              </label>


              <label className="payment-option">

                <input
                  type="radio"
                  value="card"
                  checked={payment === "card"}
                  onChange={(e) => setPayment(e.target.value)}
                />

                <div>
                  <strong>
                    <FiCreditCard /> Card Payment
                  </strong>

                  <p>Pay securely using your card.</p>
                </div>

              </label>

            </div>

          </div>


          {/* ORDER SUMMARY */}

          <div className="checkout-summary">

            <h2>Your Order</h2>


            <div className="checkout-items">

              {cart.map((item) => (

                <div
                  className="checkout-item"
                  key={item.id}
                >

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div>

                    <h3>{item.name}</h3>

                    <p>
                      {item.quantity} × Rs.{" "}
                      {item.price}
                    </p>

                  </div>

                  <strong>
                    Rs.{" "}
                    {(item.price * item.quantity)}
                  </strong>

                </div>

              ))}

            </div>


            <div className="checkout-total-row">

              <span>Subtotal</span>

              <strong>
                Rs. {subtotal.toFixed(0)}
              </strong>

            </div>


            <div className="checkout-total-row">

              <span>Delivery</span>

              <strong>
                Rs. {delivery.toFixed(0)}
              </strong>

            </div>


            <div className="checkout-total-line"></div>


            <div className="checkout-final-total">

              <span>Total</span>

              <strong>
                Rs. {total.toFixed(0)}
              </strong>

            </div>


            <button
              type="submit"
              className="place-order-btn"
            >
              Place Order
            </button>

          </div>

        </form>

      </section>

      <Footer />

    </div>
  );
};

export default Checkout;