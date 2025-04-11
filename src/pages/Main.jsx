import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import JobForm from '../components/JobForm';
import JobList from '../components/JobList';


const Main = () => {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleJobAdded = () => {
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="pt-14 sm:pt-16 pb-6 mt-4">
        <JobForm onJobAdded={handleJobAdded} />
        <JobList key={refreshKey} />
      </div>
    </div>
  );
};

export default Main;