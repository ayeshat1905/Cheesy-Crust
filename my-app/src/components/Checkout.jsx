import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiCreditCard,
  FiX,
  FiCheckCircle,
} from "react-icons/fi";

import Navbar from "./Navbar";
import Footer from "./Footer";



import "./style.css";
import { useCart } from "../Context/CartContext";
import { useAuth } from "../Context/AuthContext";
import { api } from "../api";

const Checkout = () => {
  const {
    cart,
    subtotal,
    clearCart,
  } = useCart();
  const { user, token } = useAuth();
 const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const navigate = useNavigate();
 const [totalamount, setTotalamount] = useState()
  const [payment, setPayment] = useState("cash");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const delivery = subtotal > 0 ? 150 : 0;
  const total = subtotal + delivery;
const [generatedOrderId, setGeneratedOrderId] = useState("");
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "",
    address: "",
    city: "",
    notes: "",
  });

  useEffect(() => {
    if (!user) return;
    setFormData((prev) => ({
      ...prev,
      name: prev.name || user.name,
      email: prev.email || user.email,
    }));
  }, [user]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (cart.length === 0) {
      return;
    }

    setBusy(true);
setTotalamount(total)
    try {
      await api("/orders", {
        method: "POST",
        token,
        body: {
          customer: formData,
          items: cart.map((item) => ({
            id: String(item.id),
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            image: item.image || "",
          })),
          paymentMethod: payment,
          subtotal,
          delivery,
          total,
        },
      });

      clearCart();
      // Save ID if your backend sends it back (fallback to random string for UI demonstration)
      setGeneratedOrderId( "ORD-" + Math.floor(100000 + Math.random() * 900000));
      
      // Open our newly added successful popup structure
      setIsSuccessOpen(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };

  const handleCloseSuccessModal = () => {
    setIsSuccessOpen(false);
    setTotalamount("")
    navigate("/menu");
  };
  if (cart.length === 0 && !isSuccessOpen) {
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


            {error && <p className="form-status error">{error}</p>}

            <button
              type="submit"
              className="place-order-btn"
              disabled={busy}
            >
              {busy ? "Placing order..." : "Place Order"}
            </button>

          </div>

        </form>

      </section>
 {isSuccessOpen && (
        <div className="order-success-overlay">
          <div className="order-success-panel">
            <button className="order-success-close" onClick={handleCloseSuccessModal}>
              <FiX />
            </button>
            
            <div className="order-success-content">
              <div className="success-icon-wrap">
                <FiCheckCircle className="success-checkmark-icon" />
              </div>
              
              <h1>Order Placed!</h1>
              <p className="success-subtitle">
                Thank you for your purchase. Your order has been received and is being prepared.
              </p>

              <div className="order-summary-box">
                <div className="summary-row">
                  <span className="summary-label">Order ID:</span>
                  <span className="summary-value bold-text">{generatedOrderId}</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">Total Amount:</span>
                  <span className="summary-value">Rs. {totalamount}</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">Delivery Window:</span>
                  <span className="summary-value estimated-time">35 - 45 Mins</span>
                </div>
              </div>

              <div className="order-success-actions">
                <button 
                  className="primary-success-btn"
                  onClick={() => {
  setTotalamount("");
  navigate("/");
}}
                >
                  Go to home page
                </button>
                <button 
                  className="secondary-success-btn"
                  onClick={handleCloseSuccessModal}
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />

    </div>
  );
};

export default Checkout;