import React, { useState } from "react";
import "../src/index.css";

const Connect = () => {
  const [email, setEmail] = useState("");

  const handleSendEmail = async () => {
    if (!email) {
      alert("Please enter your email!");
      return;
    }

    try {
      const response = await fetch("skill-bridge-api.vercel.app/auth/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      alert(data.message); // Show success or error message
      setEmail(""); // Clear input after sending
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send email");
    }
  };

  return (
    <div className="connect">
      <h1>Connect with Us?</h1>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="connect-btn" onClick={handleSendEmail}>
        Send Email
      </button>
    </div>
  );
};

export default Connect;
