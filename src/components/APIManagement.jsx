import React, { useState } from "react";

const APIManagement = () => {
  const [apis, setApis] = useState([]);
  const [form, setForm] = useState({ url: "", description: "", parameters: "" });

  const handleAddApi = () => {
    setApis([...apis, { ...form, id: Date.now() }]);
    setForm({ url: "", description: "", parameters: "" });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">API Management</h2>
      <div className="space-y-4 mb-6">
        <input
          type="text"
          placeholder="API URL"
          className="border p-2 w-full"
          value={form.url}
          onChange={(e) => setForm({ ...form, url: e.target.value })}
        />
        <textarea
          placeholder="Description"
          className="border p-2 w-full"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Parameters"
          className="border p-2 w-full"
          value={form.parameters}
          onChange={(e) => setForm({ ...form, parameters: e.target.value })}
        />
        <button
          className="bg-blue-500 text-white p-2 rounded-lg"
          onClick={handleAddApi}
        >
          Add API
        </button>
      </div>
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-2">URL</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {apis.map((api) => (
            <tr key={api.id}>
              <td className="border p-2">{api.url}</td>
              <td className="border p-2">{api.description}</td>
              <td className="border p-2">
                <button className="text-red-500">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default APIManagement;
