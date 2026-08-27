import React, { useState } from "react";
import "./style.css";
import { useCart } from "../Context/CartContext";

const Specialmenu = () => {
  const [activeCard, setActiveCard] = useState(null);

  const { addToCart } = useCart();

  const menuItems = [
    {
      id: 1,
      name: "Pizza",
      price: 55,
      image:
        "https://swigo-fast-food-react.netlify.app/assets/pic1-vXqlO4BN.jpg",
    },
    {
      id: 2,
      name: "Rice",
      price: 50,
      image:
        "https://swigo-fast-food-react.netlify.app/assets/pic2-Om9B-t4P.jpg",
    },
    {
      id: 3,
      name: "Green Salad",
      price: 45,
      image:
        "https://swigo-fast-food-react.netlify.app/assets/pic3-PFs_4ETD.jpg",
    },
    {
      id: 4,
      name: "Pasta",
      price: 35,
      image:
        "https://swigo-fast-food-react.netlify.app/assets/pic4-YwsOiABv.jpg",
    },
  ];

  return (
    <div className="menu-page">

      <div className="menu-header">
        <h1>Special Menu</h1>
      </div>

      <div className="menu-container">

        <div className="bimage">
          <img
            src="https://swigo-fast-food-react.netlify.app/assets/pic2-2m40Av5X.png"
            alt=""
          />
        </div>

        <div className="wimage">
          <img
            src="https://swigo-fast-food-react.netlify.app/assets/pic3-RsfypmO1.png"
            alt=""
          />
        </div>


        {/* PIZZA */}

        <div
          className={`menu-card pizza-card ${
            activeCard === "pizza" ? "rotate-active" : ""
          }`}
          onMouseEnter={() => setActiveCard("pizza")}
          onMouseLeave={() => setActiveCard(null)}
        >

          <div className="card-top"></div>

          <div className="food-image-wrapper">
            <img
              className="special"
              src={menuItems[0].image}
              alt={menuItems[0].name}
            />
          </div>

          <div className="card-content">

            <h2>{menuItems[0].name}</h2>

            <p>
              Lorem ipsum dolor sit amit consectetur adipiscing.
            </p>

            <div className="price">
              ${menuItems[0].price.toFixed(2)}
            </div>

            <button
              className="cart-btn"
              onClick={() => addToCart(menuItems[0])}
            >
              <span className="cart-text-normal">
                Add to cart
              </span>

              <span className="cart-text-hover">
                Add to cart
              </span>
            </button>

          </div>
        </div>


        {/* RICE */}

        <div
          className={`menu-card rice-card ${
            activeCard === "rice" ? "rotate-active" : ""
          }`}
          onMouseEnter={() => setActiveCard("rice")}
          onMouseLeave={() => setActiveCard(null)}
        >

          <div className="card-top"></div>

          <div className="food-image-wrapper">
            <img
              className="special"
              src={menuItems[1].image}
              alt={menuItems[1].name}
            />
          </div>

          <div className="card-content">

            <h2>{menuItems[1].name}</h2>

            <p>
              Lorem ipsum dolor sit amit consectetur adipiscing.
            </p>

            <div className="price">
              ${menuItems[1].price.toFixed(2)}
            </div>

            <button
              className="cart-btn"
              onClick={() => addToCart(menuItems[1])}
            >
              <span className="cart-text-normal">
                Add to cart
              </span>

              <span className="cart-text-hover">
                Add to cart
              </span>
            </button>

          </div>
        </div>


        {/* GREEN SALAD */}

        <div
          className={`menu-card salad-card ${
            activeCard === "salad" ? "rotate-active" : ""
          }`}
          onMouseEnter={() => setActiveCard("salad")}
          onMouseLeave={() => setActiveCard(null)}
        >

          <div className="card-top"></div>

          <div className="food-image-wrapper">
            <img
              className="special"
              src={menuItems[2].image}
              alt={menuItems[2].name}
            />
          </div>

          <div className="card-content">

            <h2>{menuItems[2].name}</h2>

            <p>
              Lorem ipsum dolor sit amit consectetur adipiscing.
            </p>

            <div className="price">
              ${menuItems[2].price.toFixed(2)}
            </div>

            <button
              className="cart-btn"
              onClick={() => addToCart(menuItems[2])}
            >
              <span className="cart-text-normal">
                Add to cart
              </span>

              <span className="cart-text-hover">
                Add to cart
              </span>
            </button>

          </div>
        </div>


        {/* PASTA */}

        <div
          className={`menu-card pasta-card ${
            activeCard === "pasta" ? "rotate-active" : ""
          }`}
          onMouseEnter={() => setActiveCard("pasta")}
          onMouseLeave={() => setActiveCard(null)}
        >

          <div className="card-top"></div>

          <div className="food-image-wrapper">
            <img
              className="special"
              src={menuItems[3].image}
              alt={menuItems[3].name}
            />
          </div>

          <div className="card-content">

            <h2>{menuItems[3].name}</h2>

            <p>
              Lorem ipsum dolor sit amit consectetur adipiscing.
            </p>

            <div className="price">
              ${menuItems[3].price.toFixed(2)}
            </div>

            <button
              className="cart-btn"
              onClick={() => addToCart(menuItems[3])}
            >
              <span className="cart-text-normal">
                Add to cart
              </span>

              <span className="cart-text-hover">
                Add to cart
              </span>
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Specialmenu;