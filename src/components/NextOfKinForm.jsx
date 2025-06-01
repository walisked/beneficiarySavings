import React from "react";

const NextOfKinForm = ({ formData, setFormData, errors }) => {
  // Handle form input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      nextOfKin: {
        ...prevData.nextOfKin,
        [name]: type === "checkbox" ? checked : value,
      },
    }));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-lg mx-auto p-8 bg-white rounded-lg shadow-lg mb-20">
        <h2 className="text-xl font-semibold text-gray-800 text-center mb-6">
          Next of Kin Information
        </h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            {/* Full Name */}
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              value={formData.nextOfKin.fullname}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors["nextOfKin.fullname"] && (
              <p className="text-red-500 text-sm">{errors["nextOfKin.fullname"]}</p>
            )}

            {/* Relationship */}
            <input
              type="text"
              name="relationship"
              placeholder="Relationship"
              value={formData.nextOfKin.relationship}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors["nextOfKin.relationship"] && (
              <p className="text-red-500 text-sm">{errors["nextOfKin.relationship"]}</p>
            )}

            {/* Phone */}
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.nextOfKin.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors["nextOfKin.phone"] && (
              <p className="text-red-500 text-sm">{errors["nextOfKin.phone"]}</p>
            )}

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.nextOfKin.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />

            {/* Address */}
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.nextOfKin.address}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NextOfKinForm;
