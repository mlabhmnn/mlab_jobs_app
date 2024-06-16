import React from 'react';
import { Link } from 'react-router-dom';

const JobList = ({ jobs }) => {
    const handleApplyJob = (d) => {
        
        console.log(d, 'from click')
      
        
    }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

      {jobs.map((job) => (
          <div key={job.id} className="bg-white rounded-lg p-4 shadow-2xl">
            <button>Delete</button>
            <Link to={`/post/${job.id}`}>
            <h2 className="text-lg font-semibold">{job.title}</h2>
            <p className="text-gray-600">{job.company}</p>
            <p className="mt-2">{job.description}</p>
            </Link>
          <button onClick={() => handleApplyJob(job.id)} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">Apply Now</button>
        </div>
      ))}
    </div>
  );
};

export default JobList;
