import "./main-page.scss";

import React from "react";
import Header from "../components/Header";
import Navbar from "../layouts/Navbar";
import HotelOverview from "../layouts/HotelOverview/HotelOverview";

function MainPage() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <Navbar />
        <HotelOverview />
      </div>
    </div>
  );
}

export default MainPage;
