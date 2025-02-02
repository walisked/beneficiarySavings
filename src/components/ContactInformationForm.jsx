import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation

const ContactInformationForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [nin, setNin] = useState('');
  const [ninError, setNinError] = useState('');
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [lgas, setLgas] = useState([]);
  const [businessAddress, setBusinessAddress] = useState('');
  const [isFaceValidated, setIsFaceValidated] = useState(false); // New state for face validation
  const navigate = useNavigate(); // Hook for navigation

  // Fetch states from API
  useEffect(() => {
    fetch('http://states-and-cities.com/api/v1/states')
      .then(response => response.json())
      .then(data => setStates(data))
      .catch(error => console.error('Error fetching states:', error));
  }, []);

  // Fetch LGAs when a state is selected
  useEffect(() => {
    if (selectedState) {
      fetch(`http://states-and-cities.com/api/v1/states/${selectedState}/lgas`)
        .then(response => response.json())
        .then(data => setLgas(data))
        .catch(error => console.error('Error fetching LGAs:', error));
    }
  }, [selectedState]);

  // Handle OTP sending
  const handleSendOtp = () => {
    // Simulate OTP sending
    console.log(`OTP sent to ${phoneNumber}`);
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

  // Handle NIN validation
  const handleNinValidation = async () => {
    // Simulate NIN validation
    if (nin.length === 11) { // Replace with actual NIN validation logic
      setNinError('');
    } else {
      setNinError('Invalid NIN. It must be 11 digits.');
    }
  };

  // Navigate to Face Live Validation
  const navigateToFaceValidation = () => {
    navigate('/face-validation'); // Navigate to the face validation page
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Phone Number with OTP Verification */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <div className="flex gap-2">
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="Enter phone number"
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
              <p className="text-sm text-green-600 mt-2">Phone number verified!</p>
            )}
          </div>

          {/* National Identification Number (NIN) */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">National Identification Number (NIN)</label>
            <input
              type="text"
              value={nin}
              onChange={(e) => setNin(e.target.value)}
              onBlur={handleNinValidation}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Enter NIN"
            />
            {ninError && <p className="text-sm text-red-600 mt-1">{ninError}</p>}
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

          {/* State of Residence */}
          <div>
            <label className="block text-sm font-medium text-gray-700">State of Residence</label>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            >
              <option value="">Select a state</option>
              {states.map(state => (
                <option key={state.id} value={state.id}>{state.name}</option>
              ))}
            </select>
          </div>

          {/* Local Government Area */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Local Government Area</label>
            <select
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            >
              <option value="">Select an LGA</option>
              {lgas.map(lga => (
                <option key={lga.id} value={lga.id}>{lga.name}</option>
              ))}
            </select>
          </div>

          {/* Business Address */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <textarea
              value={businessAddress}
              onChange={(e) => setBusinessAddress(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              rows="3"
              placeholder="Enter address"
            />
          </div>
        </div>

        {/* Submit Button (Conditional Rendering) */}
        <div className="mt-6">
          {isFaceValidated ? (
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Next
            </button>
          ) : (
            <p className="text-sm text-gray-500 text-center">
              Please complete face validation to proceed.
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactInformationForm;