import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./signup.css";
import { AuthContext } from "./AuthContext.jsx"; // Import AuthContext

export default function Login() {
  const [loading, setLoading] = useState(false);
  const { setIsAuthenticated } = useContext(AuthContext); // Get authentication setter
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      if (!data.email || !data.password) {
        toast.error("Please provide email and password", { position: "top-center" });
        setLoading(false);
        return;
      }

      // Send signin request to backend
      const res = await axios.post("http://skill-bridge-api.vercel.app/auth/signin", data);

      // Store authentication token and update state
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("token", res.data.token); // Save JWT token
      setIsAuthenticated(true);

      toast.success(res.data.message || "Signin successful", { position: "top-center" });

      // Redirect to dashboard or home page
      setTimeout(() => navigate("/dashboard"), 2000);
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Signin failed";
      toast.error(errorMessage, { position: "top-center" });
      console.error("Signin Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    navigate("/forgot-password");
  };

  return (
    <>
      <ToastContainer />
      <form className="forms" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Email"
          {...register("email", { 
            required: "Email is required",
            pattern: { 
              value: /\S+@\S+\.\S+/, 
              message: "Invalid email format" 
            }
          })}
        />
        {errors.email && <span className="error">{errors.email.message}</span>}

        <input
          type="password"
          placeholder="Password"
          {...register("password", { 
            required: "Password is required",
            minLength: { 
              value: 8, 
              message: "Password must be at least 8 characters" 
            }
          })}
        />
        {errors.password && <span className="error">{errors.password.message}</span>}
        
        <div className="btns">
          <button 
            className="btnf" 
            onClick={handleForgotPassword}
          >
            Forgot Password?
          </button>
          <button 
            type="submit" 
            disabled={loading}
          >
            {loading ? "Loading..." : "Signin"}
          </button>
        </div>
      </form>
    </>
  );
}
