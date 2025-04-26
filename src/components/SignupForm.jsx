import { useState, useEffect } from "react";
import InputField from "./ui/InputField";

const SignupForm = ({ formData, setFormData, setValidation, onNext }) => {
  const [errors, setErrors] = useState({});

  // Validate the form
  const validateStep = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.email) newErrors.email = "Email is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // // Handle Next Button Click
  // const handleNext = () => {
  //   if (validateStep()) {
  //     setValidation(true); // Notify the parent component that the form is valid
  //     onNext(); // Proceed to the next step
  //   } else {
  //     setValidation(true);
  //   }
  // };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md mx-4 sm:mx-auto transition-all duration-300 mb-20">
        <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">Signup</h2>

        <div className="space-y-6">
          {/* Username Field */}
          <div className="space-y-2">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <InputField
              name="username"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              error={errors.username}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            />
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <InputField
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              error={errors.email}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            />
          </div>
        </div>

        {/* Next Button */}
        {/* <div className="mt-6">
          <button
            onClick={handleNext}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-all"
          >
            Next
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default SignupForm;
