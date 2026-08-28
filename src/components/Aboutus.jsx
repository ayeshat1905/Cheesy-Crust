import React from "react";
import "./style.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

import {
  FiShoppingBag,
  FiCoffee,
 
  FiTruck,
} from "react-icons/fi";
import { FaWineGlass } from "react-icons/fa";

const Aboutus = () => {
  return (
    <div className="about-page">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>

        <div className="about-hero-content">
          <h1>About Us</h1>

              <div className="breadcrumb">
     <button className="text">
  <a href="/">Home</a>
  <span>›</span>
  <span>About Us</span>
</button>
          </div>
        </div>
      </section>

      {/* ================= INVITE SECTION ================= */}
      <section className="about-invite">
    

        <div className="about-invite-content">
          <h2>We Invite you to Visit Our Restaurant</h2>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="about-video">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
            alt="Our Restaurant"
          />

          <div className="about-play-button">
            <span>▶</span>
          </div>
        </div>
      </section>

      {/* ================= WHAT WE DO ================= */}
      <section className="about-services">
        <div className="about-services-header">
          <h2>What We Do</h2>
        </div>

        <div className="about-services-container">

          <div className="about-service-card">
            <div className="about-service-icon">
              <FiShoppingBag />
            </div>

            <h3>Fresh Products</h3>

            <p>
              Lorem Ipsum is simply dummy text of the printing and
            </p>
          </div>

          <div className="about-service-card">
            <div className="about-service-icon">
              <FiCoffee />
            </div>

            <h3>Fresh Products</h3>

            <p>
              Lorem Ipsum is simply dummy text of the printing and
            </p>
          </div>

          <div className="about-service-card">
            <div className="about-service-icon">
              <FaWineGlass />
            </div>

            <h3>Fresh Products</h3>

            <p>
              Lorem Ipsum is simply dummy text of the printing and
            </p>
          </div>

          <div className="about-service-card">
            <div className="about-service-icon">
              <FiTruck />
            </div>

            <h3>Fresh Products</h3>

            <p>
              Lorem Ipsum is simply dummy text of the printing and
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Aboutus;