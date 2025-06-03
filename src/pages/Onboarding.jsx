import { useState } from "react";
import { FaUserTie, FaBriefcase } from "react-icons/fa";
import axios from "axios";

const OnboardingPage = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dateOfBirth: "",
    courseOfStudy: "",
    username: "",
    password: "",
    cv: null,
  });

  const handleSelect = (role) => {
    setSelectedRole(role);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, cv: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/brm/create`, {
        username: formData.username,
        password: formData.password,
      });

      alert(response.data.message);
      setFormData({
        firstName: "",
        middleName: "",
        lastName: "",
        dateOfBirth: "",
        courseOfStudy: "",
        username: "",
        password: "",
        cv: null,
      });
    } catch (error) {
      alert("Error: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Admin Onboarding</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Distributor Onboarding */}
        <div
          onClick={() => handleSelect("Distributor Level 3")}
          className={`cursor-pointer p-6 bg-white shadow-lg rounded-lg flex flex-col items-center transition-transform transform hover:scale-105 ${
            selectedRole === "Distributor Level 3" ? "border-4 border-blue-500" : ""
          }`}
        >
          <FaUserTie className="text-5xl text-blue-500 mb-3" />
          <h3 className="text-xl font-semibold">Onboard Level 3 Distributor</h3>
          <p className="text-gray-600 text-center mt-2">
            Assign and onboard a new Level 3 Distributor.
          </p>
        </div>

        {/* BRM Onboarding */}
        <div
          onClick={() => handleSelect("BRM")}
          className={`cursor-pointer p-6 bg-white shadow-lg rounded-lg flex flex-col items-center transition-transform transform hover:scale-105 ${
            selectedRole === "BRM" ? "border-4 border-green-500" : ""
          }`}
        >
          <FaBriefcase className="text-5xl text-green-500 mb-3" />
          <h3 className="text-xl font-semibold">Onboard BRM</h3>
          <p className="text-gray-600 text-center mt-2">
            Assign and onboard a Business Relationship Manager.
          </p>
        </div>
      </div>

      {/* Conditional Form Rendering */}
      {selectedRole === "BRM" ? (
        <form onSubmit={handleSubmit} className="mt-6 bg-white p-6 shadow-lg rounded-lg w-full max-w-md">
          <h3 className="text-lg font-semibold mb-4">BRM Onboarding Form</h3>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="w-full p-2 mb-3 border rounded"
          />
          <input
            type="text"
            name="middleName"
            value={formData.middleName}
            onChange={handleChange}
            placeholder="Middle Name"
            className="w-full p-2 mb-3 border rounded"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="w-full p-2 mb-3 border rounded"
          />
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="w-full p-2 mb-3 border rounded"
          />
          <input
            type="text"
            name="courseOfStudy"
            value={formData.courseOfStudy}
            onChange={handleChange}
            placeholder="Course of Study"
            className="w-full p-2 mb-3 border rounded"
          />
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            className="w-full p-2 mb-3 border rounded"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full p-2 mb-3 border rounded"
          />
          <div className="mb-3">
            <label className="block mb-2">Upload CV</label>
            <input type="file" onChange={handleFileChange} className="w-full p-2 border rounded" />
            <p className="text-sm text-gray-500 mt-1">Or upload from Google Drive</p>
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      ) : selectedRole === "Distributor Level 3" ? (
        <p className="mt-6 text-gray-700 font-semibold">Coming Soon...</p>
      ) : null}
    </div>
  );
};

export default OnboardingPage;
