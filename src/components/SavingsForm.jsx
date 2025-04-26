import React, { useState } from "react";

const SavingsForm = () => {
  // State for form inputs
  const [selectedSavingsType, setSelectedSavingsType] = useState("");
  const [customSavingsGoal, setCustomSavingsGoal] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // State for tracking the community savings group selection
  const [selectedGroup, setSelectedGroup] = useState("");

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!selectedSavingsType || !customSavingsGoal) {
      alert("Please fill in all required fields.");
      return;
    }

    const formData = {
      savingsType: selectedSavingsType,
      customSavingsGoal,
      selectedGroup,
    };

    console.log("Form Submitted with data:", formData);
    setFormSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">🟢 Select a Savings Type</h2>
      <form onSubmit={handleSubmit}>
        {/* Savings Type Buttons */}
        <div className="flex flex-wrap gap-2 mb-6">
          {[
            "Rent Savings",
            "Holiday Savings",
            "School Fees Savings",
            "Sallah Savings",
            "Easter Savings",
            "Easter Savings Food",
            "Sallah Savings Food",
          ].map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setSelectedSavingsType(type)}
              className={`px-4 py-2 rounded-lg ${
                selectedSavingsType === type
                  ? "bg-blue-600 text-white"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Community Group Savings Table */}
        <h3 className="text-lg font-semibold mb-3">✅ Available Communities</h3>
        <table className="w-full border-collapse border border-gray-300 mb-6">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">Group Name</th>
              <th className="border p-2">Members</th>
              <th className="border p-2">Next Withdrawal User</th>
              <th className="border p-2">Select</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "Arewa Unity", members: 10, nextUser: "Aliyu Musa" },
              { name: "Tech Innovators", members: 8, nextUser: "Zainab Bello" },
              {
                name: "Creative Minds",
                members: 12,
                nextUser: "Abdullahi Umar",
              },
            ].map((group, index) => (
              <tr key={index} className="text-center">
                <td className="border p-2">{group.name}</td>
                <td className="border p-2">{group.members}</td>
                <td className="border p-2">{group.nextUser}</td>
                <td className="border p-2">
                  <input
                    type="radio"
                    name="group"
                    value={group.name}
                    checked={selectedGroup === group.name}
                    onChange={() => setSelectedGroup(group.name)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Custom Target Savings */}
        <h3 className="text-lg font-semibold mb-2">✅ Custom Target Savings</h3>
        <input
          type="text"
          value={customSavingsGoal}
          onChange={(e) => setCustomSavingsGoal(e.target.value)}
          className="w-full p-2 border rounded-md"
          placeholder="Enter your custom savings goal"
        />
      </form>
    </div>
  );
};

export default SavingsForm;
