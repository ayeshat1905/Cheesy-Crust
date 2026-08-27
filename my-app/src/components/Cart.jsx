import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiTrash2,
  FiPlus,
  FiMinus,
  FiArrowLeft,
  FiShoppingBag,
} from "react-icons/fi";

import Navbar from "./Navbar";
import Footer from "./Footer";


import "./style.css";
import { useCart } from "../Context/CartContext";

const Cart = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    subtotal,
  } = useCart();

  const navigate = useNavigate();

  const delivery = subtotal > 0 ? 150 : 0;
  const total = subtotal + delivery;

  return (
    <div className="cart-page">

      <Navbar />

      {/* HERO */}

      <section className="cart-hero">
        <div className="cart-hero-overlay"></div>

        <div className="cart-hero-content">
          <h1>Shopping Cart</h1>

           <div className="breadcrumb">
     <button className="text">
  <a href="/">Home</a>
  <span>›</span>
  <span>Cart</span>
</button>
          </div>
        </div>
      </section>


      {/* CART */}

      <section className="cart-section">

        {cart.length === 0 ? (

          <div className="empty-cart">

            <div className="empty-cart-icon">
              <FiShoppingBag />
            </div>

            <h2>Your Cart is Empty</h2>

            <p>
              Looks like you haven't added anything to your cart yet.
            </p>

            <Link to="/menu" className="continue-shopping">
              Browse Our Menu
            </Link>

          </div>

        ) : (

          <div className="cart-container">

            {/* LEFT SIDE */}

            <div className="cart-products">

              <div className="cart-heading">
                <h2>Your Cart</h2>

                <span>
                  {cart.length} {cart.length === 1 ? "Item" : "Items"}
                </span>
              </div>


              {cart.map((item) => (

                <div className="cart-product" key={item.id}>

                  <div className="cart-product-image">
                    <img
                      src={item.image}
                      alt={item.name}
                    />
                  </div>


                  <div className="cart-product-info">

                    <h3>{item.name}</h3>

                    <p className="cart-product-price">
                      Rs. {item.price}
                    </p>

                    <div className="quantity-box">

                      <button
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        <FiMinus />
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() => increaseQuantity(item.id)}
                      >
                        <FiPlus />
                      </button>

                    </div>

                  </div>


                  <div className="cart-product-right">

                    <strong>
                      Rs. {(item.price * item.quantity).toFixed(0)}
                    </strong>

                    <button
                      className="remove-cart"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <FiTrash2 />
                    </button>

                  </div>

                </div>

              ))}


              <Link to="/menu" className="back-menu">
                <FiArrowLeft />
                Continue Shopping
              </Link>

            </div>


            {/* RIGHT SIDE */}

            <div className="cart-summary">

              <h2>Cart Summary</h2>

              <div className="summary-row">
                <span>Subtotal</span>

                <strong>
                  Rs. {subtotal.toFixed(0)}
                </strong>
              </div>

              <div className="summary-row">
                <span>Delivery</span>

                <strong>
                  Rs. {delivery.toFixed(0)}
                </strong>
              </div>

              <div className="summary-line"></div>

              <div className="summary-total">
                <span>Total</span>

                <strong>
                  Rs. {total.toFixed(0)}
                </strong>
              </div>


              <button
                className="checkout-btn"
                onClick={() => navigate("/checkout")}
              >
                Proceed to Checkout
              </button>

            </div>

          </div>

        )}

      </section>

      <Footer />

    </div>
  );
};

export default Cart;