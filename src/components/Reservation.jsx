import React, { useState } from "react";
import "./style.css";

import {
  FiUser,
  FiPhone,
  FiMail,
  FiUsers,
  FiCalendar,
  FiClock,
} from "react-icons/fi";
import { api } from "../api";
import { useAuth } from "../Context/AuthContext";

const emptyForm = {
  name: "",
  phone: "",
  email: "",
  people: "",
  date: "",
  time: "",
};

const Reservation = () => {
  const { token, user } = useAuth();
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState({ type: "", text: "" });
  const [busy, setBusy] = useState(false);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "", text: "" });
    setBusy(true);

    try {
      const data = await api("/reservations", {
        method: "POST",
        token,
        body: {
          ...form,
          name: form.name || user?.name,
          email: form.email || user?.email,
        },
      });
      setStatus({ type: "success", text: data.message });
      setForm(emptyForm);
    } catch (error) {
      setStatus({ type: "error", text: error.message });
    } finally {
      setBusy(false);
    }
  };

  return (
    <section className="reservation">
      <div className="reservation-overlay"></div>
      <div className="reservation-content">
        <div className="reservation-heading">
          <h1>Reservation</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="reservation-row">
            <div className="reservation-input">
              <FiUser />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="reservation-input">
              <FiPhone />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="reservation-input">
              <FiMail />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="reservation-row">
            <div className="reservation-input">
              <FiUsers />
              <input
                type="number"
                name="people"
                min="1"
                placeholder="Number Of People"
                value={form.people}
                onChange={handleChange}
                required
              />
            </div>

            <div className="reservation-input">
              <FiCalendar />
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="reservation-input">
              <FiClock />
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                required
              />
            </div>

            
          </div>   <div className="reservation-button">
              <button type="submit" disabled={busy}>
                <span className="text-normal">
                  {busy ? "Booking..." : "Book a table"}
                </span>
                <span className="text-hover">
                  {busy ? "Booking..." : "Reserve now"}
                </span>
              </button>
            </div>
        </form>

        {status.text && (
          <p className={`form-status ${status.type}`}>{status.text}</p>
        )}
      </div>
    </section>
  );
};

export default Reservation;
