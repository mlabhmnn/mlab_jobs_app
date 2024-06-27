// src/components/JobForm.js
import React, { useState } from 'react';
import axios from 'axios';

const JobForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/jobs', {
      title,
      description,
      company,
      location,
      salary,
    }).then(() => {
      // Optionally, clear the form and refresh the job list
      setTitle('');
      setDescription('');
      setCompany('');
      setLocation('');
      setSalary('');
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="mb-4">
        <label className="block text-gray-700">Job Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Job Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none"
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Company</label>
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Location</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Salary</label>
        <input
          type="number"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none"
          required
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600"
      >
        Add Job
      </button>
    </form>
  );
};

export default JobForm;
