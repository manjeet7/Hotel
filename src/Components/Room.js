import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Room({ room }) {
  const { name, price, images, slug } = room;
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0]} alt="kaalo" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>Per Night</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          Features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
}

export default Room;
