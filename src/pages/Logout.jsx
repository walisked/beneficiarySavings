import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Add your logout logic here (e.g., clearing user data)
    console.log("User logged out");
    // Redirect to the login page
    navigate("/login");
  }, [navigate]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Logging Out...</h1>
    </div>
  );
};

export default Logout;