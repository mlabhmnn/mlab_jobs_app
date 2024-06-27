import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const JobList = ({ jobs }) => {
    const [applicationStatus, setApplicationStatus] = useState('');

    const handleApplyJob = async (jobId) => {
        try {
            // Simulate sending a job application request
            // You should replace this with an actual API call
            // For example:
            // const response = await fetch('/api/apply', { method: 'POST', body: JSON.stringify({ jobId }) });
            // const result = await response.json();
            console.log(`Applying for job with ID: ${jobId}`);
            
            // Mock success response
            const result = { success: true };

            if (result.success) {
                setApplicationStatus(`Successfully applied for job ID: ${jobId}`);
            } else {
                setApplicationStatus(`Failed to apply for job ID: ${jobId}`);
            }
        } catch (error) {
            setApplicationStatus(`Error applying for job ID: ${jobId}`);
            console.error('Error applying for job:', error);
        }
    }

    return (
        <div>
            {applicationStatus && <div className="mb-4 text-center text-green-500">{applicationStatus}</div>}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {jobs.map((job) => (
                    <div key={job.id} className="bg-gray-700 text-white rounded-lg p-4 shadow-2xl">
                        <button onClick={() => console.log('Delete')}>Delete</button>
                        <Link to={`/post/${job.id}`}>
                            <h2 className="text-lg font-semibold">{job.title}</h2>
                            <p className="text-gray-600">{job.company}</p>
                            <p className="mt-2">{job.description}</p>
                        </Link>
                        <button 
                            onClick={() => handleApplyJob(job.id)} 
                            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
                        >
                            Apply Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobList;


// import React from 'react';
// import { Link } from 'react-router-dom';

// const JobList = ({ jobs }) => {
//     const handleApplyJob = (d) => {
        
//         console.log(d, 'from click')
      
        
//     }
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//       {jobs.map((job) => (
//           <div key={job.id} className="bg-white rounded-lg p-4 shadow-2xl">
//             <button onClick={() => console.log('Delete')}>Delete</button>
//             <Link to={`/post/${job.id}`}>
//             <h2 className="text-lg font-semibold">{job.title}</h2>
//             <p className="text-gray-600">{job.company}</p>
//             <p className="mt-2">{job.description}</p>
//             </Link>
//           <button onClick={() => handleApplyJob(job.id)} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">Apply Now</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default JobList;


