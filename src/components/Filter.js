import React, { useState } from "react";
import Cards from "./Cards";
import { getProducts } from "../api/products";

const Filter = () => {
  const allProducts = getProducts();
  const [products, setProducts] = useState(allProducts);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedAvailability, setSelectedAvailability] = useState("");

  const categories = [...new Set(allProducts.map((item) => item.Category))];
  const availability = [
    ...new Set(allProducts.map((item) => item.Availability)),
  ];

  const handleCategory = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    applyFilters(category, selectedAvailability);
  };

  const handleAvailability = (event) => {
    const availability = event.target.value;
    setSelectedAvailability(availability);
    applyFilters(selectedCategory, availability);
  };

  const applyFilters = (category, availability) => {
    const filteredProducts = allProducts.filter((item) => {
      if (category && availability) {
        return item.Category === category && item.Availability === availability;
      } else if (category) {
        return item.Category === category;
      } else if (availability) {
        return item.Availability === availability;
      }
      return true;
    });

    setProducts(filteredProducts);
  };

  return (
    <>
      <div className="justify-center items-center flex">
        <div className="w-[280px] bg-gray-200 p-4 rounded-xl justify-center">
          <h1 className="text-xl text-center font-semibold mb-4">
            Filter Items Here
          </h1>
          <div className="mb-4">
            <div className="mb-2">
              <h1 className="text-lg font-semibold mb-2">Category of Items:</h1>
              <select
                className="w-full p-2 border rounded"
                value={selectedCategory}
                onChange={handleCategory}
              >
                <option value="">All Categories</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Availability</h3>
              <select
                className="w-full p-2 border rounded"
                value={selectedAvailability}
                onChange={handleAvailability}
              >
                <option value="">Select an Option</option>
                {availability.map((availability, index) => (
                  <option key={index} value={availability}>
                    {availability}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
            onClick={() => {
              setSelectedCategory("");
              setSelectedAvailability("");
              setProducts(allProducts);
            }}
          >
            Clear Filters
          </button>
          <div className="p-2">
            <h1 className="text-sm font-bold">
              Number of products found: {products.length}
            </h1>
          </div>
        </div>
      </div>

      {!products.length ? (
        <h1 className="text-center font-bold text-xl m-[2rem]">
          No data found
        </h1>
      ) : (
        <Cards products={products} />
      )}
    </>
  );
};

export default Filter;
