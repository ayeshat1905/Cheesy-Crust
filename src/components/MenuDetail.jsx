
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FiShoppingCart, FiArrowLeft, FiMinus, FiPlus } from "react-icons/fi";
import { useCart } from "../Context/CartContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./style.css";

const menuItems = [
  // ================= STARTERS =================
  {
    id: "starter-1",
    category: "Starters",
    name: "Creamy Mushroom Soup",
    price: 10,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJJdqcmGdrX4VTuzB4JADAR_LUBduCLQneKf3dwds-aiwc41LMKW13eO9vn7O_QcBsmvMrs3-zBAFPR6Ly1hM2zBxopc_e9VExiI9aCbfW&s=10",
    description:
      "A rich and creamy mushroom soup prepared with fresh mushrooms, herbs, cream, and carefully selected spices. A warm and comforting starter with a smooth texture and delicious flavor.",
  },
  {
    id: "starter-2",
    category: "Starters",
    name: "Stuffed Mushrooms",
    price: 14,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlrzG2HA2isuNC4HVl7WvRYiwpNIuop0eXGQIlCWHykw&s=10",
    description:
      "Fresh mushrooms filled with a delicious savory stuffing, herbs, and cheese, then baked until perfectly tender and golden.",
  },
  {
    id: "starter-3",
    category: "Starters",
    name: "Grilled Caesar Salad",
    price: 18,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8ZYxPkCn_dJ5rkreiLD3pArT8PEu2omxweAi0tcovw&s=10",
    description:
      "Crisp lettuce and fresh vegetables combined with grilled ingredients, creamy Caesar dressing, parmesan cheese, and crunchy croutons.",
  },
  {
    id: "starter-4",
    category: "Starters",
    name: "Signature Autumn Salad",
    price: 25,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa5wGRriz3kPqE1Y8qR7EFMEijES66FGWyiF-GP0aXqw&s=10",
    description:
      "A colorful seasonal salad made with fresh vegetables, fruits, herbs, and a light house dressing for a refreshing taste.",
  },
  {
    id: "starter-5",
    category: "Starters",
    name: "Glazed Tomato Bruschite",
    price: 35,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Cj_1gMqDTB9N-X8WAkxBN-3BvbxqFot8Qo9PnUlFRg&s=10",
    description:
      "Crispy toasted bread topped with fresh tomatoes, herbs, and a delicious glaze, creating the perfect combination of crunch and freshness.",
  },

  // ================= SEAFOOD =================
  {
    id: "seafood-1",
    category: "Seafood",
    name: "Baked Oysters Rockefeller",
    price: 13,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-s4j3SGMxhLHAwxE8inv38s74segvt9v9P15H6ceig&s=10",
    description:
      "Fresh oysters baked with a flavorful mixture of herbs, greens, cheese, and aromatic seasonings until beautifully golden.",
  },
  {
    id: "seafood-2",
    category: "Seafood",
    name: "Grilled Shrimp Skewers",
    price: 15,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1N4Iz-53HPEG-EUzlZoSrBZA_mlLlQ7ajnjRU_7d_BQ&s=10",
    description:
      "Juicy shrimp marinated with herbs and spices, grilled on skewers for a smoky and delicious seafood experience.",
  },
  {
    id: "seafood-3",
    category: "Seafood",
    name: "Seafood Linguine",
    price: 14,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwxCCz_OmdcYd79dzNeltXrB8MjKM3aEIM62-0XFFrDw&s=10",
    description:
      "Tender linguine tossed with fresh seafood, herbs, garlic, and a flavorful sauce for a satisfying Italian-inspired dish.",
  },
  {
    id: "seafood-4",
    category: "Seafood",
    name: "Shrimp Scampi",
    price: 20,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMTL4YvgRqL0pJ5vFE0Y8tewhuOA4h22IHdGmBJazPAg&s=10",
    description:
      "Tender shrimp cooked with garlic, butter, herbs, and a touch of lemon, creating a rich yet refreshing seafood dish.",
  },

  // ================= DRINKS =================
  {
    id: "drink-1",
    category: "Drinks",
    name: "Cranberry Juice",
    price: 10,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq4Z43W7sOSjb2jPm753Gw35To6M0utG28uscx_rCgLg&s=10",
    description:
      "A refreshing cranberry drink with a naturally sweet and slightly tangy flavor, served chilled for maximum freshness.",
  },
  {
    id: "drink-2",
    category: "Drinks",
    name: "Hot Chocolate",
    price: 14,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd0OoAwus3tX52rlA8Zhn0iFZifPB3avttifrpvi90xA&s=10",
    description:
      "Rich and creamy hot chocolate prepared with smooth chocolate and milk, finished with a comforting warm flavor.",
  },
  {
    id: "drink-3",
    category: "Drinks",
    name: "Lemon Lime Soda",
    price: 18,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGH9VFPuY2vwdjy0n0Bsik1usZJbBY0SDbxhJMLto1gQ&s=10",
    description:
      "A sparkling lemon-lime soda with a refreshing citrus flavor, perfect for enjoying with any meal.",
  },
  {
    id: "drink-4",
    category: "Drinks",
    name: "Alcoholic Beverages",
    price: 25,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ6rR3oOvUrotJiHguK4HRz0B1GyesaXGIlIn_zjhQlQ&s=10",
    description:
      "A selection of refreshing beverages prepared to complement your dining experience.",
  },

  // ================= SPECIALS =================
  {
    id: "special-1",
    category: "Specials",
    name: "Beef Tenderloin & Red Wine",
    price: 13,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2_fxTn9OuWStUn-HH0X7_D0oLN7_kJweT5fX50A_Jtg&s=10",
    description:
      "Tender beef prepared with rich flavors and paired with a luxurious red wine-inspired sauce.",
  },
  {
    id: "special-2",
    category: "Specials",
    name: "Mushroom Risotto",
    price: 15,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQDRZ63StFBsfN_EbQKwL3pNF5bJBBbOjPa3xsY8rjhA&s=10",
    description:
      "Creamy Italian-style risotto cooked with fresh mushrooms, herbs, and carefully selected seasonings.",
  },
  {
    id: "special-3",
    category: "Specials",
    name: "Lobster Thermidor",
    price: 14,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnPGPI2riR0Srzoxj1zUZb5Gap1y-Kd-ikocSrMJ5Q2Q&s=10",
    description:
      "A luxurious lobster dish prepared with a creamy sauce, herbs, and rich seasonings for a special dining experience.",
  },
  {
    id: "special-4",
    category: "Specials",
    name: "Beef Bourguignon",
    price: 20,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrCjl4OUBqz59NBQ9bkX3V_AN7FsCMR-nNd-gcFaqYuQ&s=10",
    description:
      "Slow-cooked beef prepared with vegetables, herbs, and a rich sauce until tender and full of flavor.",
  },

  // ================= MEAT =================
  {
    id: "meat-1",
    category: "Meat",
    name: "Beef Bourguignon",
    price: 30,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuoKXvoFyMzC73BUN-Vsv_fxT1_uda5ApPT6_d7MdE9HRLZyx89UxZufpbHt8v2mG57lRC6Q2qOhjJX8kVX2rPhO3KUL8a6CRGR0S4iCPaeQ&s=10",
    description:
      "Slow-braised beef cooked with vegetables and aromatic herbs in a rich sauce for an exceptionally tender meal.",
  },
  {
    id: "meat-2",
    category: "Meat",
    name: "Barbecue Ribs",
    price: 28,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNp256YatJyxP3ZRYTcZoZooBjjFlaZui_RTkEPLzg5w&s=10",
    description:
      "Tender ribs coated in a delicious barbecue glaze and cooked until juicy, smoky, and full of flavor.",
  },
  {
    id: "meat-3",
    category: "Meat",
    name: "Roasted Turkey",
    price: 40,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9gKTgNEmTI42q9DMXs64wvtAHmyi_5TDGhSHcxDrcXA&s=10",
    description:
      "Succulent roasted turkey seasoned with herbs and spices, served with a delicious golden finish.",
  },
  {
    id: "meat-4",
    category: "Meat",
    name: "Beef Stroganoff",
    price: 90,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjUE2Mg_E_qXHG2FAj8zUnSRXElyylWJ3FIq2cqkEzyQ&s=10",
    description:
      "Tender beef strips cooked in a creamy mushroom sauce with aromatic herbs and seasonings for a rich and satisfying dish.",
  },
];

const MenuDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);

  const item = menuItems.find((menuItem) => menuItem.id === id);

  if (!item) {
    return (
      <>
        <Navbar />

        <div className="menu-not-found">
          <h2>Menu Item Not Found</h2>
          <button onClick={() => navigate("/menu")}>
            Back to Menu
          </button>
        </div>

        <Footer />
      </>
    );
  }

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
      });
    }
  };

  return (
    <div className="menu-detail-page">
      <Navbar />

      {/* HERO */}
      <section className="menu-detail-hero">
        <div className="menu-detail-overlay"></div>

        <div className="menu-detail-hero-content">
          <h1>{item.name}</h1>

          <div className="menu-detail-breadcrumb">
            <span onClick={() => navigate("/")}>Home</span>
            <b>›</b>
            <span onClick={() => navigate("/menu")}>Menu</span>
            <b>›</b>
            <span>{item.name}</span>
          </div>
        </div>
      </section>

      {/* DETAIL SECTION */}
      <section className="menu-detail-section">
        <div className="menu-detail-image-box">
          <img src={item.image} alt={item.name} />
        </div>

        <div className="menu-detail-info">
          <span className="menu-detail-category">
            {item.category}
          </span>

          <h2>{item.name}</h2>

          <div className="menu-detail-price">
            ${item.price}
          </div>

          <p className="menu-detail-description">
            {item.description}
          </p>

          <div className="menu-detail-divider"></div>

          <div className="menu-detail-actions">
            <div className="quantity-box">
              <button
                type="button"
                onClick={decreaseQuantity}
                aria-label="Decrease quantity"
              >
                <FiMinus />
              </button>

              <span>{quantity}</span>

              <button
                type="button"
                onClick={increaseQuantity}
                aria-label="Increase quantity"
              >
                <FiPlus />
              </button>
            </div>

            <button
              type="button"
              className="detail-cart-btn"
              onClick={handleAddToCart}
            >
              <FiShoppingCart />
              Add to Cart
            </button>
          </div>

          <button
            type="button"
            className="back-menu-btn"
            onClick={() => navigate("/menu")}
          >
            <FiArrowLeft />
            Back to Menu
          </button>
        </div>
      </section>

      {/* EXTRA INFORMATION */}
      <section className="menu-detail-extra">
        <div>
          <h3>Fresh Ingredients</h3>
          <p>
            We carefully select fresh ingredients to create delicious
            dishes with excellent flavor.
          </p>
        </div>

        <div>
          <h3>Made With Care</h3>
          <p>
            Every dish is prepared with attention to detail and served
            fresh from our kitchen.
          </p>
        </div>

        <div>
          <h3>Perfect Choice</h3>
          <p>
            Enjoy your favorite dish as part of a memorable dining
            experience.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MenuDetail;

