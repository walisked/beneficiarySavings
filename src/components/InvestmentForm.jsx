import React, { useState } from 'react';

const InvestmentForm = () => {
  // State for form inputs
  const [occupation, setOccupation] = useState('');
  const [employer, setEmployer] = useState('');
  const [monthlyEarnings, setMonthlyEarnings] = useState('');
  const [selectedInvestment, setSelectedInvestment] = useState('');
  const [selectedContribution, setSelectedContribution] = useState('');
  const [contributionFrequency, setContributionFrequency] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      occupation,
      employer,
      monthlyEarnings,
      selectedInvestment,
      selectedContribution,
      contributionFrequency,
    });
    alert('Form submitted successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4"> Employment/Occupation Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Occupation */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Occupation</label>
            <input
              type="text"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your occupation"
              required
            />
          </div>

          {/* Employer */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Employer (if applicable)</label>
            <input
              type="text"
              value={employer}
              onChange={(e) => setEmployer(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter employer name"
            />
          </div>

          {/* Monthly Earnings */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Monthly Earnings</label>
            <input
              type="number"
              value={monthlyEarnings}
              onChange={(e) => setMonthlyEarnings(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="₦50,000 - ₦10,000,000"
              required
            />
          </div>
        </div>

        {/* Investment Options */}
        <h3 className="mt-6 text-lg font-semibold">🟢 Investment Options</h3>
        <div className="flex flex-wrap gap-2">
          {["Tenured Investment", "Proof of Funds", "Special Savings", "Parofund Esusu Plus", "Derivatives"].map(
            (option) => (
              <button
                key={option}
                type="button"
                onClick={() => setSelectedInvestment(option)}
                className={`px-4 py-2 rounded-lg ${
                  selectedInvestment === option
                    ? 'bg-blue-600 text-white'
                    : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
              >
                {option}
              </button>
            )
          )}
        </div>

        {/* Savings Contribution Structure */}
        <h3 className="mt-6 text-lg font-semibold">🟢 Savings Contribution Structure</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "Easter Savings Cash",
              options: ["₦2500 min: 600 max: 5000 Daily", "₦8500 Weekly min: 4000 max: 14000", "₦2500 min: 5000 max: 100,000 Monthly"],
            },
            {
              title: "Sallah Savings Cash",
              options: ["₦2500 min: N500 max: N5000 Daily", "₦14000 Weekly min: N8500 max: N20,000", "₦10,000 min: N5000 max: N100,000 Monthly"],
            },
            {
              title: "Target Savings",
              options: ["Daily: ₦200", "₦300", "₦400",],
            },
            {
              title: "Special Target Savings",
              options: ["₦2500 - ₦100,000 Monthly"],
            },
          ].map(({ title, options }) => (
            <div key={title} className="p-4 border rounded-lg shadow-sm">
              <h4 className="text-sm font-medium">{title}</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {options.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setSelectedContribution(opt)}
                    className={`px-3 py-1 rounded-md ${
                      selectedContribution === opt
                        ? 'bg-green-600 text-white'
                        : 'bg-green-500 text-white hover:bg-green-600'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contribution Frequency */}
        <h3 className="mt-6 text-lg font-semibold">Contribution Frequency</h3>
        <div className="flex gap-4">
          {["Daily", "Weekly", "Monthly"].map((freq) => (
            <label key={freq} className="flex items-center space-x-2">
              <input
                type="radio"
                name="contribution"
                value={freq}
                checked={contributionFrequency === freq}
                onChange={() => setContributionFrequency(freq)}
                className="h-4 w-4"
                required
              />
              <span>{freq}</span>
            </label>
          ))}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default InvestmentForm;