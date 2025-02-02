import React, { useState, useEffect } from 'react';

const PersonalInfoForm = () => {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [lgas, setLgas] = useState([]);

  useEffect(() => {
    // Fetch states from the API
    fetch('http://states-and-cities.com/api/v1/states')
      .then(response => response.json())
      .then(data => setStates(data))
      .catch(error => console.error('Error fetching states:', error));
  }, []);

  useEffect(() => {
    if (selectedState) {
      // Fetch LGAs for the selected state
      fetch(`http://states-and-cities.com/api/v1/states/${selectedState}/lgas`)
        .then(response => response.json())
        .then(data => setLgas(data))
        .catch(error => console.error('Error fetching LGAs:', error));
    }
  }, [selectedState]);

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Distributor Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          {/* Middle Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Middle Name</label>
            <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          {/* Date of Birth */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
            <input type="date" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          {/* Marital Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Marital Status</label>
            <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
              <option>Single</option>
              <option>Married</option>
              <option>Divorced</option>
              <option>Widowed</option>
            </select>
          </div>
          {/* Mother's Maiden Name */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Mother's Maiden Name</label>
            <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          {/* State of Origin */}
          <div>
            <label className="block text-sm font-medium text-gray-700">State of Origin</label>
            <select 
              value={selectedState} 
              onChange={handleStateChange} 
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            >
              <option value="">Select a state</option>
              {states.map(state => (
                <option key={state.id} value={state.id}>{state.name}</option>
              ))}
            </select>
          </div>
          {/* Place of Birth */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Place of Birth</label>
            <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          {/* Local Government Area */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Local Government Area</label>
            <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
              <option value="">Select an LGA</option>
              {lgas.map(lga => (
                <option key={lga.id} value={lga.id}>{lga.name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-6">
          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfoForm;