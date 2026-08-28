import React, { useEffect, useState } from "react";
import "./style.css";

import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoPersonOutline, IoClose } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

import logo from "../assets/public/7697984_1__1_-removebg-preview.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { useAuth } from "../Context/AuthContext";

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [authError, setAuthError] = useState("");
  const [authBusy, setAuthBusy] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [signupForm, setSignupForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const location = useLocation();
  const { user, login, signup, logout } = useAuth();
  const {
    cart,
    cartCount,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    subtotal,
  } = useCart();

  useEffect(() => {
    setMenuOpen(false);
    setAccountOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle("nav-locked", menuOpen);
    return () => document.body.classList.remove("nav-locked");
  }, [menuOpen]);

  const closeAuth = () => {
    setShowLogin(false);
    setShowSignup(false);
    setAuthError("");
    setShowPassword(false);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setAuthError("");
    setAuthBusy(true);

    try {
      await login(loginForm);
      closeAuth();
      setLoginForm({ email: "", password: "" });
    } catch (error) {
      setAuthError(error.message);
    } finally {
      setAuthBusy(false);
    }
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    setAuthError("");
    setAuthBusy(true);

    try {
      await signup(signupForm);
      closeAuth();
      setSignupForm({ name: "", email: "", password: "" });
    } catch (error) {
      setAuthError(error.message);
    } finally {
      setAuthBusy(false);
    }
  };

  const handleLogout = () => {
    logout();
    setAccountOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img src={logo} alt="Cheesy Crust Logo" />
          </Link>
        </div>

        <div className="nav-links">
          <div className="nav-item">
            <NavLink to="/" end>
              Home
            </NavLink>
          </div>

          <div className="nav-item">
            <NavLink to="/menu">Menu</NavLink>
          </div>

          <div className="nav-item">
            <NavLink to="/about-us">About Us</NavLink>
          </div>

          <div className="nav-item">
            <NavLink to="/contact">Contact Us</NavLink>
          </div>
        </div>

        <div className="nav-actions">
          {user ? (
            <div className="account-wrap">
              <button
                className="login-btn account-btn"
                onClick={() => setAccountOpen((open) => !open)}
                aria-label="Account menu"
              >
                {user.name.charAt(0).toUpperCase()}
              </button>

              {accountOpen && (
                <div className="account-dropdown">
                  <p className="account-name">{user.name}</p>
                  <p className="account-email">{user.email}</p>
                  <button type="button" onClick={handleLogout}>
                    Log out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              className="login-btn"
              onClick={() => {
                setAuthError("");
                setShowLogin(true);
              }}
              aria-label="Open login"
            >
              <IoPersonOutline />
            </button>
          )}

          <button
            className="carts-btn"
            onClick={() => setShowCart(true)}
            aria-label="Open cart"
          >
            <HiOutlineShoppingBag />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>

          <button
            className={`menu-toggle ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <>
          <div
            className="mobile-menu-overlay"
            onClick={() => setMenuOpen(false)}
          ></div>
          <div className="mobile-nav">
            <NavLink to="/" end onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/menu" onClick={() => setMenuOpen(false)}>
              Menu
            </NavLink>
            <NavLink to="/about-us" onClick={() => setMenuOpen(false)}>
              About Us
            </NavLink>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
              Contact Us
            </NavLink>
          </div>
        </>
      )}

      {showCart && (
        <>
          <div
            className="cart-modal-overlay"
            onClick={() => setShowCart(false)}
          ></div>

          <div className="cart-modal">
            <div className="cart-modal-header">
              <div>
                <h2>Shopping Cart</h2>
                <p>
                  {cartCount} {cartCount === 1 ? "Item" : "Items"}
                </p>
              </div>

              <button
                className="cart-modal-close"
                onClick={() => setShowCart(false)}
              >
                <IoClose />
              </button>
            </div>

            <div className="cart-modal-body">
              {cart.length === 0 ? (
                <div className="cart-modal-empty">
                  <HiOutlineShoppingBag />
                  <h3>Your Cart is Empty</h3>
                  <p>Add some delicious food to your cart.</p>
                  <Link
                    to="/menu"
                    onClick={() => setShowCart(false)}
                    className="cart-menu-btn"
                  >
                    Browse Menu
                  </Link>
                </div>
              ) : (
                cart.map((item) => (
                  <div className="cart-modal-product" key={item.id}>
                    <img src={item.image} alt={item.name} />

                    <div className="cart-modal-product-info">
                      <h3>{item.name}</h3>
                      <p>Rs. {item.price}</p>

                      <div className="cart-modal-quantity">
                        <button onClick={() => decreaseQuantity(item.id)}>
                          −
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => increaseQuantity(item.id)}>
                          +
                        </button>
                      </div>
                    </div>

                    <div className="cart-modal-product-right">
                      <strong>Rs. {item.price * item.quantity}</strong>
                      <button
                        className="cart-modal-remove"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <IoClose />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="cart-modal-footer">
                <div className="cart-modal-total">
                  <span>Subtotal</span>
                  <strong>Rs. {subtotal}</strong>
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
          <div className="login-overlay" onClick={closeAuth}></div>

          <div className="login-panel">
            <button className="login-close" onClick={closeAuth}>
              <IoClose />
            </button>

            <form className="login-content" onSubmit={handleLogin}>
              <h1>Welcome Back</h1>
              <p className="login-subtitle">
                Sign in to place orders, book a table, and save your details.
              </p>

              <button
                type="button"
                className="google-login"
                onClick={() =>
                  setAuthError("Please sign in with your email and password.")
                }
              >
                <span className="google-icon">
                  <FcGoogle />
                </span>
                <span>Sign in with Google</span>
              </button>

              <div className="or-section">
                <span></span>
                <strong>OR</strong>
                <span></span>
              </div>

              {authError && <p className="auth-message error">{authError}</p>}

              <div className="login-field">
                <label>
                  Email<span>*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  value={loginForm.email}
                  onChange={(event) =>
                    setLoginForm({ ...loginForm, email: event.target.value })
                  }
                  required
                />
              </div>

              <div className="login-field">
                <label>
                  Password<span>*</span>
                </label>
                <div className="password-box">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Your Password"
                    value={loginForm.password}
                    onChange={(event) =>
                      setLoginForm({
                        ...loginForm,
                        password: event.target.value,
                      })
                    }
                    required
                  />
                  <span
                    className="eye-icon"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                  </span>
                </div>
              </div>

              <button className="signin-btn" type="submit" disabled={authBusy}>
                {authBusy ? "Signing in..." : "Sign In"}
              </button>

              <p className="register-text">
                Not registered?
                <span
                  onClick={() => {
                    setAuthError("");
                    setShowLogin(false);
                    setShowSignup(true);
                  }}
                >
                  {" "}
                  Register here
                </span>
              </p>
            </form>
          </div>
        </>
      )}

      {showSignup && (
        <>
          <div className="login-overlay" onClick={closeAuth}></div>

          <div className="login-panel">
            <button className="login-close" onClick={closeAuth}>
              <IoClose />
            </button>

            <form className="login-content" onSubmit={handleSignup}>
              <h1>Create Account</h1>
              <p className="login-subtitle">
                Join Cheesy Crust to order food and reserve your table.
              </p>

              <button
                type="button"
                className="google-login"
                onClick={() =>
                  setAuthError("Please create an account with your email.")
                }
              >
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

              {authError && <p className="auth-message error">{authError}</p>}

              <div className="login-field">
                <label>
                  Name<span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  value={signupForm.name}
                  onChange={(event) =>
                    setSignupForm({ ...signupForm, name: event.target.value })
                  }
                  required
                />
              </div>

              <div className="login-field">
                <label>
                  Email<span>*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  value={signupForm.email}
                  onChange={(event) =>
                    setSignupForm({ ...signupForm, email: event.target.value })
                  }
                  required
                />
              </div>

              <div className="login-field">
                <label>
                  Password<span>*</span>
                </label>
                <div className="password-box">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create Your Password"
                    value={signupForm.password}
                    onChange={(event) =>
                      setSignupForm({
                        ...signupForm,
                        password: event.target.value,
                      })
                    }
                    minLength={6}
                    required
                  />
                  <span
                    className="eye-icon"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                  </span>
                </div>
              </div>

              <button className="signin-btn" type="submit" disabled={authBusy}>
                {authBusy ? "Creating account..." : "Sign Up"}
              </button>

              <p className="register-text">
                Already have an account?
                <span
                  onClick={() => {
                    setAuthError("");
                    setShowSignup(false);
                    setShowLogin(true);
                  }}
                >
                  {" "}
                  Log In
                </span>
              </p>
            </form>
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;
