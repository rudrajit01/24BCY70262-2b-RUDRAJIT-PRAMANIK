import React, { useState } from "react";
import "./App.css";

function App() {
  const [filter, setFilter] = useState("all");

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 129.99,
      category: "electronics"
    },
    {
      id: 2,
      name: "Cotton T-Shirt",
      price: 24.99,
      category: "clothing"
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 89.99,
      category: "electronics"
    },
    {
      id: 4,
      name: "Denim Jeans",
      price: 59.99,
      category: "clothing"
    }
  ];

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter(product => product.category === filter);

  return (
    <div style={{ padding: "30px", fontFamily: "Arial, sans-serif" }}>
      <h1>Product Filter</h1>

      <label style={{ marginRight: "10px" }}>Filter by:</label>
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ padding: "8px", marginBottom: "20px" }}
      >
        <option value="all">All Products</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
      </select>

      <div className="grid">
        {filteredProducts.map((product) => (
          <div className="card" key={product.id}>
            <h2>{product.name}</h2>
            <p style={{ fontWeight: "bold" }}>${product.price}</p>
            <span className={product.category}>
              {product.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
