import React, { useState, useEffect } from "react";

const ContactInformationForm = ({ formData, setFormData }) => {
  const [phoneNumber, setPhoneNumber] = useState(formData.phone || "");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [nin, setNin] = useState(formData.nin || "");
  const [ninError, setNinError] = useState("");
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState(formData.state || "");
  const [lgas, setLgas] = useState([]);
  const [businessAddress, setBusinessAddress] = useState(formData.address || "");

  // Fetch states
  useEffect(() => {
    fetch("http://states-and-cities.com/api/v1/states")
      .then((response) => response.json())
      .then((data) => setStates(data))
      .catch((error) => console.error("Error fetching states:", error));
  }, []);

  // Fetch LGAs when a state is selected
  useEffect(() => {
    if (selectedState) {
      fetch(`http://states-and-cities.com/api/v1/states/${selectedState}/lgas`)
        .then((response) => response.json())
        .then((data) => setLgas(data))
        .catch((error) => console.error("Error fetching LGAs:", error));
    }
  }, [selectedState]);

  // Handle form field changes
  const handleFieldChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  // Handle phone number change
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
    handleFieldChange("phone", e.target.value);
  };

  // Handle NIN change
  const handleNinChange = (e) => {
    const value = e.target.value;
    setNin(value);
    handleFieldChange("nin", value);
    if (value.length !== 11) {
      setNinError("NIN must be exactly 11 digits.");
    } else {
      setNinError("");
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Information</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Phone Number */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <div className="flex gap-2">
            <input
              type="tel"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Enter phone number"
              required
            />
            <button
              type="button"
              onClick={() => setIsOtpSent(true)}
              className="mt-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Send OTP
            </button>
          </div>
        </div>

        {/* OTP Verification */}
        {isOtpSent && (
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Enter OTP</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="Enter OTP"
              />
              <button
                type="button"
                onClick={() => setIsOtpVerified(true)}
                className="mt-1 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
              >
                Verify OTP
              </button>
            </div>
          </div>
        )}

        {/* NIN Input */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">National Identification Number (NIN)</label>
          <input
            type="text"
            value={nin}
            onChange={handleNinChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Enter your 11-digit NIN"
            required
          />
          {ninError && <p className="text-red-600 text-sm mt-1">{ninError}</p>}
        </div>

        {/* State Dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-700">State</label>
          <select
            value={selectedState}
            onChange={(e) => {
              setSelectedState(e.target.value);
              handleFieldChange("state", e.target.value);
            }}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          >
            <option value="">Select State</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        {/* LGA Dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Local Government Area (LGA)</label>
          <select
            value={formData.LGA}
            onChange={(e) => handleFieldChange("LGA", e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          >
            <option value="">Select LGA</option>
            {lgas.map((lga) => (
              <option key={lga} value={lga}>
                {lga}
              </option>
            ))}
          </select>
        </div>

        {/* Business Address */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Business Address</label>
          <input
            type="text"
            value={businessAddress}
            onChange={(e) => {
              setBusinessAddress(e.target.value);
              handleFieldChange("address", e.target.value);
            }}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Enter Business Address"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInformationForm;
