import React, { useEffect, useRef } from "react";
import "./style.css";
import {
  FiArrowLeft,
  FiArrowRight,
  FiShare2,
} from "react-icons/fi";

const Masterchef = () => {
  const sliderRef = useRef(null);

  const chefs = [
    {
      id: 1,
      name: "Sarah Albert",
      role: "Senior Chef",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdxDwDrJ_Ucju462wJ73GiBSB7G-CVDw8xy2l1ncTALg&s=10",
    },
    {
      id: 2,
      name: "John Doe",
      role: "Senior Chef",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpvkEwGW2d1yTKZWw57HKl0LN0OSjllS5uoPOVAnPcWA&s=10",
    },
    {
      id: 3,
      name: "Jemy Carline",
      role: "Senior Chef",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOqMc9rjexmPDsCy4ElwCN2eFkJnfUJpIB1RHweDnaeQ&s=10",
    },
    {
      id: 4,
      name: "Cotlin Care",
      role: "Senior Chef",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0WhmmkQJ2bg9WF5osxK94Z5UBARtgYmIxwjTxuEME-w&s",
    },
    {
      id: 5,
      name: "Sarah Albert",
      role: "Senior Chef",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdxDwDrJ_Ucju462wJ73GiBSB7G-CVDw8xy2l1ncTALg&s=10",
    },
    {
      id: 6,
      name: "John Doe",
      role: "Senior Chef",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpvkEwGW2d1yTKZWw57HKl0LN0OSjllS5uoPOVAnPcWA&s=10",
    },
    {
      id: 7,
      name: "Jemy Carline",
      role: "Senior Chef",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOqMc9rjexmPDsCy4ElwCN2eFkJnfUJpIB1RHweDnaeQ&s=10",
    },
    {
      id: 8,
      name: "Cotlin Care",
      role: "Senior Chef",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0WhmmkQJ2bg9WF5osxK94Z5UBARtgYmIxwjTxuEME-w&s",
    },
  ];

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -340,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 340,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    let autoSlide;

    const startAutoSlide = () => {
      clearInterval(autoSlide);

      autoSlide = setInterval(() => {
        if (
          slider.scrollLeft + slider.clientWidth >=
          slider.scrollWidth - 10
        ) {
          slider.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        } else {
          slider.scrollBy({
            left: 340,
            behavior: "smooth",
          });
        }
      }, 2000);
    };

    const stopAutoSlide = () => {
      clearInterval(autoSlide);
    };

    startAutoSlide();

    slider.addEventListener("mouseenter", stopAutoSlide);
    slider.addEventListener("mouseleave", startAutoSlide);

    return () => {
      clearInterval(autoSlide);
      slider.removeEventListener("mouseenter", stopAutoSlide);
      slider.removeEventListener("mouseleave", startAutoSlide);
    };
  }, []);

  return (
    <section className="masterchef-section">

      <div className="masterchef-header">
        <h1>Master Chefs</h1>
      </div>

      <div className="masterchef-wrapper">

        <button
          className="masterchef-arrow masterchef-left"
          onClick={scrollLeft}
          aria-label="Previous chefs"
        >
          <span>
            <FiArrowLeft />
          </span>
        </button>

        <div
          className="masterchef-track"
          ref={sliderRef}
        >
          {chefs.map((chef) => (
            <div
              className="masterchef-card"
              key={chef.id}
            >
              <div className="masterchef-image">
                <img
                  src={chef.image}
                  alt={chef.name}
                />
              </div>

              <div className="masterchef-info">

                <div className="masterchef-details">
                  <h3>{chef.name}</h3>
                  <p>{chef.role}</p>
                </div>

                <button
                  className="masterchef-share"
                  aria-label={`Share ${chef.name}`}
                >
                  <FiShare2 />
                </button>

              </div>
            </div>
          ))}
        </div>

        <button
          className="masterchef-arrow masterchef-right"
          onClick={scrollRight}
          aria-label="Next chefs"
        >
          <span>
            <FiArrowRight />
          </span>
        </button>

      </div>

    </section>
  );
};

export default Masterchef;