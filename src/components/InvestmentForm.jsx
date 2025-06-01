import React from "react";

const InvestmentForm = ({ formData, setFormData, errors }) => {
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Employment/Occupation Details</h2>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Occupation */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Occupation</label>
            <input
              type="text"
              value={formData.occupation}
              onChange={(e) => handleInputChange("occupation", e.target.value)}
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
              value={formData.employer}
              onChange={(e) => handleInputChange("employer", e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter employer name"
            />
          </div>

          {/* Monthly Earnings */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Monthly Earnings</label>
            <input
              type="number"
              value={formData.monthlyEarnings}
              onChange={(e) => handleInputChange("monthlyEarnings", e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="₦50,000 - ₦10,000,000"
              required
            />
          </div>
        </div>

        {/* Investment Options */}
        <h3 className="mt-6 text-lg font-semibold">🟢 Investment Options</h3>
        <div className="flex flex-wrap gap-2">
          {[
            "Tenured Investment",
            "Proof of Funds",
            "Special Savings",
            "Parofund Esusu Plus",
            "Derivatives",
            "Sanata",
          ].map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => handleInputChange("selectedInvestment", option)}
              className={`px-4 py-2 rounded-lg ${
                formData.selectedInvestment === option
                  ? "bg-blue-600 text-white"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Savings Contribution Structure */}
        <h3 className="mt-6 text-lg font-semibold">🟢 Savings Contribution Structure</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "Easter Savings Cash",
              options: [
                " min: N500 max: N5,000",
                " min: ₦5,000 max: N10,000",
                "min: N20,000 max: N100,000",
              ],
            },
            {
              title: "Sallah Savings Cash",
              options: [
                " min: N500 max: N5,000",
                " min: ₦5,000 max: N10,000",
                "min: N20,000 max: N100,000",
              ],
            },
            {
              title: "Target Savings",
              options: ["Daily: ₦500,000" - "₦10,000,000"],
            },
            {
              title: "Special Target Savings",
              options: ["₦10,000,000 - ₦100,000,000"],
            },
          ].map(({ title, options }) => (
            <div key={title} className="p-4 border rounded-lg shadow-sm">
              <h4 className="text-sm font-medium">{title}</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {options.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => handleInputChange("selectedContribution", opt)}
                    className={`px-3 py-1 rounded-md ${
                      formData.selectedContribution === opt
                        ? "bg-green-600 text-white"
                        : "bg-green-500 text-white hover:bg-green-600"
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
                checked={formData.contributionFrequency === freq}
                onChange={() => handleInputChange("contributionFrequency", freq)}
                className="h-4 w-4"
                required
              />
              <span>{freq}</span>
            </label>
          ))}
        </div>
      </form>
    </div>
  );
};

export default InvestmentForm;
