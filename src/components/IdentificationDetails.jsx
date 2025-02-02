import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation

const IdentificationDetails = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [bvn, setBvn] = useState('');
  const [bvnError, setBvnError] = useState('');
  const [utilityBill, setUtilityBill] = useState(null);
  const [address, setAddress] = useState('');
  const [addressError, setAddressError] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  // Handle OTP sending
  const handleSendOtp = () => {
    // Simulate OTP sending
    console.log(`OTP sent to ${email}`);
    setIsOtpSent(true);
  };

  // Handle OTP verification
  const handleVerifyOtp = () => {
    // Simulate OTP verification
    if (otp === '123456') { // Replace with actual OTP verification logic
      setIsOtpVerified(true);
      alert('OTP verified successfully!');
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  // Handle BVN validation
  const handleBvnValidation = async () => {
    // Simulate BVN validation with an API
    if (bvn.length === 11) { // Replace with actual BVN validation logic
      setBvnError('');
    } else {
      setBvnError('Invalid BVN. It must be 11 digits.');
    }
  };

  // Handle utility bill upload
  const handleUtilityBillUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUtilityBill(file);
      // Simulate Google Maps API validation for address
      console.log('Utility bill uploaded. Validating address...');
      setTimeout(() => {
        setAddress('123 Main St, City, Country'); // Simulate validated address
        setAddressError('');
      }, 2000); // Simulate a 2-second delay for validation
    }
  };

  // Navigate to Face Live Validation
  const navigateToFaceValidation = () => {
    navigate('/face-validation'); // Navigate to the face validation page
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Identification Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email Address with OTP Verification */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="Enter email address"
              />
              <button
                type="button"
                onClick={handleSendOtp}
                className="mt-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Send OTP
              </button>
            </div>
            {isOtpSent && (
              <div className="mt-2">
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  placeholder="Enter OTP"
                />
                <button
                  type="button"
                  onClick={handleVerifyOtp}
                  className="mt-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                >
                  Verify OTP
                </button>
              </div>
            )}
            {isOtpVerified && (
              <p className="text-sm text-green-600 mt-2">Email verified!</p>
            )}
          </div>

          {/* Bank Verification Number (BVN) */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Bank Verification Number (BVN)</label>
            <input
              type="text"
              value={bvn}
              onChange={(e) => setBvn(e.target.value)}
              onBlur={handleBvnValidation}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Enter BVN"
            />
            {bvnError && <p className="text-sm text-red-600 mt-1">{bvnError}</p>}
          </div>

          {/* Navigation Button for Face Live Validation */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Face Live Validation</label>
            <button
              type="button"
              onClick={navigateToFaceValidation}
              className="mt-1 w-full bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
            >
              Go to Face Live Validation
            </button>
          </div>

          {/* Utility Bill Upload */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Utility Bill Upload</label>
            <input
              type="file"
              accept=".pdf,.jpg,.png"
              onChange={handleUtilityBillUpload}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
            {utilityBill && (
              <p className="text-sm text-gray-500 mt-2">File uploaded: {utilityBill.name}</p>
            )}
          </div>

          {/* Address Validation */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Validated Address</label>
            <input
              type="text"
              value={address}
              readOnly
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-100"
              placeholder="Address will be auto-filled after validation"
            />
            {addressError && <p className="text-sm text-red-600 mt-1">{addressError}</p>}
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default IdentificationDetails;