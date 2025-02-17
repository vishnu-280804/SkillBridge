import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Home from "../components/Home.jsx";
import Signup from "../components/Signup.jsx"; // ✅ Correct import
import Login from "../components/Login.jsx";
import React from "react";
import { CartProvider } from "../lib/CartContext.jsx";
import CartPage from "../components/CartPage.jsx";

function App() {
  return (
  <CartProvider >
    <Router>
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Login />} />
        <Route path = "/cart" element = {<CartPage />} />
      </Routes>
   
    </Router>
    </CartProvider>

    
  );
}

export default App;
