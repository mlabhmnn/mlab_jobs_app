// src/components/JobList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JobLists = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = () => {
    axios.get('http://localhost:8080/allposting')
      .then(response => setJobs(response.data))
      .catch(error => console.error('Error fetching jobs:', error));
  };

  const deleteJob = (id) => {
    axios.delete(`http://localhost:5000/api/jobs/${id}`)
      .then(() => fetchJobs())
      .catch(error => console.error('Error deleting job:', error));
  };

  const editJob = (id) => {
    // Implement edit functionality here
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Job Listings</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Company</th>
            <th className="px-4 py-2">Location</th>
            <th className="px-4 py-2">Salary</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map(job => (
            <tr key={job.id}>
              <td className="border px-4 py-2">{job.title}</td>
              <td className="border px-4 py-2">{job.description}</td>
              <td className="border px-4 py-2">{job.company}</td>
              <td className="border px-4 py-2">{job.location}</td>
              <td className="border px-4 py-2">{job.salary}</td>
              <td className="border px-4 py-2">
                <button onClick={() => editJob(job.id)} className="mr-2 px-4 py-2 bg-yellow-500 text-white rounded-md shadow-sm hover:bg-yellow-600">
                  Edit
                </button>
                <button onClick={() => deleteJob(job.id)} className="px-4 py-2 bg-red-500 text-white rounded-md shadow-sm hover:bg-red-600">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobLists;
