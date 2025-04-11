import React, { useState } from 'react';
import axios from 'axios';

const JobItem = ({ job, onUpdate, onDelete }) => {
  const [status, setStatus] = useState(job.status);

  const API_BASE = import.meta.env.VITE_API_BASE_URL;
  const handleStatusUpdate = async (newStatus) => {
    try {
      console.log(`Updating job ${job._id} to status: ${newStatus}`);
      const response = await axios.put(`${API_BASE}/jobs/${job._id}`, { status: newStatus });
      console.log('Update response:', response.data);
      setStatus(newStatus);
      if (onUpdate) onUpdate();
    } catch (error) {
      console.error('Error updating status:', error.response?.data || error.message);
      setStatus(job.status);
    }
  };

  const handleDelete = async () => {
    try {
      console.log(`Deleting job ${job._id}`);
      await axios.delete(`${API_BASE}/jobs/${job._id}`);
      if (onDelete) onDelete();
    } catch (error) {
      console.error('Error deleting job:', error.response?.data || error.message);
    }
  };

  return (
    <div className="p-4 sm:p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 mx-2 sm:mx-0 border border-gray-100">
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 truncate">{job.company}</h3>
          <p className="text-md font-medium text-gray-600">{job.role}</p>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm">
          <p className="text-gray-500">
            Status: <span className="font-semibold text-gray-700">{status}</span>
          </p>
          <p className="text-gray-500">
            Applied: {new Date(job.dateOfApplication).toLocaleDateString()}
          </p>
        </div>
        {job.link && (
          <a
            href={job.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-medium text-sm hover:underline transition duration-200"
          >
            View Job Link
          </a>
        )}
        <div className="flex flex-col sm:flex-row gap-3 mt-3">
          <select
            value={status}
            onChange={(e) => {
              const newStatus = e.target.value;
              setStatus(newStatus);
              handleStatusUpdate(newStatus);
            }}
            className="p-2 bg-yellow-50 border border-yellow-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent hover:bg-yellow-100 transition duration-200 text-sm sm:text-base"
          >
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Offer">Offer</option>
            <option value="Rejected">Rejected</option>
          </select>
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-200 font-medium text-sm sm:text-base shadow-sm"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobItem;