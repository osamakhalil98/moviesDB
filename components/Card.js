import React from "react";
import Image from "next/image";
import cardStyle from "../styles/Card.module.scss";

export default function Card({ title, poster, rating, status, overview }) {
  const ratingColor = {
    color: status,
    fontSize: "1.2rem",
    fontWeight: "bold",
  };

  return (
    <div className={cardStyle.card}>
      <Image
        src={poster}
        width="270px"
        height="380px"
        className={cardStyle.image}
      />

      <div className={cardStyle.info}>
        <h4>{title}</h4>
        <h3 className={cardStyle.rating} style={ratingColor}>
          {rating}
        </h3>
      </div>
      <div className={cardStyle.overview}>
        {" "}
        <h3>overview:</h3>
        {overview}
      </div>
    </div>
  );
}
