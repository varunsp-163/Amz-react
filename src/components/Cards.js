import React from "react";

import Card from "./Card";
import style from "../styles/Card.module.css";

const Cards = ({ products }) => {
  return (
    <div className={style.cards}>
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Cards;

// EXTRA DATA

