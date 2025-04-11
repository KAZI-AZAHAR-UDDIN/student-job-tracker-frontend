import React, { useState } from 'react';
import axios from 'axios';

const JobForm = ({ onJobAdded }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    company: '',
    role: '',
    status: 'Applied',
    dateOfApplication: '',
    link: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/jobs', formData);
      console.log('Job added:', response.data);
      setFormData({
        company: '',
        role: '',
        status: 'Applied',
        dateOfApplication: '',
        link: '',
      });
      setIsFormOpen(false);
      if (onJobAdded) onJobAdded(response.data);
    } catch (error) {
      console.error('Error adding job:', error.response?.data || error.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-6 px-4 sm:px-6 relative z-10">
      {!isFormOpen && (
        <button
          onClick={() => setIsFormOpen(true)}
          className="w-full max-w-xs mx-auto sm:max-w-none sm:w-auto px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-lg hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 font-semibold text-base sm:text-lg block"
        >
          Add New Job
        </button>
      )}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 sm:p-0">
          <div className="w-full max-w-md sm:max-w-lg bg-white rounded-2xl shadow-2xl p-4 sm:p-6 relative">
            <button
              onClick={() => setIsFormOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 font-bold text-xl sm:text-2xl transition duration-200"
            >
              ✕
            </button>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center">
              Add Job Application
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 text-sm sm:text-base"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 text-sm sm:text-base"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 text-sm sm:text-base"
                >
                  <option value="Applied">Applied</option>
                  <option value="Interview">Interview</option>
                  <option value="Offer">Offer</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date of Application</label>
                <input
                  type="date"
                  name="dateOfApplication"
                  value={formData.dateOfApplication}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 text-sm sm:text-base"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Link (Optional)</label>
                <input
                  type="url"
                  name="link"
                  value={formData.link}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 text-sm sm:text-base"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-semibold text-sm sm:text-base shadow-sm"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobForm;