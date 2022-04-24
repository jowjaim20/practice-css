import "./NavItem.scss";

import React from "react";

function NavItem({ icon, name, style }) {
  return (
    <li className={`side-nav__item ${style}`}>
      <a href="#" className="side-nav__link">
        <svg className="side-nav__icon">
          <use xlinkHref={`/img/sprite.svg#${icon}`}></use>
        </svg>
        <span>{name}</span>
      </a>
    </li>
  );
}

export default NavItem;
