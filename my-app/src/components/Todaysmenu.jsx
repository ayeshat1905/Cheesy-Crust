import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../Context/CartContext";

const TodaysMenu = () => {
    const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);
const { addToCart } = useCart();
  const menuItems = [
  {
    id: "pasta",
    name: "Pasta",
    price: "35.00",
    image:
      "https://swigo-fast-food-react.netlify.app/assets/pic2--RWF6peS.jpg",
  },
  {
    id: "shake",
    name: "Shake",
    price: "50.00",
    image:
      "https://swigo-fast-food-react.netlify.app/assets/pic5-WkjoDh8d.jpg",
  },
  {
    id: "dal-fry",
    name: "Dal Fry",
    price: "35.00",
    image:
      "https://swigo-fast-food-react.netlify.app/assets/pic4-3aDejiAe.jpg",
  },
  {
    id: "pizza",
    name: "Pizza",
    price: "55.00",
    image:
      "https://swigo-fast-food-react.netlify.app/assets/pic6-ZYoQuaAO.jpg",
  },
];



  return (
    <div className="todays-menu-page">
      <div className="menu-header">
        <h1>Today's Menu</h1>
      </div>

      <div className="limage">
        <img src="	https://swigo-fast-food-react.netlify.app/assets/pic4-huBUCEms.png"></img>
      </div>

      <div className="menu-containers">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`menu-card ${
              selectedItem === item.id ? "selected" : ""
            }`}
           onMouseEnter={() => setSelectedItem(item.id)}
onMouseLeave={() => setSelectedItem(null)}
          >
            <div className="food-image-wrapper">
              <img src={item.image} alt={item.name} />

              <span className="top-seller">TOP SELLER</span>

            <div className="selected-details">
  <div>
    <h2>{item.name}</h2>
    <h3>{item.price}</h3>
  </div>

 <button
  className="cart-icon"
  onClick={(e) => {
    e.stopPropagation();
    addToCart(item);
  }}
>
  <FiShoppingCart />
</button>
</div>
            </div>

            <div className="card-content">
              <h2>{item.name}</h2>
              <p>Lorem ipsum dolor sit amet, adipiscing elit sed.</p>
            </div>
          </div>
        ))}
      </div>

  <button
  className="see-all-btn"
  onClick={() => navigate("/menu")}
>
  <span className="text-normal">See All Dishes</span>
  <span className="text-hover">See All Dishes</span>
</button>
    </div>
  );
};

export default TodaysMenu;