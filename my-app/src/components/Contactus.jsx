import React from "react";
import "./style.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiUser,
  FiUsers,
  FiCalendar,
} from "react-icons/fi";

// import { FaRegMessage } from "react-icons/fa";

const Contactus = () => {
  return (
    <div className="contact-page">

      <Navbar />

      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>

        <div className="contact-hero-content">
          <h1>Contact Us</h1>

          <div className="breadcrumb">
     <button className="text">
  <a href="/">Home</a>
  <span>›</span>
  <span>Contact Us</span>
</button>
          </div>
        </div>
      </section>

      <section className="contact-info-section">
        <div className="contact-info-wrapper">

          <div className="contact-card">
            <div className="contact-card-icon">
              <FiMapPin />
            </div>

            <h3>Location</h3>

            <p>
              6952 Shelley St
              <br />
              Melbourne
            </p>
          </div>

          <div className="contact-card">
            <div className="contact-card-icon">
              <FiPhone />
            </div>

            <h3>Phone Number</h3>

            <p>
              +(800) 800-900-100
             
             
            </p>
          </div>

          <div className="contact-card">
            <div className="contact-card-icon">
              <FiMail />
            </div>

            <h3>Email Address</h3>

            <p>
              Info@Webmail.com
           
            </p>
          </div>

          <div className="contact-card">
            <div className="contact-card-icon">
              <FiClock />
            </div>

            <h3>Open & Closing</h3>

            <p>
              Mon - Fri: 09:00am
              <br />
              to 07:00pm
            </p>
          </div>

        </div>
      </section>

 <section
  className="contact-reservation"
  id="reservation"
>

        <div className="reservation-container">

          <h2>Reservation</h2>

          <form className="reservation-form">

            <div className="form-group">
              <label>Your Name</label>

              <div className="input-wrapper">
                <FiUser />
                <input
                  type="text"
                  placeholder="Enter Name"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Your Email</label>

              <div className="input-wrapper">
                <FiMail />
                <input
                  type="email"
                  placeholder="info@example.com"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Your Number</label>

              <div className="input-wrapper">
                <FiPhone />
                <input
                  type="phone"
                  placeholder="Enter Number"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Members</label>

              <div className="input-wrapper">
                <FiUsers />

                <select defaultValue="">
                  <option value="" disabled>
                    Select Members
                  </option>

                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                  <option value="5">5 People</option>
                  <option value="6">6 People</option>
                  <option value="7">7 People</option>
                  <option value="8">8 People</option>
                  <option value="9">9 People</option>
                  <option value="10">10 People</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Date</label>

              <div className="input-wrapper">
                <FiCalendar />
                <input type="date" />
              </div>
            </div>

            <div className="form-group">
              <label>Time</label>

              <div className="input-wrapper">
                <FiClock />
                <input type="time" />
              </div>
            </div>

            <div className="form-group">
              <label>Message</label>

              <div className="input-wrapper message-wrapper">
                {/* <FaRegMessage /> */}

                <textarea placeholder="Write your message" ></textarea>
              </div>
            </div>

       <div className="reservation-button-wrapper">
  <button type="submit">
    <span>Book A Table</span>
  </button>
            </div>

          </form>

        </div>

      </section>

      <Footer />

    </div>
  );
};

export default Contactus;