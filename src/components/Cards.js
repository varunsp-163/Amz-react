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
// },
    // {
    //     "id": 11,
    //     "Product_Name": "Tablet",
    //     "Product_Image": "https://i.imgur.com/IJTH1XX.jpg",
    //     "Price": 299.99,
    //     "Category": "Electronics",
    //     "Availability": "Out of Stock"
    // },
    // {
    //     "id": 12,
    //     "Product_Name": "Soccer Ball",
    //     "Product_Image": "https://i.imgur.com/6A3QRvQ.png",
    //     "Price": 19.99,
    //     "Category": "Sports & Outdoors",
    //     "Availability": "In Stock"
    // },
    // {
    //     "id": 13,
    //     "Product_Name": "Microwave Oven",
    //     "Product_Image": "https://i.imgur.com/KPX8JwC.jpg",
    //     "Price": 149.99,
    //     "Category": "Home & Kitchen",
    //     "Availability": "In Stock"
    // },
    // {
    //     "id": 14,
    //     "Product_Name": "Earrings",
    //     "Product_Image": "https://i.imgur.com/1vqn8Kw.jpg",
    //     "Price": 39.99,
    //     "Category": "Fashion",
    //     "Availability": "In Stock"
    // },
    // {
    //     "id": 15,
    //     "Product_Name": "Gaming Console",
    //     "Product_Image": "https://i.imgur.com/CcEQrPo.jpg",
    //     "Price": 399.99,
    //     "Category": "Electronics",
    //     "Availability": "Out of Stock"
    // },
    // {
    //     "id": 16,
    //     "Product_Name": "Yoga Mat",
    //     "Product_Image": "https://i.imgur.com/MdrQ8Nf.jpg",
    //     "Price": 24.99,
    //     "Category": "Sports & Outdoors",
    //     "Availability": "In Stock"
    // },
    // {
    //     "id": 17,
    //     "Product_Name": "Toothbrush",
    //     "Product_Image": "https://i.imgur.com/ZpIivae.png",
    //     "Price": 9.99,
    //     "Category": "Health & Beauty",
    //     "Availability": "In Stock"
    // },
    // {
    //     "id": 18,
    //     "Product_Name": "Desk Chair",
    //     "Product_Image": "https://i.imgur.com/MROdERo.png",
    //     "Price": 79.99,
    //     "Category": "Furniture",
    //     "Availability": "In Stock"
    // },
    // {
    //     "id": 19,
    //     "Product_Name": "Digital Camera",
    //     "Product_Image": "https://i.imgur.com/fes2iuN.jpg",
    //     "Price": 249.99,
    //     "Category": "Electronics",
    //     "Availability": "In Stock"
    // },
    // {
    //     "id": 20,
    //     "Product_Name": "Hiking Boots",
    //     "Product_Image": "https://i.imgur.com/vRdcIQT.jpg",
    //     "Price": 89.99,
    //     "Category": "Sports & Outdoors",
    //     "Availability": "In Stock"
    // },
    // {
    //     "id": 21,
    //     "Product_Name": "Hair Dryer",
    //     "Product_Image": "https://i.imgur.com/k3Llfox.jpg",
    //     "Price": 29.99,
    //     "Category": "Health & Beauty",
    //     "Availability": "Out of Stock"
    // },
    // {
    //     "id": 22,
    //     "Product_Name": "Dining Table",
    //     "Product_Image": "https://i.imgur.com/dL60j9Y.jpg",
    //     "Price": 199.99,
    //     "Category": "Furniture",
    //     "Availability": "In Stock"
    // },
    // {
    //     "id": 23,
    //     "Product_Name": "Laptop Bag",
    //     "Product_Image": "https://i.imgur.com/gm68cdG.jpg",
    //     "Price": 29.99,
    //     "Category": "Electronics",
    //     "Availability": "In Stock"
    // },
    // {
    //     "id": 24,
    //     "Product_Name": "Treadmill",
    //     "Product_Image": "https://i.imgur.com/GkkpX3m.jpg",
    //     "Price": 499.99,
    //     "Category": "Sports & Outdoors",
    //     "Availability": "Out of Stock"
    // }
