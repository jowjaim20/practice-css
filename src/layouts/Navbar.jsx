import "./Navbar.scss";

import React from "react";
import NavItem from "../components/NavItem/NavItem";

function Navbar() {
  return (
    <nav className="sidebar">
      <ul className="side-nav">
        <NavItem
          name={"Hotel"}
          icon={"icon-home"}
          style={"side-nav__item--active"}
        />
        <NavItem name={"Flight"} icon={"icon-aircraft-take-off"} />
        <NavItem name={"Car Rental"} icon={"icon-key"} />
        <NavItem name={"Tours"} icon={"icon-map"} />
      </ul>
      <div className="legal">&copy; 2022 by Trillo. All rights reserved.</div>
    </nav>
  );
}

export default Navbar;
