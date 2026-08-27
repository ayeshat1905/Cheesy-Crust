import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

import {
  FiUser,
  FiPhone,
  FiMail,
  FiUsers,
  FiCalendar,
  FiClock,
} from "react-icons/fi";

const Reservation = () => {
    const navigate = useNavigate();
  return (
    <section className="reservation">
        <div className="reservation-overlay"></div>
        <div className="reservation-content">
            <div className="reservation-heading">
                <h1>Reservation</h1>
            </div>

            <div className ="reservation-row">
                <div className="reservation-input">
                    <FiUser/>
                    <input type="text" placeholder="Your Name"/>
                </div>

                <div className="reservation-input">
                    <FiPhone/>
                    <input type="text" placeholder="Phone Number"/>
                </div>

                <div className="reservation-input">
                    <FiMail/>
                    <input type="email" placeholder=" Your Email"/>
                </div>
                  </div>

                  <div className ="reservation-row">

                <div className="reservation-input">
                    <FiUsers/>
                    <input type="number" placeholder="Number Of People"/>
                </div>

                 <div className="reservation-input">
                    <FiCalendar/>
                    <input type="" placeholder="Date"/>
                </div>

                <div className="reservation-input">
                    <FiClock/>
                    <input type="" placeholder="Time"/>
                </div>
               
<br />
<div className="reservation-button">
  <button
    type="button"
    onClick={() => navigate("/contact#reservation")}
  >
    <span className="text-normal">Book a table</span>
    <span className="text-hover">Book a table</span>
  </button>
</div>
                
         
          </div>
        </div>
        
    
    </section>
  
  )
}

export default Reservation;
