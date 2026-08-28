import React, { useState } from "react";
import "./style.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FiPlus, FiMinus } from "react-icons/fi";

const Faq = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      question: "What are your hours of operation?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      question: "What is your menu like?",
      answer:
        "Our menu includes a variety of delicious dishes prepared with fresh ingredients. We offer a selection of burgers, pasta, pizza, desserts, and other restaurant favorites.",
    },
    {
      question: "Do you have vegetarian/vegan/gluten-free options?",
      answer:
        "Yes, we offer a variety of vegetarian options and can provide suitable choices for guests with specific dietary preferences. Please ask our staff about available options.",
    },
    {
      question: "Do you offer takeout or delivery?",
      answer:
        "Yes, we offer takeout options so you can enjoy your favorite meals wherever you are. Please contact us for more information about delivery availability.",
    },
    {
      question: "Can I make a reservation? How do I do that?",
      answer:
        "Yes, you can make a reservation through our reservation form. Simply provide your name, email, phone number, number of members, date, and preferred time.",
    },
    {
      question: "Is your restaurant kid-friendly?",
      answer:
        "Yes, our restaurant welcomes families and children. We provide a comfortable and friendly atmosphere for guests of all ages.",
    },
    {
      question: "What is your menu like?",
      answer:
        "We offer a wide range of freshly prepared dishes with different flavors and choices. Our menu is designed to provide something enjoyable for every guest.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="faq-page">

      <Navbar />

      {/* ================= FAQ HERO ================= */}

      <section className="faq-hero">
        <div className="faq-hero-overlay"></div>

        <div className="faq-hero-content">
          <h1>FAQ</h1>

           <div className="breadcrumb">
     <button className="text">
  <a href="/">Home</a>
  <span>›</span>
  <span>Faq</span>
</button>
          </div>
        </div>
      </section>


      {/* ================= FAQ SECTION ================= */}

      <section className="faq-section">

        <div className="faq-header">
          <p>Frequently Asked Questions</p>
          <h2>Have Any Questions?</h2>
        </div>


        <div className="faq-container">

          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${
                openFaq === index ? "faq-active" : ""
              }`}
              key={index}
            >

              <button
                className="faq-question"
                onClick={() => toggleFaq(index)}
              >

                <span>
                  Q{index + 1}: {faq.question}
                </span>

                <span className="faq-icon">
                  {openFaq === index ? <FiMinus /> : <FiPlus />}
                </span>

              </button>


              <div
                className={`faq-answer ${
                  openFaq === index ? "answer-open" : ""
                }`}
              >
                <p>{faq.answer}</p>
              </div>

            </div>
          ))}

        </div>

      </section>


      <Footer />

    </div>
  );
};

export default Faq;