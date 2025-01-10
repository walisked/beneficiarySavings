import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const DashboardPage = () => {
  return (
    <div>
      <Navbar />
      <div className="dashboard">
        <Sidebar />
        <main>
          <h1>Dashboard</h1>
          <p>Manage your Akafta account here.</p>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
