import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import CommunityPage from "./pages/Communities.jsx";
import About from "./pages/AboutUs.jsx";
import ContactPage from "./pages/Contact.jsx";
import TermsAndConditions from "./pages/TermsAndCondition.jsx";
import UserDashboard from "./pages/UserDashboard.jsx";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import UserLayout from "./components/UserLayout";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import BRMDashboard from "./pages/BRMDashboard.jsx";
import CalendarWallet from "./pages/Wallet.jsx";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

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
  const noNavbarRoutes = [
    "/user-dashboard",
    "/user-dashboard/wallet",
    "/user-dashboard/settings",
    "/user-dashboard/logout",
  ];

  return (
    <>
      {/* Conditionally render the Navbar */}
      {!noNavbarRoutes.includes(location.pathname) && <Navbar />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/communities" element={<CommunityPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/brm-dashboard" element={<BRMDashboard />} />
        <Route path="wallet" element={<CalendarWallet />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />

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
