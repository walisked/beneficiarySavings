import { useState } from "react";
import SignupForm from "./SignupForm";
import ContactInformationForm from "./ContactInformationForm";
import InvestmentForm from "./InvestmentForm";
import IdentificationDetails from "./IdentificationDetails";
import SavingsForm from "./SavingsForm";
import NextOfKinForm from "./NextOfKinForm";
import PasswordInput from "./PasswordInput";

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
  "Signup",
  "Contact Info",
  "Investment",
  "ID Details",
  "Savings",
  "Next of Kin",
  "Set Password",
];

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
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState({});

  const validateCurrentStep = () => {
    const newErrors = {};
    const requiredFields = {
      0: ["username", "email"],
      1: ["phone", "nin", "state", "LGA", "address"],
      2: ["selectedInvestment", "selectedContribution"],
      3: ["nin"],
      4: ["monthlyEarnings"],
      5: ["nextOfKin.fullname", "nextOfKin.phone"],
      6: ["password"],
    };

    requiredFields[currentStep]?.forEach((field) => {
      const fieldParts = field.split(".");
      const value = fieldParts.length === 2 ? formData[fieldParts[0]][fieldParts[1]] : formData[field];
      
      if (!value) {
        newErrors[field] = `${fieldParts[fieldParts.length - 1].replace(/([A-Z])/g, " $1")} is required`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    console.log("Next step");
    setCurrentStep((prev) => Math.min(prev + 1, STEP_COMPONENTS.length - 1));
  };
  

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const renderStepComponent = () => {
    switch (currentStep) {
      case 0:
        return <SignupForm formData={formData} setFormData={setFormData} errors={errors} />;
      case 1:
        return <ContactInformationForm formData={formData} setFormData={setFormData} errors={errors} />;
      case 2:
        return <InvestmentForm formData={formData} setFormData={setFormData} errors={errors} />;
      case 3:
        return <IdentificationDetails formData={formData} setFormData={setFormData} errors={errors} />;
      case 4:
        return <SavingsForm formData={formData} setFormData={setFormData} errors={errors} />;
      case 5:
        return <NextOfKinForm formData={formData} setFormData={setFormData} errors={errors} />;
      case 6:
        return <PasswordInput formData={formData} setFormData={setFormData} errors={errors} />;
      default:
        return null;
    }
  };

  return (
    <div className="signup-flow max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <div className="relative flex justify-between items-center mb-8">
        {STEP_LABELS.map((label, index) => (
          <StepIndicator key={index} index={index} currentStep={currentStep} label={label} />
        ))}
      </div>
      {renderStepComponent()}
      <div className="flex justify-between mt-6">
        <button
          onClick={handlePrevStep}
          className="bg-gray-500 text-white px-4 py-2 rounded-md disabled:opacity-50"
          disabled={currentStep === 0}
        >
          Previous
        </button>
        <button
          onClick={handleNextStep}
          className="bg-blue-600 text-white px-4 py-2 rounded-md disabled:opacity-50"
          disabled={currentStep === STEP_COMPONENTS.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

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