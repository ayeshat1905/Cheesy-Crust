// import React from "react";
// import "./style.css";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import { useCart } from "../Context/CartContext";
// import { FiShoppingCart } from "react-icons/fi";

// const Menu = () => {
//   const { addToCart } = useCart();
//   return (
//     <div className="menu-page">

//     <Navbar/>
//           <section className="menu-hero">

//         <div className="menu-hero-overlay"></div>
//         <div className="menu-hero-content">
//           <h1>Our Menu </h1>

//           <div className="breadcrumb">
//      <button className="text">
//   <a href="/">Home</a>
//   <span>›</span>
//   <span>Our Menu</span>
// </button>
//           </div>
//         </div>
//       </section>

// <div className="menus-food-image">
//   <img src="https://swigo-fast-food-react.netlify.app/assets/pic12-3Uk5xMya.png"
//     alt="Food"/>
// </div>
//  <section className="menu-content">

//     <div className="menu-column">
//         <h2>Starters</h2>

//          <div className="menu-item">
//       <div className="menu-item-top">
//         <h3>Creamy Mushroom Soup</h3>
//         <span className="dots"></span>
//         <span className="price">$10</span>
//           {/* <button
//       type="button"
//       className="menu-cart-btn"
//       onClick={() =>
//         addToCart({
//           id: "starter-1",
//           name: "Creamy Mushroom Soup",
//           price: 10,
//           image:
//             "https://swigo-fast-food-react.netlify.app/assets/pic12-3Uk5xMya.png",
//         })
//       }
//     >
//       <FiShoppingCart />
//     </button> */}
//       </div>
//       <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
//     </div>

//      <div className="menu-item">
//       <div className="menu-item-top">
//         <h3>Stuffed Mushrooms</h3>
//         <span className="dots"></span>
//         <span className="price">$14</span>
//       </div>
//       <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
//     </div>

//      <div className="menu-item">
//       <div className="menu-item-top">
//         <h3>Grilled Caesar Salad</h3>
//         <span className="dots"></span>
//         <span className="price">$18</span>
//       </div>
//       <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
//     </div>

//      <div className="menu-item">
//       <div className="menu-item-top">
//         <h3>Signature Autumn Salad</h3>
//         <span className="dots"></span>
//         <span className="price">$25</span>
//       </div>
//       <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
//     </div>

//      <div className="menu-item">
//       <div className="menu-item-top">
//         <h3>Glazed Tomato Bruschite</h3>
//         <span className="dots"></span>
//         <span className="price">$35</span>
//       </div>
//       <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
//     </div>
//     </div>

// <div className="menu-column">
//     <h2>Seafood</h2>

//      <div className="menu-item">
//       <div className="menu-item-top">
//         <h3>Baked Oysters Rockefeller</h3>
//         <span className="dots"></span>
//         <span className="price">$13</span>
//       </div>
//      <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
//     </div>

//  <div className="menu-item">
//       <div className="menu-item-top">
//         <h3>Grilled Shrimp Skewers</h3>
//         <span className="dots"></span>
//         <span className="price">$15</span>
//       </div>
//      <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
//     </div>

//     <div className="menu-item">
//       <div className="menu-item-top">
//         <h3>Seafood Linguine</h3>
//         <span className="dots"></span>
//         <span className="price">$14</span>
//       </div>
//      <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
//     </div>

// <div className="menu-item">
//       <div className="menu-item-top">
//         <h3>Shrimp Scampi</h3>
//         <span className="dots"></span>
//         <span className="price">$20</span>
//       </div>
//      <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
//     </div>

// </div>

//   <div className="menu-food-image">
//   <img src="https://swigo-fast-food-react.netlify.app/assets/pic14-I-61rb1k.png"
//     alt="Seafood" />
// </div>

//  </section>

// <section className="menu-three-columns">

//       <div className="menu-small-column">
//     <h2>Drinks</h2>

//   <div className="menu-item">
//       <div className="menu-item-top">
//         <h3>Cranberry Juice</h3>
//         <span className="dots"></span>
//         <span className="price">$10</span>
//       </div>
//    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
//     </div>

//     <div className="menu-item">
//       <div className="menu-item-top">
//         <h3>Hot Chocolate</h3>
//         <span className="dots"></span>
//         <span className="price">$14</span>
//       </div>
//    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
//     </div>

//     <div className="menu-item">
//       <div className="menu-item-top">
//         <h3>Leamon Lime Soda</h3>
//         <span className="dots"></span>
//         <span className="price">$18</span>
//       </div>
//    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
//     </div>

//      <div className="menu-item">
//       <div className="menu-item-top">
//         <h3>Alcohlic Beverages</h3>
//         <span className="dots"></span>
//         <span className="price">$25</span>
//       </div>
//    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
//     </div>

// </div>

// <div className="menu-small-column">
//     <h2>Specials</h2>

//  <div className="menu-item">
//       <div className="menu-item-top">
//         <h3>Beef Tenderloin & Red Wine</h3>
//         <span className="dots"></span>
//         <span className="price">$13</span>
//       </div>
//    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
//     </div>

//      <div className="menu-item">
//       <div className="menu-item-top">
//         <h3>Mushroom Risotto</h3>
//         <span className="dots"></span>
//         <span className="price">$15</span>
//       </div>
//    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
//     </div>

//      <div className="menu-item">
//       <div className="menu-item-top">
//         <h3>Lobster Thermidor</h3>
//         <span className="dots"></span>
//         <span className="price">$14</span>
//       </div>
//    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
//     </div>

//      <div className="menu-item">
//       <div className="menu-item-top">
//         <h3>Beef Bourguignon</h3>
//         <span className="dots"></span>
//         <span className="price">$20</span>
//       </div>
//    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
//     </div>

// </div>

// <div className="menu-small-column">
//     <h2>Meat</h2>

//      <div className="menu-item">
//       <div className="menu-item-top">
//         <h3>Beef Bourguignon</h3>
//         <span className="dots"></span>
//         <span className="price">$30</span>
//       </div>
//    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
//     </div>

//      <div className="menu-item">
//       <div className="menu-item-top">
//         <h3>Barbecue Ribs</h3>
//         <span className="dots"></span>
//         <span className="price">$28</span>
//       </div>
//    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
//     </div>

//          <div className="menu-item">
//       <div className="menu-item-top">
//         <h3>Roasted Turkey</h3>
//         <span className="dots"></span>
//         <span className="price">$40</span>
//       </div>
//    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
//     </div>

//       <div className="menu-item">
//       <div className="menu-item-top">
//         <h3>Beef Stroganoff</h3>
//         <span className="dots"></span>
//         <span className="price">$90</span>
//       </div>
//    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
//     </div>
// </div>
// </section>

// <Footer/>
//     </div>
//       );
// };

// export default Menu;

import React from "react";
import "./style.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useCart } from "../Context/CartContext";
import { FiShoppingCart } from "react-icons/fi";
const MenuItem = ({ id, name, price, image, addToCart }) => {

  return (
    <div className="menu-item">
      {" "}
      <div className="menu-item-top">
        {" "}
        <h3>{name}</h3> <span className="dots"></span>{" "}
        <span className="price">${price}</span>{" "}
        <button
          type="button"
          className="menu-cart-btn"
          
          onClick={() => addToCart({ id, name, price, image })}
          aria-label={`Add ${name} to cart`}
        >
          {" "}
          <FiShoppingCart />{" "}
        </button>{" "}
      </div>{" "}
      <p>
        {" "}
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's{" "}
      </p>{" "}
    </div>
  );
};
const Menu = () => {
  const { addToCart } = useCart();
  const starterImage =
    "https://swigo-fast-food-react.netlify.app/assets/pic12-3Uk5xMya.png";
  const seafoodImage =
    "https://swigo-fast-food-react.netlify.app/assets/pic14-I-61rb1k.png";
  return (
    <div className="menu-page">
      {" "}
      {/* Navbar */} <Navbar /> {/* Hero Section */}{" "}
      <section className="menu-hero">
        {" "}
        <div className="menu-hero-overlay"></div>{" "}
        <div className="menu-hero-content">
          {" "}
          <h1>Our Menu</h1>{" "}
          <div className="breadcrumb">
            {" "}
            <button className="text">
              {" "}
              <a href="/">Home</a> <span>›</span> <span>Our Menu</span>{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Top Food Image */}{" "}
      <div className="menus-food-image">
        {" "}
        <img src={starterImage} alt="Food" />{" "}
      </div>{" "}
      {/* ========================================= STARTERS + SEAFOOD ========================================= */}{" "}
      <section className="menu-content">
        {" "}
        {/* STARTERS */}{" "}
        <div className="menu-column">
          {" "}
          <h2>Starters</h2>{" "}
          <MenuItem
            id="starter-1"
            name="Creamy Mushroom Soup"
            price={10}
            // image={starterImage}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJJdqcmGdrX4VTuzB4JADAR_LUBduCLQneKf3dwds-aiwc41LMKW13eO9vn7O_QcBsmvMrs3-zBAFPR6Ly1hM2zBxopc_e9VExiI9aCbfW&s=10"
            addToCart={addToCart}
          />{" "}
          <MenuItem
            id="starter-2"
            name="Stuffed Mushrooms"
            price={14}
            // image={starterImage}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlrzG2HA2isuNC4HVl7WvRYiwpNIuop0eXGQIlCWHykw&s=10"
            addToCart={addToCart}
          />{" "}
          <MenuItem
            id="starter-3"
            name="Grilled Caesar Salad"
            price={18}
            // image={starterImage}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8ZYxPkCn_dJ5rkreiLD3pArT8PEu2omxweAi0tcovw&s=10"
            addToCart={addToCart}
          />{" "}
          <MenuItem
            id="starter-4"
            name="Signature Autumn Salad"
            price={25}
            // image={starterImage}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa5wGRriz3kPqE1Y8qR7EFMEijES66FGWyiF-GP0aXqw&s=10"
            addToCart={addToCart}
          />{" "}
          <MenuItem
            id="starter-5"
            name="Glazed Tomato Bruschite"
            price={35}
            // image={starterImage}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Cj_1gMqDTB9N-X8WAkxBN-3BvbxqFot8Qo9PnUlFRg&s=10"
            addToCart={addToCart}
          />{" "}
        </div>{" "}
        {/* SEAFOOD */}{" "}
        <div className="menu-column">
          {" "}
          <h2>Seafood</h2>{" "}
          <MenuItem
            id="seafood-1"
            name="Baked Oysters Rockefeller"
            price={13}
            // image={seafoodImage}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-s4j3SGMxhLHAwxE8inv38s74segvt9v9P15H6ceig&s=10"
            addToCart={addToCart}
          />{" "}
          <MenuItem
            id="seafood-2"
            name="Grilled Shrimp Skewers"
            price={15}
            // image={seafoodImage}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1N4Iz-53HPEG-EUzlZoSrBZA_mlLlQ7ajnjRU_7d_BQ&s=10"
            addToCart={addToCart}
          />{" "}
          <MenuItem
            id="seafood-3"
            name="Seafood Linguine"
            price={14}
            // image={seafoodImage}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwxCCz_OmdcYd79dzNeltXrB8MjKM3aEIM62-0XFFrDw&s=10"
            addToCart={addToCart}
          />{" "}
          <MenuItem
            id="seafood-4"
            name="Shrimp Scampi"
            price={20}
            // image={seafoodImage}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMTL4YvgRqL0pJ5vFE0Y8tewhuOA4h22IHdGmBJazPAg&s=10"
            addToCart={addToCart}
          />{" "}
        </div>{" "}
        {/* Seafood Image */}{" "}
        <div className="menu-food-image">
          {" "}
          <img src={seafoodImage} alt="Seafood" />{" "}
        </div>{" "}
      </section>{" "}
      {/* ========================================= DRINKS + SPECIALS + MEAT ========================================= */}{" "}
      <section className="menu-three-columns">
        {" "}
        {/* DRINKS */}{" "}
        <div className="menu-small-column">
          {" "}
          <h2>Drinks</h2>{" "}
          <MenuItem
            id="drink-1"
            name="Cranberry Juice"
            price={10}
            // image={starterImage}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq4Z43W7sOSjb2jPm753Gw35To6M0utG28uscx_rCgLg&s=10"
            addToCart={addToCart}
          />{" "}
          <MenuItem
            id="drink-2"
            name="Hot Chocolate"
            price={14}
            // image={starterImage}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd0OoAwus3tX52rlA8Zhn0iFZifPB3avttifrpvi90xA&s=10"
            addToCart={addToCart}
          />{" "}
          <MenuItem
            id="drink-3"
            name="Leamon Lime Soda"
            price={18}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGH9VFPuY2vwdjy0n0Bsik1usZJbBY0SDbxhJMLto1gQ&s=10"
            // image={starterImage}
            addToCart={addToCart}
          />{" "}
          <MenuItem
            id="drink-4"
            name="Alcohlic Beverages"
            price={25}
            // image={starterImage}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ6rR3oOvUrotJiHguK4HRz0B1GyesaXGIlIn_zjhQlQ&s=10"
            addToCart={addToCart}
          />{" "}
        </div>{" "}
        {/* SPECIALS */}{" "}
        <div className="menu-small-column">
          {" "}
          <h2>Specials</h2>{" "}
          <MenuItem
            id="special-1"
            name="Beef Tenderloin & Red Wine"
            price={13}
            // image={seafoodImage}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2_fxTn9OuWStUn-HH0X7_D0oLN7_kJweT5fX50A_Jtg&s=10"
            addToCart={addToCart}
          />{" "}
          <MenuItem
            id="special-2"
            name="Mushroom Risotto"
            price={15}
            // image={starterImage}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQDRZ63StFBsfN_EbQKwL3pNF5bJBBbOjPa3xsY8rjhA&s=10"
            addToCart={addToCart}
          />{" "}
          <MenuItem
            id="special-3"
            name="Lobster Thermidor"
            price={14}
            // image={seafoodImage}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnPGPI2riR0Srzoxj1zUZb5Gap1y-Kd-ikocSrMJ5Q2Q&s=10"
            addToCart={addToCart}
          />{" "}
          <MenuItem
            id="special-4"
            name="Beef Bourguignon"
            price={20}
            // image={starterImage}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrCjl4OUBqz59NBQ9bkX3V_AN7FsCMR-nNd-gcFaqYuQ&s=10"
            addToCart={addToCart}
          />{" "}
        </div>{" "}
        {/* MEAT */}{" "}
        <div className="menu-small-column">
          {" "}
          <h2>Meat</h2>{" "}
          <MenuItem
            id="meat-1"
            name="Beef Bourguignon"
            price={30}
            // image={starterImage}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuoKXvoFyMzC73BUN-Vsv_fxT1_uda5ApPT6_d7MdE9HRLZyx89UxZufpbHt8v2mG57lRC6Q2qOhjJX8kVX2rPhO3KUL8a6CRGR0S4iCPaeQ&s=10"
            addToCart={addToCart}
          />{" "}
          <MenuItem
            id="meat-2"
            name="Barbecue Ribs"
            price={28}
            // image={starterImage}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNp256YatJyxP3ZRYTcZoZooBjjFlaZui_RTkEPLzg5w&s=10"
            addToCart={addToCart}
          />{" "}
          <MenuItem
            id="meat-3"
            name="Roasted Turkey"
            price={40}
            // image={starterImage}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9gKTgNEmTI42q9DMXs64wvtAHmyi_5TDGhSHcxDrcXA&s=10"
            addToCart={addToCart}
          />{" "}
          <MenuItem
            id="meat-4"
            name="Beef Stroganoff"
            price={90}
            // image={starterImage}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjUE2Mg_E_qXHG2FAj8zUnSRXElyylWJ3FIq2cqkEzyQ&s=10"
            addToCart={addToCart}
          />{" "}
        </div>{" "}
      </section>{" "}
      <Footer />{" "}
    </div>
  );
};
export default Menu;
