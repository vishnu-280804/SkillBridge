import React, { useEffect, useState } from "react";

import "../src/index.css"
const CartPage = () => {
  const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  // Fetch Cart Count
  const fetchCartCount = async () => {
    try {
      const response = await fetch("http://skill-bridge-api.vercel.app/cart/count");
      const data = await response.json();
      setCount(data.count);
    } catch (error) {
      console.error("Error fetching cart count:", error);
    }
  };

  // Fetch Cart Items
  const fetchCart = async () => {
    try {
      const res = await fetch("http://skill-bridge-api.vercel.app/cart/fetch");
      const data = await res.json();
      console.log("Cart Data:", data);

      if (Array.isArray(data.courses)) {
        setCartItems(data.courses); // ✅ Access `data.courses`
      } else {
        console.error("Invalid cart data format");
      }
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };

  useEffect(() => {
    fetchCartCount();
    fetchCart();
  }, []);

  return (
    <div className="cart-main">
      <h1 className="cart-header">{count} items in your Cart</h1>

      <div className="cart-container">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item._id} className="cart-item">
              <h2 className="course-name">{item.name}</h2>
              <p className="cart-price">Price: {item.price}</p>
              <p className="cart-count">Quantity: {item.count}</p>
              <button className="pay-now-btn">Pay Now</button>
            </div>
          ))
        ) : (
          <p className="empty-cart">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default CartPage;
