import "./Overview.scss";

import React from "react";
import ButtonInline from "../Button-Inline/Button-Inline";
function Overview() {
  const stars = [1, 1, 1, 1, 1];

  return (
    <div className="overview">
      <h1 className="overview__heading"> Hotel de Joel</h1>
      <div className="overview__stars">
        {stars.map((_, i) => (
          <svg key={i + 1} className="overview__icon-star">
            <use xlinkHref="img/sprite.svg#icon-star"></use>
          </svg>
        ))}
      </div>
      <div className="overview__location">
        <svg className="overview__icon-location">
          <use xlinkHref="img/sprite.svg#icon-location-pin"></use>
        </svg>
      </div>
      <ButtonInline text={"Banay-banay, Davao Oriental"} />
      <div className="overview__rating">
        <div className="overview__rating-average">9.0</div>
        <div className="overview__rating-count">876 votes</div>
      </div>
    </div>
  );
}

export default Overview;
