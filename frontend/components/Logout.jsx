import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext.jsx"; // Import AuthContext
//skill-bridge-api.vercel.app
const Logout = () => {
    const navigate = useNavigate();
    const { setIsAuthenticated } = useContext(AuthContext);

    useEffect(() => {
        localStorage.removeItem("isAuthenticated"); // Remove from storage
        setIsAuthenticated(false); // Update global state
        navigate("/signin"); // Redirect to signin page
    }, [navigate, setIsAuthenticated]);

    return <div>Logging out...</div>;
};

export default Logout;
