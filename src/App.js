import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/Signup";
import CalendarWallet from "./pages/Wallet";
import Navbar from "./components/Navbar";
import ContactInformationForm from "./components/ContactInformationForm";
import FaceValidation from "./components/FaceValidation";
import PersonalInfoForm from "./components/PersonalInfoForm";
import IdentificationDetails from "./components/IdentificationDetails";
import InvestmentForm from "./components/InvestmentForm";
import SavingsForm from "./components/SavingsForm";
import NextOfKinForm from "./components/NextOfKinForm";
import Market from "./pages/Market";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* level 1  */}
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/ContactInformationForm"
          element={<ContactInformationForm />}
        />
        <Route path="/InvestmentForm" element={<InvestmentForm />} />
        {/* level 2 */}
        <Route
          path="/IdentificationDetails"
          element={<IdentificationDetails />}
        />
        <Route path="/SavingsForm" element={<SavingsForm />} />
        <Route path="/NextOfKinForm" element={<NextOfKinForm />} />
        {/* DashBoard */}
        <Route path="/Market" element={<Market />} />
        <Route path="/wallet" element={<CalendarWallet />} /> {/* level 3 */}
        <Route path="/personal-info" element={<PersonalInfoForm />} />
        <Route path="/face-validation" element={<FaceValidation />} />
    
      </Routes>
    </Router>
  );
};

export default App;
