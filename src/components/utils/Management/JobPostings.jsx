import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { fetchJobs } from '../../../redux/rdx_features/jobs/api/api';

const JobPostings = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [requirements, setRequirements] = useState('');
  const [salary, setSalary] = useState('');
  const [location, setLocation] = useState('');
  const [jobPostings, setJobPostings] = useState([]);

  // Function to fetch all job postings
  const fetchJobPostings = async () => {
    try {
      const response = await axios.get('http://localhost:8080/jobs/allposting');
      setJobPostings(response.data);
    } catch (error) {
      console.error('Fetch Job Postings Error:', error.response.data);
    }
  };

  // Function to handle creating a new job posting
  // const handleCreatePosting = async () => {
  //   try {
  //   const data = await fetchJobs()
  //   console.log('Job Posting Created:', data);
  //   return data;
  //   } catch (error) {
  //     console.error('Create Job Posting Error:', error.response.data);
  //   }
  // };

  useEffect(() => {
    dispatch(fetchJobsAsync());
  }, [dispatch]);

  return (
    <div>
      <h2>Job Postings</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Requirements"
        value={requirements}
        onChange={(e) => setRequirements(e.target.value)}
      />
      <input
        type="text"
        placeholder="Salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={handleCreatePosting}>Create Job Posting</button>

      <div>
        <h3>Job Postings:</h3>
        <ul>
          {jobPostings.map((job) => (
            <li key={job.id}>
              {job.title} - {job.location}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JobPostings;
