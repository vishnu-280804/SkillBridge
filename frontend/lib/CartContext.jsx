import { createContext, useState } from "react";
import React from "react";
// Creating Context
export const CartContext = createContext();

// Cart Provider
export const CartProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <CartContext.Provider value={{ count, setCount }}>
      {children}
    </CartContext.Provider>
    
  );
};
