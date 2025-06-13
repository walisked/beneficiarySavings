import React, { useState, useEffect } from "react";
import axios from "axios";
import SignupForm from "./SignupForm";
import ContactInformationForm from "./ContactInformationForm";
import InvestmentForm from "./InvestmentForm";
import IdentificationDetails from "./IdentificationDetails";
import SavingsForm from "./SavingsForm";
import NextOfKinForm from "./NextOfKinForm";
import PasswordInput from "./PasswordInput";
import StepProgress from './ui/StepProgress';

const STEP_COMPONENTS = [
  SignupForm,
  ContactInformationForm,
  InvestmentForm,
  IdentificationDetails,
  SavingsForm,
  NextOfKinForm,
  PasswordInput,
];

const STEP_LABELS = [
  "Account Info",
  "Contact Info",
  "Investment",
  "ID Details",
  "Savings",
  "Next of Kin",
  "Set Password",
];

// Validation rules for each step
const VALIDATION_RULES = {
  0: (data) => {
    const errors = {};
    if (!data.username) errors.username = "Username is required";
    if (!data.email) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(data.email)) errors.email = "Email is invalid";
    return errors;
  },
  1: (data) => {
    const errors = {};
    if (!data.phone) errors.phone = "Phone is required";
    if (!data.nin) errors.nin = "NIN is required";
    else if (data.nin.length !== 11) errors.nin = "NIN must be 11 digits";
    if (!data.state) errors.state = "State is required";
    if (!data.LGA) errors.LGA = "LGA is required";
    if (!data.address) errors.address = "Address is required";
    return errors;
  },
  2: (data) => {
    const errors = {};
    if (!data.selectedInvestment) errors.selectedInvestment = "Investment option is required";
    if (!data.selectedContribution) errors.selectedContribution = "Contribution structure is required";
    return errors;
  },
  3: (data) => {
    const errors = {};
    if (!data.BVN) errors.BVN = "BVN is required";
    else if (data.BVN.length !== 11) errors.BVN = "BVN must be 11 digits";
    return errors;
  },
  5: (data) => {
    const errors = {};
    if (!data.nextOfKin.fullname) errors["nextOfKin.fullname"] = "Full name is required";
    if (!data.nextOfKin.phone) errors["nextOfKin.phone"] = "Phone is required";
    return errors;
  },
  6: (data) => {
    const errors = {};
    if (!data.password) errors.password = "Password is required";
    else if (data.password.length < 8) errors.password = "Password must be at least 8 characters";
    return errors;
  },
};

const INITIAL_FORM_DATA = {
  username: "",
  email: "",
  phone: "",
  nin: "",
  state: "",
  LGA: "",
  address: "",
  occupation: "",
  employer: "",
  monthlyEarnings: "",
  selectedInvestment: "",
  selectedContribution: "",
  contributionFrequency: "",
  Bemail: "",
  BVN: "",
  utilityBill: "",
  validated: "",
  nextOfKin: {
    fullname: "",
    relationship: "",
    phone: "",
    email: "",
    address: "",
  },
  password: "",
};

const SignupFormManager = () => {
  const [currentStep, setCurrentStep] = useState(() => {
    const savedStep = localStorage.getItem('signupStep');
    return savedStep ? parseInt(savedStep) : 0;
  });
  
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem('signupData');
    return savedData ? JSON.parse(savedData) : INITIAL_FORM_DATA;
  });

  const [errors, setErrors] = useState({});

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('signupData', JSON.stringify(formData));
    localStorage.setItem('signupStep', currentStep.toString());
  }, [formData, currentStep]);

  // Clear storage on successful submission
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/signup",
        formData
      );
      alert("Signup successful!");
      console.log(response.data);
      localStorage.removeItem('signupData');
      localStorage.removeItem('signupStep');
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  // Validate the current step
  const validateCurrentStep = () => {
    const validationFn = VALIDATION_RULES[currentStep];
    if (!validationFn) return true; // Skip validation if no rules
    
    const newErrors = validationFn(formData);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle the "Next" button click
  const handleNextStep = () => {
    if (validateCurrentStep()) {
      setCurrentStep((prev) => Math.min(prev + 1, STEP_COMPONENTS.length - 1));
    }
  };

  // Handle the "Previous" button click
  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  // Render the current step component
  const renderStepComponent = () => {
    const StepComponent = STEP_COMPONENTS[currentStep];
    return (
      <StepComponent
        formData={formData}
        setFormData={setFormData}
        errors={errors}
        onSubmit={handleSubmit}
      />
    );
  };

  return (
    <div className="signup-flow max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      {/* Step Progress Indicator */}
      <StepProgress 
        steps={STEP_LABELS} 
        currentStep={currentStep} 
      />

      {/* Render the current step */}
      {renderStepComponent()}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <button
          onClick={handlePrevStep}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md disabled:opacity-50"
          disabled={currentStep === 0}
        >
          Previous
        </button>
        {currentStep < STEP_COMPONENTS.length - 1 ? (
          <button
            onClick={handleNextStep}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md"
          >
            Continue
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
          >
            Create Account
          </button>
        )}
      </div>
    </div>
  );
};

// Step Indicator Component
const StepIndicator = ({ index, currentStep, label }) => {
  return (
    <div className="relative flex flex-col items-center w-full">
      {index !== 0 && (
        <div
          className={`absolute top-4 left-1/2 w-full h-1 ${
            currentStep >= index ? "bg-blue-600" : "bg-gray-300"
          }`}
        />
      )}
      <div
        className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full text-sm font-semibold ${
          currentStep >= index ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-700"
        }`}
      >
        {index + 1}
      </div>
      <span
        className={`mt-2 text-xs font-medium ${
          currentStep >= index ? "text-blue-600" : "text-gray-500"
        }`}
      >
        {label}
      </span>
    </div>
  );
};

export default SignupFormManager;