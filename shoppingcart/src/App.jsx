import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [cart, setCart] = useState(() => {
  
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const products = [
    { id: 1, name: "chocolate", price: 10 },
    { id: 2, name: "laptop", price: 3000 },
    { id: 3, name: "t-shirt", price: 100 },
  ];


  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const newItem = {
      ...product,
      cartItemId: crypto.randomUUID(),
    };
    setCart((prevCart) => [...prevCart, newItem]);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.cartItemId !== id)
    );
  };

  return (
    <div className="cart-container">
      <h1>Shopping Cart App</h1>

      <h2>Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cart.length === 0 ? (
          <p style={{ textAlign: "center" }}>Cart is empty</p>
        ) : (
          cart.map((item) => (
            <div key={item.cartItemId} className="cart-item">
              <span>
                {item.name} - ${item.price}
              </span>
              <button onClick={() => removeFromCart(item.cartItemId)}>
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;