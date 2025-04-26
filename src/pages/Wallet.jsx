import { useState } from "react";

const Wallets = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const daysInMonth = (month) => new Date(2024, month, 0).getDate();

export default function CalendarWallet() {
  const [checkedDays, setCheckedDays] = useState({});
  const [wallet, setWallet] = useState({ totalSavings: 5000, withdraw: 1000, totalBalance: 4000 });

  const handleCheckboxChange = (month, day) => {
    setCheckedDays((prev) => {
      const key = `${month}-${day}`;
      return { ...prev, [key]: !prev[key] };
    });
  };

  return (
    <div>
      {/* Wallet Details */}
      <div className="mb-6 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-2">Wallet Details</h2>
        <div className="flex justify-between text-lg font-semibold">
          <span>Total Savings: ${wallet.totalSavings}</span>
          <span>Withdraw: ${wallet.withdraw}</span>
          <span>Total Balance: ${wallet.totalBalance}</span>
        </div>
      </div>

      {/* Calendar */}
      <div className="grid grid-cols-1 gap-6">
        {Wallets.map((month, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">{month}</h3>
            <div className="grid grid-cols-7 gap-2">
              {[...Array(daysInMonth(index + 1))].map((_, day) => (
                <label key={day} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={checkedDays[`${index + 1}-${day + 1}`] || false}
                    onChange={() => handleCheckboxChange(index + 1, day + 1)}
                    className="h-4 w-4 text-blue-500 border-gray-300 rounded"
                  />
                  <span className="text-sm">{day + 1}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
