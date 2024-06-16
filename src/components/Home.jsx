import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobsAsync } from '../redux/rdx_features/jobs/jobsSlice';
import { signout } from '../redux/rdx_features/auth/authSlice';
import JobList from './utils/JobList';
import Navbar from './Navbar';

const Home = () => {
  const dispatch = useDispatch();
  const { joblists, status, error } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(fetchJobsAsync());
  }, [dispatch]);

  const handleSignOut = () => {
    dispatch(signout());
  };

  return (
    <>
      <Navbar />
      <div className="container-auto h-screen p-5">
        <h1 className="text-4xl font-bold my-8 text-center">FIND YOUR DREAM JOB</h1>
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
      <button className="bg-gray-300 p-2 m-1 rounded-sm" onClick={handleSignOut}>
        Sign Out
      </button>
      <div className='bg-lime-400 h-screen p-5'>
        <h2 className='text-white p-10 text-center text-bold text-4xl'>NEXT PAGE</h2>
      </div>
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

// const Home = () => {
//   const dispatch = useDispatch();
//   const { joblists, status, error } = useSelector((state) => state.jobs);

//   useEffect(() => {
//     dispatch(fetchJobsAsync());
//   }, [dispatch]);

//   return (
//     <>
//       <Navbar />
//       <div className="container-auto h-screen p-5">
//       <h1 className="text-4xl font-bold my-8 text-center  ">FIND_YOUR_DREAM_JOB</h1>
//       {status === 'loading' && <p>Loading...</p>}
//       {status === 'failed' && <p>{error}</p>}
//       {status === 'idle' && <JobList jobs={joblists} />}
      
//     </div>
//     <button
//               className="bg-gray-300 p-2 m-1 rounded-sm"
//               onClick={() => dispatch(signout())}
              
//             >
//               SignOut
//             </button>
//     <div className='bg-lime-400 h-screen p-5 '>
//       <h2 className='text-white p-10 text-center text-bold text-4xl '>NEXT PAGE</h2>
//     </div>
//     </>
//   );
// };

// export default Home;


// // import React, { useEffect } from "react";

// // // import { useNavigate } from "react-router";
// // import { useDispatch, useSelector } from "react-redux";
// // import { signout } from "../redux/rdx_features/auth/authSlice";


// // import Navbar from "./Navbar";
// // // import Clock from "./utils/Clock";


// // const Home = () => {
// //   // const navigate = useNavigate();
// //   const dispatch = useDispatch();
// //   const auth = useSelector((state) => state.auth);
// //   const data = useSelector((state) => state.jobs)
// //   console.log(data.joblists)

// //   return (
// //     <div className="relative min-h-screen">
// //         <Navbar />

// //       {/* <div className="relative z-40 p-4 "> */}
// //       <div className="">
// //         {!auth.token ? (
// //           <div className=" ">
// //               <h1 className="h-screen w-screen bg-gray-700 text-white justify-center flex align-middle text-center">Find Your Dream Job</h1>
// //           </div>
// //         ) : (
// //           <div className="bg-gray-500">
// //             <button
// //               className="bg-gray-300 p-2 m-1 rounded-sm"
// //               onClick={() => dispatch(signout())}
// //             >
// //               SignOut
// //             </button>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Home;
