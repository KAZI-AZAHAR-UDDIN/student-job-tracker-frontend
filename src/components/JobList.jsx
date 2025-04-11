import React, { useEffect, useState } from 'react';
import axios from 'axios';
import JobItem from './JobItem';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [statusFilter, setStatusFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState('newest');

  const fetchJobs = async () => {
    try {
      console.log('Fetching jobs...');
      const response = await axios.get('/api/jobs');
      setJobs(response.data);
    } catch (error) {
      console.error('Error fetching jobs:', error.response?.data || error.message);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const filteredJobs = jobs
    .filter((job) => statusFilter === 'All' || job.status === statusFilter)
    .sort((a, b) =>
      sortOrder === 'newest'
        ? new Date(b.dateOfApplication) - new Date(a.dateOfApplication)
        : new Date(a.dateOfApplication) - new Date(b.dateOfApplication)
    );

  return (
    <div className="max-w-5xl mx-auto mt-8 px-4 sm:px-6 py-6 bg-gradient-to-b from-gray-50 to-white rounded-2xl shadow-lg">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center">
        Job Applications
      </h2>
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Status</label>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 text-sm sm:text-base"
          >
            <option value="All">All</option>
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Offer">Offer</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Sort by Date</label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 text-sm sm:text-base"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>
      </div>
      {filteredJobs.length === 0 ? (
        <p className="text-gray-500 text-center text-sm sm:text-base">
          No job applications match the filter.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {filteredJobs.map((job) => (
            <JobItem key={job._id} job={job} onUpdate={fetchJobs} onDelete={fetchJobs} />
          ))}
        </div>
      )}
    </div>
  );
};

export default JobList;