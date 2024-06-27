import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobsAsync } from '../redux/rdx_features/jobs/jobsSlice';
// import { signout } from '../redux/rdx_features/auth/authSlice';
import JobList from './utils/JobList';
import Navbar from './Navbar';
// import DarkMode from './utils/DarkMode';


const Home = () => {
  const dispatch = useDispatch();
  const { joblists, status, error } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(fetchJobsAsync());
  }, [dispatch]);

  // const handleSignOut = () => {
  //   dispatch(signout());
  // };

  return (
    <>
      <Navbar />
      {/* Can Adjust the background here! */}
      <div className="container-auto h-screen p-5 bg-black  "> 
        <h1 className="text-4xl text-white font-bold my-8 text-center">FIND YOUR DREAM JOB</h1>
        {/* <div className="dark:bg-gray-900 dark:text-white min-h-screen">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold">Hello Tailwind CSS Dark Mode!</h1>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac ligula vel odio
          commodo viverra.
          </p>
          </div>
          </div> */}
        {status === 'loading' && <p>Loading...</p>}
        {status === 'failed' && (
          <div className="text-red-500">
            <p>Failed to load jobs. Please try again later.</p>
            <p>Error: {error}</p>
          </div>
        )}
        {status === 'idle' && joblists.length > 0 && <JobList jobs={joblists} />}
        {status === 'idle' && joblists.length === 0 && <p>No jobs available</p>}
      </div>

      {/* <button className="bg-gray-300 p-2 m-1 rounded-sm" onClick={handleSignOut}>
        Sign Out
      </button> */}
            {/* <DarkMode /> */}

    </>
  );
};

export default Home;





// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchJobsAsync } from '../redux/rdx_features/jobs/jobsSlice';
// import { signout } from '../redux/rdx_features/auth/authSlice';
// import JobList from './utils/JobList';
// import Navbar from './Navbar';
// import DarkMode from './utils/DarkMode';

// const Home = () => {
//   const dispatch = useDispatch();
//   const { joblists, status, error } = useSelector((state) => state.jobs);

//   useEffect(() => {
//     dispatch(fetchJobsAsync());
//   }, [dispatch]);

//   const handleSignOut = () => {
//     dispatch(signout());
//   };

//   return (
//     <div className="min-h-screen">
//       <Navbar />
//       <DarkMode />
//       <div className="container-auto p-5">
//         <h1 className="text-4xl font-bold my-8 text-center">FIND YOUR DREAM JOB</h1>
//         {status === 'loading' && <p>Loading...</p>}
//         {status === 'failed' && (
//           <div className="text-red-500">
//             <p>Failed to load jobs. Please try again later.</p>
//             <p>Error: {error}</p>
//           </div>
//         )}
//         {status === 'idle' && joblists.length > 0 && <JobList jobs={joblists} />}
//         {status === 'idle' && joblists.length === 0 && <p>No jobs available</p>}
//       </div>
//       <button className="bg-gray-300 p-2 m-1 rounded-sm" onClick={handleSignOut}>
//         Sign Out
//       </button>
//     </div>
//   );
// };

// export default Home;