

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signout } from "../redux/rdx_features/auth/authSlice";

import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch()
  const [showMenu, setShowMenu] = useState(false);

  const handleSignOut = () => {
    dispatch(signout());
  }

  return (
    <nav className="bg-gray-800 p-4 sticky container-auto">
      <div className="container mx-auto flex justify-between items-center relative">
        <div className="text-white font-bold text-lg">MLAB</div>
        <div className="lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setShowMenu(!showMenu)}
          >
            <svg
              className={`w-8 h-8 ${showMenu ? "hidden" : "block"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
            <svg
              className={`w-8 h-8 ${showMenu ? "block" : "hidden"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            showMenu ? "block" : "hidden"
          } lg:flex lg:items-center lg:space-x-4 absolute bg-gray-800 w-full left-0 top-full z-40 mt-2 lg:relative lg:bg-transparent lg:w-auto lg:mt-0`}
        >
          <Link
            to="/"
            className="text-white block px-4 py-2 transition duration-300 ease-in-out transform hover:translate-x-2"
          >
            HOME
          </Link>
          {/* <Link
            to="/"
            className="text-white block px-4 py-2 transition duration-300 ease-in-out transform hover:translate-x-2"
          >
            DELETE
          </Link> */}
          <Link
            to="/signin"
            className="text-white block px-4 py-2 transition duration-300 ease-in-out transform hover:translate-x-2"
          >
            LOGIN
          </Link>
          <Link
            to="/signup"
            className="text-white block px-4 py-2 transition duration-300 ease-in-out transform hover:translate-x-2"
          >
            SIGNUP
          </Link>
          <Link
            to="/dashboard"
            className="text-white block px-4 py-2 transition duration-300 ease-in-out transform hover:translate-x-2"
          >
            DASHBOARD
          </Link>
          <button className="bg-gray-300 p-2 m-1 rounded-sm" onClick={handleSignOut}>
        Sign Out
      </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;



// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   const [showMenu, setShowMenu] = useState(false);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   return (
//     <nav className="bg-gray-800 p-4 sticky top-0 z-50">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-white font-bold text-lg">MLAB</div>
//         <button
//           className="lg:hidden text-white focus:outline-none"
//           onClick={toggleMenu}
//           aria-label="Toggle menu"
//           aria-expanded={showMenu}
//         >
//           {showMenu ? (
//             <svg
//               className="w-8 h-8"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           ) : (
//             <svg
//               className="w-8 h-8"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           )}
//         </button>
//         <div
//           className={`${
//             showMenu ? "block" : "hidden"
//           } lg:flex lg:items-center lg:space-x-4 absolute bg-gray-800 w-full left-0 top-full z-40 mt-2 lg:relative lg:bg-transparent lg:w-auto lg:mt-0`}
//         >
//           <NavLink
//             exact
//             to="/"
//             onClick={toggleMenu}
//             activeClassName="text-gray-300"
//             className="text-white block px-4 py-2 transition duration-300 ease-in-out transform hover:translate-x-2"
//           >
//             HOME
//           </NavLink>
//           <NavLink
//             to="/signin"
//             onClick={toggleMenu}
//             activeClassName="text-gray-300"
//             className="text-white block px-4 py-2 transition duration-300 ease-in-out transform hover:translate-x-2"
//           >
//             JOB
//           </NavLink>
//           <NavLink
//             to="/signup"
//             onClick={toggleMenu}
//             activeClassName="text-gray-300"
//             className="text-white block px-4 py-2 transition duration-300 ease-in-out transform hover:translate-x-2"
//           >
//             ABOUT_US
//           </NavLink>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
