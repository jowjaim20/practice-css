import "./main-page.scss";

import React from "react";
import Header from "../components/Header";

function MainPage() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <nav className="sidebar">navigation</nav>
        <main className="hotel-view">Hotel View</main>
      </div>
    </div>
  );
}

export default MainPage;
