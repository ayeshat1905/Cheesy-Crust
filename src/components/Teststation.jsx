import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const arrowDoodle =
  "data:image/png;base64,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";

const Teststation = () => {
  const navigate = useNavigate();

  const slides = [
    {
      id: 1,
      smallTitle: "High Quality Test Station",
      title: "Choosing the",
      secondTitle: "Best",
      highlight: "Quality Food",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://swigo-fast-food-react.netlify.app/assets/img1-rxTyM3WL.png",
      image2:
        "https://swigo-fast-food-react.netlify.app/assets/pic1-dlkK6NBf.png",
      image3: arrowDoodle,
    },

    {
      id: 2,
      smallTitle: "The Best Food Stations",
      title: "Where Food",
      secondTitle: "Meets",
      highlight: "Best Passion",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://swigo-fast-food-react.netlify.app/assets/img1-rxTyM3WL.png",
      image2:
        "https://swigo-fast-food-react.netlify.app/assets/pic1-dlkK6NBf.png",
      image3: arrowDoodle,
    },

    {
      id: 3,
      smallTitle: "Exploring the Delicious World",
      title: "Delicious Eats",
      secondTitle: "And",
      highlight: "Tasty Drinks",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://swigo-fast-food-react.netlify.app/assets/img1-rxTyM3WL.png",
      image2:
        "https://swigo-fast-food-react.netlify.app/assets/pic1-dlkK6NBf.png",
      image3: arrowDoodle,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(1);
  const [isLeaving, setIsLeaving] = useState(false);

  const activeSlide = slides[currentSlide - 1];

  const goToSlide = (id) => {
    if (id === currentSlide || isLeaving) return;

    setIsLeaving(true);

    setTimeout(() => {
      setCurrentSlide(id);
      setIsLeaving(false);
    }, 450);
  };

  const goPrev = () => {
    goToSlide(currentSlide === 1 ? 3 : currentSlide - 1);
  };

  const goNext = () => {
    goToSlide(currentSlide === 3 ? 1 : currentSlide + 1);
  };

  // BOOK A TABLE
  const handleBookTable = () => {
    navigate("/contact#reservation");
  };

  return (
    <div className="test-wrapper">

      <div
        className={`test-station ${
          isLeaving ? "station-leaving" : "station-entering"
        }`}
      >
        <div className="content">

          <p className="small-title">
            {activeSlide.smallTitle}
          </p>

          <h1>
            {activeSlide.title}
            <br />
            {activeSlide.secondTitle}{" "}
            <span>{activeSlide.highlight}</span>
          </h1>

          <p className="description">
            {activeSlide.description}
          </p>

          <div className="buttons">

            <button
              className="book-btn"
              onClick={handleBookTable}
            >
              <span className="text-normal">
                Book a Table
              </span>

              <span className="text-hover">
                Book a Table
              </span>
            </button>
<button
  className="view-btn"
  onClick={() => navigate("/menu")}
>
  <span className="text-normal">
    View More
  </span>

  <span className="text-hover">
    View More
  </span>
</button>

          </div>
        </div>
      </div>

      <div className="image-section">

        <img
          src={activeSlide.image}
          alt="Quality Food"
        />

        <img
          src={activeSlide.image2}
          alt="Food"
        />

        <img
          src={activeSlide.image3}
          alt="Decorative arrow"
          className="arrow-doodle"
        />

      </div>

      <div className="slide-controls">

        <button
          className="arrow-btn"
          onClick={goPrev}
        >
          &#8593;
        </button>

        <div className="slide-numbers">

          {slides.map((slide) => (
            <button
              key={slide.id}
              className={
                currentSlide === slide.id
                  ? "number active"
                  : "number"
              }
              onClick={() => goToSlide(slide.id)}
            >
              {slide.id}
            </button>
          ))}

        </div>

        <button
          className="arrow-btn"
          onClick={goNext}
        >
          &#8595;
        </button>

      </div>
    </div>
  );
};

export default Teststation;