import React, { useState } from 'react';
import Navbar from './Navbar.jsx';
import LineGraph from './utils/LineGraph.jsx';
// import UserManagement from './utils/Management/UserManagement.jsx';
// import JobPostings from './utils/Management/JobPostings.jsx';

function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-400 min-h-screen">
        <div className="bg-gray-100 p-8 flex">
          <Sidebar />
          <DataContent />
         </div>
          {/* <UserManagement/>
          <JobPostings /> */}
      </div>
    </>
  );
}

export default Dashboard;

const Sidebar = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { id: 1, name: 'Category A' },
    { id: 2, name: 'Category B' },
    { id: 3, name: 'Category C' },
    { id: 4, name: 'Category D' },
  ];

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="w-1/6 text-black flex flex-col h-screen bg-white">
      {categories.map((category) => (
        <SidebarButton
          key={category.id}
          category={category}
          onClick={() => handleCategoryClick(category.id)}
          isSelected={selectedCategory === category.id}
        />
      ))}
    </div>
  );
};

const SidebarButton = ({ category, onClick, isSelected }) => {
  return (
    <button
      className={`bg-black text-white px-4 py-2 m-1 ${isSelected ? 'bg-blue-600' : ''}`}
      onClick={onClick}
    >
      {category.name}
    </button>
  );
};

const DataContent = () => {
  const [data, setData] = useState(null);

  // Simulated data for each category
  const categoryData = {
    1: 'Data for Category A',
    2: 'Data for Category B',
    3: 'Data for Category C',
    4: 'Data for Category D',
  };

  const handleCategoryChange = (categoryId) => {
    setData(categoryData[categoryId]);
  };

  return (
    <div className="w-5/6 p-1 m-1 bg-white rounded-full">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white h-screen flex items-center justify-center">
          {data ? (
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Selected Category Data</h2>
              <p>{data}</p>
            </div>
          ) : (
            <p className="text-gray-500">Select a category to view data</p>
          )}
        </div>
        <div className="bg-gray-200 h-screen">
          <LineGraph />
          
        </div>
      </div>
    </div>
  );
};


// import React from 'react';
// import JobLists from './utils/Dashboard/JobLists.jsx';
// import JobForm from './utils/Dashboard/JobForm';
// import Navbar from './Navbar.jsx';
// import LineGraph from './utils/LineGraph.jsx'

// function Dashboard() {
//   return (
//     <>
//       <Navbar />
//       <div className="bg-gray-400">
//         {/* <div className="flex items-center justify-center h-screen">
       
//           <h1 className="text-8xl font-bold text-blue-600 cursor-pointer">WELCOME_TO_DASHBOARD</h1>
//         </div> */}
//         <div className="min-h-screen bg-gray-100 p-8">
//           {/* <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
//             </div> */}
//             {/* <JobForm /> */}
//             {/* <JobLists /> */}
//             <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
//       <A />
//         </div>
//       </div>
//       {/* <Test /> */}
//     </>
//   );
// }

// export default Dashboard;

// const Test = () => {
//   return (
//     <div className="flex bg-gray-400">
//       <div className="bg-white text-black w-1/6">
//         <div className="flex justify-center items-center h-screen">
//           <ul>A</ul>
//           <ul>B</ul>
//           <ul>C</ul>
//           <ul>D</ul>
//         </div>
//       </div>
//       <div className="bg-black text-white w-5/6">
//         <div className="flex justify-center items-center h-screen">DATA
//         </div>
//       </div>
//     </div>
//   );
// };

// const A = () => {
//   return (
//     <div className="container-auto">
//       <div className="flex">
//         <div className=" text-black w-1/6">
//           <div className="flex flex-col h-screen">
//             <button className="bg-black text-white px-4 py-2 m-1">A</button>
//             <button className="bg-black text-white px-4 py-2 m-1">A</button>
//             <button className="bg-black text-white px-4 py-2 m-1">A</button>
//             <button className="bg-black text-white px-4 py-2 m-1">A</button>
//             <button className="bg-black text-white px-4 py-2 m-1">A</button>
//             <button className="bg-black text-white px-4 py-2 m-1">A</button>
//             <button className="bg-black text-white px-4 py-2 m-1">A</button>
//             <button className="bg-black text-white px-4 py-2 m-1">A</button>
//             <button className="bg-black text-white px-4 py-2 m-1">A</button>
//           </div>
//         </div>
//         <div className="bg-white text-white w-5/6 p-1 m-1 rounded-full">
//           <div className="grid grid-cols-2 gap-4">
//             <div className="bg-slate-400 h-screen"><LineGraph /></div>
//             <div>
//               <ul className="bg-gray-300 h-1/2"><LineGraph /></ul>
//               <ul className="bg-gray-200 h-1/2">
//                 <LineGraph />
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


// // import React from 'react';
// // import JobLists from './utils/Dashboard/JobLists.jsx'
// // import JobForm from './utils/Dashboard/JobForm';
// // import Navbar from './Navbar.jsx';
// // import LineGraph from './utils/LineGraph.jsx';
// // import Picture from '../images/01.jpg'


// // function Dashboard() {
// //   return (
// //     <>
// //     <Navbar />
// //     <div className='bg-white'>
// //       <img src={Picture} />
// //     <div className="flex items-center justify-center h-screen">
// //         <a href='www.facebook.com' 
// //         className='text-8xl text-sky-800 bg-gray-900 rounded-full p-8 hover:bg-red-800 hover:text-white'
// //          >Nei</a>
// //       <h1 className="text-8xl font-bold text-blue-600 cursor-pointer">WELCOM_TO_DASHBOARD</h1>
// //     </div>
// //     <div className="min-h-screen bg-gray-100 p-8">
// //       <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
// //         <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
// //         <JobForm />
// //         <JobLists />
// //     </div>
// //       </div>
// //     </div>
// //     <div className='flex '>
// //       <div className='bg-black text-white w-1/2  '>
// //         <div className='flex justify-center items-center h-screen'>
// //           <ul>A</ul>
// //           <ul>B</ul>
// //           <ul>C</ul>
// //           <ul>D</ul>
// //         </div>
// //     </div>
// //       <div className='bg-white text-balck w-1/2  '>
// //         <div className='flex justify-center items-center h-screen'>
// //           <ul>A</ul>
// //           <ul>B</ul>
// //           <ul>C</ul>
// //           <ul>D</ul>
// //         </div>
// //     </div>
// //     </div>
// //     <Test />
// //     <A />
// //     </>
// //   );
// // }

// // export default Dashboard;


// // const Test= () => {
// //   return(
// //     <>
// //     <div className='flex '>
// //       <div className='bg-white text-black w-1/6  '>
// //         <div className='flex justify-center items-center h-screen'>
// //           <ul>A</ul>
// //           <ul>B</ul>
// //           <ul>C</ul>
// //           <ul>D</ul>
// //         </div>
// //     </div>
// //       <div className='bg-black text-white w-5/6  '>
// //         <div className='flex justify-center items-center h-screen'>
// //           <ul>A</ul>
// //           <ul>B</ul>
// //           <ul>C</ul>
// //           <ul>D</ul>
// //         </div>
// //     </div>
// //     </div>
// //     </>
// //   )
// // }
// // const A= () => {
// //   return(
// //     <>
// //     <div className='container-auto'>

// //     <div className='flex '>
// //       <div className=' bg-sky-300 text-black w-1/6  '>
// //         <div className='flex flex-col h-screen'>
// //           <ul className='bg-red-400 px-4 py-2 mx-1 my-1'>A</ul>
// //           <ul className='bg-red-400 px-4 py-2 mx-1 '>A</ul>
// //           <ul className='bg-red-400 px-4 py-2 mx-1 my-1'>A</ul>
// //           <ul className='bg-red-400 px-4 py-2 mx-1'>A</ul>
// //           <ul className='bg-red-400 px-4 py-2 mx-1 my-1'>A</ul>
// //           <ul className='bg-red-400 px-4 py-2 mx-1 '>A</ul>
// //           <ul className='bg-red-400 px-4 py-2 mx-1 my-1'>A</ul>
// //           <ul className='bg-red-400 px-4 py-2 mx-1'>A</ul>
// //           <ul className='bg-red-400 px-4 py-2 mx-1 my-1'>A</ul>
// //         </div>
// //     </div>

// //       <div className='bg-lime-300 text-white w-5/6  '>
// //       <div className='grid grid-cols-3 gap-4'>
// //         {/* <ul className='bg-yellow-400 justify-center items-center h-screen'>AAF</ul>
// //         <ul className='bg-yellow-400 justify-center items-center h-screen'>AAF</ul> */}
// //         <ul className='bg-yellow-400  h-screen'>AAF</ul>  
// //         <ul className='bg-blue-400 h-screen'>AAF</ul>  
// //         <div>

// //         <ul className='bg-slate-400  h-1/2'>AAF</ul>  
// //         <ul className='bg-slate-800  h-1/2'>
// //         <LineGraph />
// //         </ul>  
// //         </div>
// //         {/* <ul className='bg-yellow-400  h-1/2'>AAF</ul>   */}
// //       </div>
      
// //     </div>
// //     </div>
// //     </div>
// //     </>
// //   )
// // }

// // // import React from 'react'
// // // import Navbar from './Navbar'

// // // const Dashboard = () => {
// // //   return (
   
// // //     <>
// // //       <Navbar />

// // //     <div className='container-md '>
// // //       <div className='bg-gray-300 grid-rows-2 grid-cols-2 shadow-xl p-2 h-screen  '>
// // //         <ul className='p-4 m-1 bg-black text-white'>A</ul>
// // //         <ul className='p-4 m-1 bg-black text-white'>A</ul>
// // //         <ul className='p-4 m-1 bg-black text-white'>A</ul>
// // //         <ul className='p-4 m-1 bg-black text-white'>A</ul>
// // //         <ul className='p-4 m-1 bg-black text-white'>A</ul>
// // //         <ul className='p-4 m-1 bg-black text-white'>A</ul>
// // //         <ul className='p-4 m-1 bg-black text-white'>A</ul>
// // //         <ul className='p-4 m-1 bg-black text-white'>A</ul>
// // //         <ul className='p-4 m-1 bg-black text-white'>A</ul>
// // //         <ul className='p-4 m-1 bg-black text-white'>A</ul>
// // //         <ul className='p-4 m-1 bg-black text-white'>A</ul>
// // //         <ul className='p-4 m-1 bg-black text-white'>A</ul>
// // //         <ul className='p-4 m-1 bg-black text-white'>A</ul>
// // //         <ul className='p-4 m-1 bg-black text-white'>A</ul>
// // //         <ul className='p-4 m-1 bg-black text-white'>A</ul>
// // //         <ul className='p-4 m-1 bg-black text-white'>A</ul>
// // //         <ul className='p-4 m-1 bg-black text-white'>A</ul>
// // //         <ul className='p-4 m-1 bg-black text-white'>A</ul>
// // //         <div>
// // //           Hello World 
// // //         </div>
// // //       </div>
// // //       <div className='bg-gray-400 grid-rows-2 grid-cols-2 shadow-xl p-2 h-screen'>
// // //       <ul className='p-4 m-1 bg-black text-white'>A</ul>
// // //         <ul className='p-4 m-1 bg-black text-white'>A</ul>
// // //         <ul className='p-4 m-1 bg-black text-white'>A</ul>
// // //         <ul className='p-4 m-1 bg-black text-white'>A</ul>
// // //         <ul className='p-4 m-1 bg-black text-white'>A</ul>
// // //         <ul className='p-4 m-1 bg-black text-white'>A</ul>
// // //         <ul className='p-4 m-1 bg-black text-white'>A</ul>
// // //         <ul className='p-4 m-1 bg-black text-white'>A</ul>
// // //         <ul className='p-4 m-1 bg-black text-white'>A</ul>
// // //       </div>
// // //     </div>
// // //     </>
// // //   )
// // // }

// // // export default Dashboard