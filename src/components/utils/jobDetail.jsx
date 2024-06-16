import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from '../Navbar';

const JobDetail = () => {
  const { id } = useParams();
  console.log(id,'from')
  const job = useSelector((state) =>
    state.jobs.joblists.find((job) => job.id === parseInt(id))
  );
console.log(job, 'from jobDetails')
  
if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <>
    <Navbar />
    {/* {!job ?
     (<div>
      <h3 className='p-2'>
      Job Not Found...
      </h3>
      <Link to='/' className='bg-sky-300 p-2 rounded-md'>Return Home</Link>
      </div> 
      
    ) 
     :
     ( */}
      <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold">{job.title}</h1>
      <h2 className="text-xl mt-2">{job.company}</h2>
      <p className="mt-4">{job.description}</p>
      <button onClick={() => alert("Job Applied!!!")} className="mt-4 bg-blue-500 hover:bg-sky-600 text-white py-2 px-4 rounded-md">Apply Now</button>
      <Link to='/' > <button className="mt-4 bg-sky-500 underline-offset-1 hover:bg-blue-600 text-white py-2 px-4 rounded-md"> Return Home </button></Link>
    {/* )
    } */}
    </div>
    </>
  );
};

export default JobDetail;
