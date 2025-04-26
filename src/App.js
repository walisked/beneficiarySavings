import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import About from "./pages/AboutUs.jsx";
import TermsAndConditions from "./pages/TermsAndCondition.jsx";
import UserDashboard from "./pages/UserDashboard.jsx";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import UserLayout from "./components/UserLayout";

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const location = useLocation(); // Now inside the Router context

  // Define routes where the Navbar should not be displayed
  const noNavbarRoutes = ["/user-dashboard", "/user-dashboard/wallet", "/user-dashboard/settings", "/user-dashboard/logout"];

  return (
    <>
      {/* Conditionally render the Navbar */}
      {!noNavbarRoutes.includes(location.pathname) && <Navbar />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<TermsAndConditions />} />

        {/* User Routes with Sidebar */}
        <Route
          path="/user-dashboard/*"
          element={
            <UserLayout>
              <UserDashboard />
            </UserLayout>
          }
        />
      </Routes>

      {/* Conditionally render the Footer */}
      {!noNavbarRoutes.includes(location.pathname) && <Footer />}
    </>
  );
};

export default App;
