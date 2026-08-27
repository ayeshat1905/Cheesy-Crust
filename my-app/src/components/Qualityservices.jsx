import React, { useState } from "react";
import "./style.css";

import {
  FaStore,
  FaCocktail,
  FaCoffee,
  FaBirthdayCake,
} from "react-icons/fa";

const QualityServices = () => {
  const [selectedService, setSelectedService] = useState("");

  const services = [
    {
      id: "restaurant",
      name: "Restaurant",
      icon: <FaStore />,
      description: "Lorem ipsum dolor sit amet, adipiscing elit, sed",
      image:
        "https://swigo-fast-food-react.netlify.app/assets/pic2--RWF6peS.jpg",
    },
    {
      id: "bar",
      name: "Bar",
      icon: <FaCocktail />,
      description: "Lorem ipsum dolor sit amet, adipiscing elit, sed",
      image:
        "https://swigo-fast-food-react.netlify.app/assets/pic5-WkjoDh8d.jpg",
    },
    {
      id: "cafe",
      name: "Cafe",
      icon: <FaCoffee />,
      description: "Lorem ipsum dolor sit amet, adipiscing elit, sed",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOaj5v2FfF8Q4J8fvsO2hDzxnsiQl9AjpyYb52_akqxQ&s=10",
    },
    {
      id: "dessert",
      name: "Dessert",
      icon: <FaBirthdayCake />,
      description: "Lorem ipsum dolor sit amet, adipiscing elit, sed",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgT0PX-u1QU1h3MkmFepd19qqx6IAUQGEI7fRzfS0lPXB-XoJreHsVizI&s=10",
    },
  ];

  return (
    <section className="quality-services">
      <div className="services-header">
        <h1>Quality Services</h1>
      </div>


<div className="pimage">
  <img src="	https://swigo-fast-food-react.netlify.app/assets/pic3-RsfypmO1.png"></img>
</div>

      <div className="services-container">
        {services.map((service) => {
          const isSelected = selectedService === service.id;

          return (
            <div
              key={service.id}
              className={`service-card ${
                isSelected ? "active" : ""
              }`}
              onMouseEnter={() => setSelectedService(service.id)}
onMouseLeave={() => setSelectedService(null)}
             
              style={
                isSelected
                  ? {
                      backgroundImage: `url(${service.image})`,
                    }
                  : {}
              }
            >
              {isSelected && <div className="service-overlay"></div>}

              <div className="service-content">
                <div className="service-icon">
                  {service.icon}
                </div>

                <h2>{service.name}</h2>

                <p>{service.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default QualityServices;