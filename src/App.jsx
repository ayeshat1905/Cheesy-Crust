import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contactus from "./components/Contactus";
import Menu from "./components/Menu";
import Teststation from "./components/Teststation";
import Specialmenu from "./components/Specialmenu";
import TodaysMenu from "./components/Todaysmenu";
import QualityServices from "./components/Qualityservices";
import Fromourmenu from "./components/Fromourmenu";
import Reservation from "./components/Reservation";
import Masterchef from "./components/Masterchef";
import Aboutus from "./components/Aboutus";
import Faq from "./components/Faq";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import MenuDetail from "./components/MenuDetail";

function Home() {
  return (
    <>
      <Navbar />

      {/* Your Home page components */}
      <Teststation/>
      <Specialmenu/>
      <TodaysMenu/>
      <QualityServices/>
      <Fromourmenu/>
      <Reservation/>
      <Masterchef/>

      <Footer />
    </>
  );
}

function App() {
  return (
   <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/menu" element={<Menu />} />
  <Route path="/contact" element={<Contactus />} />
  <Route path="/about-us" element={<Aboutus />} />
  <Route path="/faq" element={<Faq />} />
  <Route path="/cart" element={<Cart />} />
  <Route path="/checkout" element={<Checkout />} />
  <Route path="/menu/:id" element={<MenuDetail />} />
</Routes>
  );
}

export default App;