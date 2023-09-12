import React from "react";
import style from "../styles/Card.module.css";

const Card = ({ product }) => {
  return (
    <div className={style.card}>
      <h1 className="text-xl font-bold p-2">{product.Product_Name}</h1>
      <img
        className={style.image}
        src={product.Product_Image}
        alt={product.Product_Name}
      />
      <div>
        <h3>
          Price: $<span>{product.Price}</span>
        </h3>
      </div>
      <h3>{product.Category}</h3>
      <h3
        className={
          product.Availability === "Out of Stock"
            ? "text-red-700 bg-red-400"
            : "bg-green-400"
        }
      >
        {product.Availability}
      </h3>
    </div>
  );
};

export default Card;
