import { useState } from "react";

const PasswordInput = ({ formData, setFormData, onSubmit }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const validatePasswords = () => {
    if (!password || !confirmPassword) {
      setError("Both fields are required.");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match.");
    } else {
      setError("");
      setFormData({ ...formData, password });
    }
  };

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

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      </div>
    </div>
  );
};

export default PasswordInput;
