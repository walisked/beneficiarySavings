import React, { useState } from 'react';

const SavingsForm = () => {
  // State for form inputs
  const [selectedSavingsType, setSelectedSavingsType] = useState('');
  const [customSavingsGoal, setCustomSavingsGoal] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      selectedSavingsType,
      customSavingsGoal,
    });
    alert('Form submitted successfully!');
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
                  ? 'bg-blue-600 text-white'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Community Group Savings Table */}
        <h3 className="text-lg font-semibold mb-3">✅  Available Communities</h3>
        <table className="w-full border-collapse border border-gray-300 mb-6">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">Group Name</th>
              <th className="border p-2">Members</th>
              <th className="border p-2">Next Withdrawal User</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "Arewa Unity", members: 10, nextUser: "Aliyu Musa" },
              { name: "Tech Innovators", members: 8, nextUser: "Zainab Bello" },
              { name: "Creative Minds", members: 12, nextUser: "Abdullahi Umar" },
            ].map((group, index) => (
              <tr key={index} className="text-center">
                <td className="border p-2">{group.name}</td>
                <td className="border p-2">{group.members}</td>
                <td className="border p-2">{group.nextUser}</td>
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

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default SavingsForm;