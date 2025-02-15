import React from 'react'

const logout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/signin"); // Redirect to signin page after logout
    return(
        <div>Logout</div>
    )
};
  

export default logout;