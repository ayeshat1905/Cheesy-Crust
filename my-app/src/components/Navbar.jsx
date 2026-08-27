import React, { useState } from "react";
import "./style.css";

import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoPersonOutline, IoClose } from "react-icons/io5";
// import { FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

import logo from "../assets/public/7697984_1__1_-removebg-preview.png";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showCart, setShowCart] = useState(false);
const {  cart,
  cartCount,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  subtotal, } = useCart();
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Cheesy Crust Logo" />
          </Link>
        </div>

        <div className="nav-links">
          <div className="nav-item">
            <Link to="/" className="active"> Home </Link>

           {/*  <div className="dropdown-menu-home">
              <Link to="/">Welcome</Link>
              <Link to="/">Today's Special</Link>
              <Link to="/">Popular Dishes</Link>
              <Link to="/">About Restaurant</Link>
              <Link to="/">Customer Reviews</Link>
              <Link to="/">Offers and Deals</Link> 
            </div>*/}
          </div>

          <div className="nav-item">
            <Link to="/menu">Menu</Link>

           {/*  <div className="dropdown-menu-menu">
              <Link to="/menu/starters">Starters</Link>
              <Link to="/menu/main-course">Main Course</Link>
              <Link to="/menu/fast-food">Fast Food</Link>
              <Link to="/menu/pizza">Pizza</Link>
              <Link to="/menu/burgers">Burgers</Link>
              <Link to="/menu/pasta">Pasta</Link>
              <Link to="/menu/desserts">Desserts</Link>
              <Link to="/menu/beverages">Beverages</Link>
            </div> */}
          </div>

          <div className="nav-item">
            <Link to="/about-us">About Us</Link>

            {/* <div className="dropdown-menu-categories">
              <Link to="/categories/vegetarian">Vegetarian</Link>
              <Link to="/categories/non-vegetarian"> Non-Vegetarian </Link>
              <Link to="/categories/spicy-food">Spicy Food</Link>
              <Link to="/categories/healthy-food">Healthy Food</Link>
              <Link to="/categories/chef-special">Chef's Special</Link>
              <Link to="/categories/combos">Combos</Link>
            </div> */}
          </div>

          <div className="nav-item">
            <Link to="/contact">Contact Us</Link>

            {/* <div className="dropdown-menu-contactus">
              <Link to="/contact">Contact Information</Link>
              <Link to="/contact">Location / Address</Link>
              <Link to="/contact">Phone Number</Link>
              <Link to="/contact">Email</Link>
              <Link to="/contact">Opening Hours</Link>
              <Link to="/contact">Social Media Links</Link>
            </div> */}
          </div>
        </div>

        <div className="nav-actions">
          <button className="login-btn"
            onClick={() => setShowLogin(true)} >
            <IoPersonOutline />
          </button>

       <button
  className="carts-btn"
  onClick={() => setShowCart(true)}
>
  <HiOutlineShoppingBag />

  {cartCount > 0 && (
    <span className="cart-count">
      {cartCount}
    </span>
  )}
</button>
        </div>
      </nav>
{showCart && (
  <>
    {/* OVERLAY */}
    <div
      className="cart-modal-overlay"
      onClick={() => setShowCart(false)}
    ></div>

    {/* CART MODAL */}
    <div className="cart-modal">

      {/* HEADER */}

      <div className="cart-modal-header">

        <div>
          <h2>Shopping Cart</h2>

          <p>
            {cartCount}{" "}
            {cartCount === 1 ? "Item" : "Items"}
          </p>
        </div>

        <button
          className="cart-modal-close"
          onClick={() => setShowCart(false)}
        >
          <IoClose />
        </button>

      </div>


      {/* PRODUCTS */}

      <div className="cart-modal-body">

        {cart.length === 0 ? (

          <div className="cart-modal-empty">

            <HiOutlineShoppingBag />

            <h3>Your Cart is Empty</h3>

            <p>
              Add some delicious food to your cart.
            </p>

            <Link
              to="/menu"
              onClick={() => setShowCart(false)}
              className="cart-menu-btn"
            >
              Browse Menu
            </Link>

          </div>

        ) : (

          <>
            {cart.map((item) => (

              <div
                className="cart-modal-product"
                key={item.id}
              >

                <img
                  src={item.image}
                  alt={item.name}
                />


                <div className="cart-modal-product-info">

                  <h3>{item.name}</h3>

                  <p>
                    Rs. {item.price}
                  </p>


                  <div className="cart-modal-quantity">

                    <button
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                    >
                      −
                    </button>

                    <span>
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                    >
                      +
                    </button>

                  </div>

                </div>


                <div className="cart-modal-product-right">

                  <strong>
                    Rs.{" "}
                    {(
                      item.price * item.quantity
                    )}
                  </strong>

                  <button
                    className="cart-modal-remove"
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                  >
                    <IoClose />
                  </button>

                </div>

              </div>

            ))}
          </>

        )}

      </div>


      {/* FOOTER */}

      {cart.length > 0 && (

        <div className="cart-modal-footer">

          <div className="cart-modal-total">

            <span>Subtotal</span>

            <strong>
              Rs. {subtotal}
            </strong>

          </div>


          <div className="cart-modal-buttons">

            <Link
              to="/cart"
              className="view-cart-btn"
              onClick={() => setShowCart(false)}
            >
              View Cart
            </Link>

            <Link
              to="/checkout"
              className="modal-checkout-btn"
              onClick={() => setShowCart(false)}
            >
              Checkout
            </Link>

          </div>

        </div>

      )}

    </div>
  </>
)}
      {showLogin && (
        <>
          <div className="login-overlay"
            onClick={() => setShowLogin(false)}  >
            </div>

          <div className="login-panel">
            <button className="login-close"
              onClick={() => setShowLogin(false)} >
              <IoClose />
            </button>

            <div className="login-content">
              <h1>Welcome Back</h1>

              <p className="login-subtitle">
                We'd love to have you join our 100% remote
                <br />
                network of creators & freelancers.
              </p>

              <button className="google-login">
                <span className="google-icon"><FcGoogle /></span>
                <span>Sign Up with Google</span>
              </button>

              <div className="or-section">
                <span></span>
                <strong>OR</strong>
                <span></span>
              </div>

              <div className="login-field">
                <label>
                  Email<span>*</span>
                </label>

                <input type="email"
                 placeholder="Enter Your Email" />
              </div>
{/* 
              <div className="login-field">
                <label>
                  Password<span>*</span>
                </label>

                <div className="password-box">
                  <input
                    type="password"
                    placeholder="Enter Your Password"
                  />

                  <span className="eye-icon">
                    <FaRegEyeSlash />
                  </span>
                </div>
              </div> */}


              <div className="login-field">
  <label>
    Password<span>*</span>
  </label>

  <div className="password-box">
    <input  type={showPassword ? "text" : "password"}
      placeholder="Enter Your Password" />

    <span  className="eye-icon"
      onClick={() => setShowPassword(!showPassword)} >
    
      {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
    </span>
  </div>
</div>

              <button className="signin-btn">
                Sign In
              </button>

              {/* <p className="register-text">
                Not registered?
                <span> Register here</span>
              </p> */}

              <p className="register-text">
                   Not registered?
  <span
    onClick={() => {
      setShowLogin(false);
      setShowSignup(true);
    }}
  >
    {" "}Register here
  </span>
</p>


            </div>
            
          </div>
        </>
        
      )}

      {showSignup && (
  <>
    <div  className="login-overlay"
      onClick={() => setShowSignup(false)} >
      </div>

    <div className="login-panel">
      <button  className="login-close"
        onClick={() => setShowSignup(false)} >
        <IoClose />
      </button>

      <div className="login-content">
        <h1>Create Account</h1>

       <p className="login-subtitle">
                We'd love to have you join our 100% remote
                <br />
                network of creators & freelancers.
              </p>

        <button className="google-login">
          <span className="google-icon">
            <FcGoogle />
          </span>
          <span>Sign Up with Google</span>
        </button>

        <div className="or-section">
          <span></span>
          <strong>OR</strong>
          <span></span>
        </div>

        <div className="login-field">
          <label>
            Name<span>*</span>
          </label>

          <input  type="text"
            placeholder="Enter Your Name" />
        </div>

        <div className="login-field">
          <label>
            Email<span>*</span>
          </label>

          <input type="email"
            placeholder="Enter Your Email"/>
        </div>

        <div className="login-field">
          <label>
            Password<span>*</span>
          </label>

          <div className="password-box">
            <input type={showPassword ? "text" : "password"}
              placeholder="Create Your Password" />

            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </span>
          </div>
        </div>

        <button className="signin-btn">
          Sign Up
        </button>

        <p className="register-text">
          Already have an account?
          <span
            onClick={() => {
              setShowSignup(false);
              setShowLogin(true);
            }}
          >
            {" "}Log In
          </span>
        </p>
      </div>
    </div>
  </>
)}
    </>

  );
}

export default Navbar;