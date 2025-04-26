import React, { useState } from "react";

const NextOfKinForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    relationship: "",
    phone: "",
    email: "",
    address: "",
    declaration: false,
    consent: false,
  });


  // Handle form input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.declaration || !formData.consent) {
      alert("You must agree to the declarations before submitting.");
      return;
    }

    console.log("Form Data:", formData);
    alert("Form submitted successfully!");
  };

  
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-lg mx-auto p-8 bg-white rounded-lg shadow-lg mb-20">
        <h2 className="text-xl font-semibold text-gray-800 text-center mb-6">
          Next of Kin Information
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            {/* Full Name */}
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />

            {/* Relationship */}
            <input
              type="text"
              name="relationship"
              placeholder="Relationship"
              value={formData.relationship}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />

            {/* Phone */}
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />

            {/* Address */}
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {/* Declarations */}
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="declaration"
                checked={formData.declaration}
                onChange={handleChange}
                className="mr-2"
                required
              />
              I declare my information is correct.
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mr-2"
                required
              />
              I consent to personal data use.
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NextOfKinForm;
