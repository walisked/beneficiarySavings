import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/Signup";
import CalendarWallet from "./pages/Wallet";
import DirectorDashboard from "./pages/DirectorDashboard";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/wallet" element={<CalendarWallet />} />{" "}
        {/* Add Wallet Route */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DirectorDashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
