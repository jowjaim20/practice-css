import "./Header.scss";

import React from "react";

function Header() {
  return (
    <div className="header">
      <img src="\img\Jaim.png" alt="logo" className="logo" />
      <form action="#" className="search">
        <input
          type="text"
          className="search__input"
          placeholder="search hotels"
        />
        <button className="search__button">
          <svg className="search__icon">
            <use xlinkHref="\img\sprite.svg#icon-magnifying-glass"></use>
          </svg>
        </button>
      </form>
      <nav className="user-nav">
        <div className="user-nav__icon-box">
          <svg className="user-nav__icon">
            <use xlinkHref="\img\sprite.svg#icon-bookmark"></use>
          </svg>
          <span className="user-nav__notification">8</span>
        </div>
        <div className="user-nav__icon-box">
          <svg className="user-nav__icon">
            <use xlinkHref="\img\sprite.svg#icon-chat"></use>
          </svg>
          <span className="user-nav__notification">23</span>
        </div>
        <div className="user-nav__user">
          <img
            src="/img/photo.jpg"
            alt="user photo"
            className="user-nav__user-photo"
          />
          <span className="user-nav__user-name">Joel</span>
        </div>
      </nav>
    </div>
  );
}

export default Header;
