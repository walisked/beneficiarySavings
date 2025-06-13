import React, { useState, useEffect } from "react";

const PasswordInput = ({ formData, setFormData, errors, setErrors }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  // Password strength calculation
  useEffect(() => {
    let strength = 0;
    
    // Length check
    if (password.length >= 8) strength += 1;
    
    // Lowercase check
    if (/[a-z]/.test(password)) strength += 1;
    
    // Uppercase check
    if (/[A-Z]/.test(password)) strength += 1;
    
    // Number check
    if (/\d/.test(password)) strength += 1;
    
    // Special char check
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength += 1;
    
    setPasswordStrength(strength);
  }, [password]);

  const validatePasswords = () => {
    const newErrors = {...errors};
    
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (passwordStrength < 3) {
      newErrors.password = "Password is too weak";
    }
    
    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBlur = () => {
    validatePasswords();
  };

  // Update form data when passwords are valid
  useEffect(() => {
    if (password && confirmPassword && password === confirmPassword && passwordStrength >= 3) {
      setFormData({ ...formData, password });
    }
  }, [password, confirmPassword, passwordStrength, setFormData]);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md mx-4 sm:mx-auto p-8 bg-white shadow-lg rounded-lg mb-20">
        <h2 className="text-xl font-semibold text-gray-800 text-center mb-6">Set Your Password</h2>
        
        {/* Password Input */}
        <div className="mb-4">
          <label className="block text-gray-600 text-sm mb-2">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-gray-500"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "👁" : "🙈"}
            </button>
          </div>
        </div>

        {/* Confirm Password Input */}
        <div className="mb-4">
          <label className="block text-gray-600 text-sm mb-2">Confirm Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-gray-500"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "👁" : "🙈"}
            </button>
          </div>
        </div>

        {/* Password Strength Indicator */}
        <div className="mt-4">
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700">Password strength</span>
            <span className="text-sm text-gray-500">
              {passwordStrength < 3 ? "Weak" : passwordStrength < 5 ? "Good" : "Strong"}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className={`h-2.5 rounded-full ${
                passwordStrength === 0 ? 'bg-red-500 w-0' :
                passwordStrength === 1 ? 'bg-red-500 w-1/4' :
                passwordStrength === 2 ? 'bg-orange-500 w-1/2' :
                passwordStrength === 3 ? 'bg-yellow-500 w-3/4' :
                'bg-green-500 w-full'
              }`}
            ></div>
          </div>
          <ul className="mt-2 text-xs text-gray-500">
            <li className={password.length >= 8 ? 'text-green-500' : ''}>
              • At least 8 characters
            </li>
            <li className={/[a-z]/.test(password) ? 'text-green-500' : ''}>
              • Lowercase letter
            </li>
            <li className={/[A-Z]/.test(password) ? 'text-green-500' : ''}>
              • Uppercase letter
            </li>
            <li className={/\d/.test(password) ? 'text-green-500' : ''}>
              • Number
            </li>
            <li className={/[!@#$%^&*(),.?":{}|<>]/.test(password) ? 'text-green-500' : ''}>
              • Special character
            </li>
          </ul>
        </div>
        
        {/* Error Message */}
        {Object.keys(errors).length > 0 && (
          <div className="mt-4">
            {errors.password && <p className="text-red-500 text-sm mb-2">{errors.password}</p>}
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default PasswordInput;
