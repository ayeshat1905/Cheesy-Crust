import React, { useRef } from "react";
import "./style.css";

import {
  FiShoppingCart,
  FiArrowLeft,
  FiArrowRight,
} from "react-icons/fi";

import { useCart } from "../Context/CartContext";

const Fromourmenu = () => {
  const slidersRef = useRef(null);

  const { addToCart } = useCart();

  const menuItems = [
    {
      id: 1,
      name: "Burger",
      price: 20,
      image:
        "https://swigo-fast-food-react.netlify.app/assets/pic1-p8n_eqV7.jpg",
    },
    {
      id: 2,
      name: "Pasta",
      price: 10,
      image:
        "https://swigo-fast-food-react.netlify.app/assets/pic2--RWF6peS.jpg",
    },
    {
      id: 3,
      name: "Tandoor",
      price: 15,
      image:
        "https://swigo-fast-food-react.netlify.app/assets/pic3-ugPxpC5c.jpg",
    },
    {
      id: 4,
      name: "Dal Fry",
      price: 65,
      image:
        "https://swigo-fast-food-react.netlify.app/assets/pic4-3aDejiAe.jpg",
    },
    {
      id: 5,
      name: "Burger",
      price: 20,
      image:
        "https://swigo-fast-food-react.netlify.app/assets/pic1-p8n_eqV7.jpg",
    },
    {
      id: 6,
      name: "Pasta",
      price: 10,
      image:
        "https://swigo-fast-food-react.netlify.app/assets/pic2--RWF6peS.jpg",
    },
    {
      id: 7,
      name: "Tandoor",
      price: 15,
      image:
        "https://swigo-fast-food-react.netlify.app/assets/pic3-ugPxpC5c.jpg",
    },
    {
      id: 8,
      name: "Dal Fry",
      price: 65,
      image:
        "https://swigo-fast-food-react.netlify.app/assets/pic4-3aDejiAe.jpg",
    },
  ];

  const scrollLeft = () => {
    if (slidersRef.current) {
      slidersRef.current.scrollBy({
        left: -330,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (slidersRef.current) {
      slidersRef.current.scrollBy({
        left: 330,
        behavior: "smooth",
      });
    }
  };

  const handleAddToCart = (item) => {
    console.log(item)
    addToCart(item);
  };

  return (
    <section className="menuSliders-section">

      <div className="menuSliders-header">
        <h1>From Our Menu</h1>
      </div>

      <div className="menuSliders-wrapper">

        {/* LEFT ARROW */}

        <button
          className="menuSliders-arrow menuSliders-left"
          onClick={scrollLeft}
          aria-label="Previous menu items"
        >
          <span className="menuSliders-circle">
            <FiArrowLeft />
          </span>
        </button>


        {/* MENU */}

        <div
          className="menuSliders-track"
          ref={slidersRef}
        >

          {menuItems.map((item) => (

            <div
              className="menuSliders-card"
              key={item.id}
            >

              <div className="menuSliders-topSeller">
                TOP SELLER
              </div>


              <div className="menuSliders-image">

                <img
                  src={item.image}
                  alt={item.name}
                />

              </div>


              <div className="menuSliders-overlay"></div>


              <div className="menuSliders-content">

                <div className="menuSliders-info">

                  <h2>{item.name}</h2>

                  <span className="menuSliders-price">
                    ${item.price.toFixed(2)}
                  </span>

                </div>


       <button
  type="button"
  className="menuSliders-cart"
  onClick={() => {
    console.log("BUTTON CLICKED");
    console.log("ITEM:", item);

    addToCart(item);
  }}
>
  <FiShoppingCart />
</button>
              </div>

            </div>

          ))}

        </div>


        {/* RIGHT ARROW */}

        <button
          className="menuSliders-arrow menuSliders-right"
          onClick={scrollRight}
          aria-label="Next menu items"
        >
          <span className="menuSliders-circle">
            <FiArrowRight />
          </span>
        </button>

      </div>

    </section>
  );
};

export default Fromourmenu;