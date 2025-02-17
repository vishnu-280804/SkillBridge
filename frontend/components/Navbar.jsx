import { Link } from "react-router-dom";
import "../src/index.css";
import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../lib/CartContext";

export default function Navbar() {
  const { count } = useContext(CartContext);
  const [c1, setC1] = useState(0);
  const [isCheck,setCheck] = useState(false);

  const fetchCartCount = async () => {
    try {
      const response = await fetch("http://localhost:3000/cart/count", {
        credentials: "include",
      });
      const data = await response.json();
      setC1(data.count);
    } catch (error) {
      console.error("Error fetching cart count:", error);
    }
  };

  const checkAuthStatus = async () => {
    try {
      const response = await fetch("http://localhost:3000/auth/status", {
        credentials: "include",
      });
      const data = await response.json();
      
    } catch (error) {
      console.error("Error checking auth status:", error);
    }
  };

  useEffect(() => {
    fetchCartCount();
    checkAuthStatus();
  }, []);

  const handleLogout = async () => {
    await fetch("http://localhost:3000/auth/logout", {
      method: "POST",
      credentials: "include",
    });
    setIsAuthenticated(false);
  };

  return (
    <nav className="flexyNav">
      {!isAuthenticated ? (
        <>
        <Link to = "/">
          <button className="black">Home</button>
        </Link>
          <Link to="/signup">
            <button className="black">Signup</button>
          </Link>
          <Link to="/signin">
            <button className="black">Signin</button>
          </Link>
        </>
      ) : (
        <button className="black" onClick={handleLogout}>Logout</button>
      )}
      <Link to="/cart" className="cart-svg">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.5 13h12l2.5-7H6"></path>
        </svg>
        <p>{c1}</p>
      </Link>
    </nav>
  );
}
