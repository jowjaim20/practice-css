import "./Gallery.scss";

import React from "react";

function Gallery({ alt, src }) {
  return (
    <figure className="gallery__item">
      <img src={`${src}`} alt={`${alt}`} className="gallery__photo" />
    </figure>
  );
}

export default Gallery;
