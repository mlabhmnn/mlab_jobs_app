import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import { signin } from "../../redux/rdx_features/auth/authSlice";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleLogin = () => {
    const credentials = {
      identifier: emailRef.current.value,
      password: passwordRef.current.value,
    };
    dispatch(signin(credentials));
        // Clear input fields after dispatching the action
        emailRef.current.value = '';
        passwordRef.current.value = '';
  };

  useEffect(() => {
    if (auth.token) {
      navigate("/");
    }
  }, [auth.token, navigate]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
        <div className="max-w-md w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-3xl font-bold text-center mb-4">Login</h2>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              ref={emailRef}
              className="bg-gray-100 border-2 border-gray-200 rounded w-full py-2 px-4 mb-2"
            />
            <input
              type="password"
              placeholder="Password"
              ref={passwordRef}
              className="bg-gray-100 border-2 border-gray-200 rounded w-full py-2 px-4 mb-2"
            />
          </div>
          <button
            onClick={handleLogin}
            className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Sign In
          </button>
          {auth.error && (
            <p className="text-red-500 text-center mt-4">
              Error:{" "}
              {typeof auth.error === "object"
                ? JSON.stringify(auth.error)
                : auth.error}
            </p>
          )}
        </div>
        <p className="text-gray-600 text-sm">
          Don't have an account?
          <Link to="/signup" className="text-blue-500">
            Sign Up
          </Link>
        </p>
      </div>
    </>
  );
};

export default SignIn;


// import React, { useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router";
// import { Link } from "react-router-dom";

// import Navbar from "../Navbar";
// import { signin } from "../../redux/rdx_features/auth/authSlice";

// const SignIn = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const auth = useSelector((state) => state.auth);

//   console.log(useSelector(state => state))

//   const emailRef = useRef(null);
//   const passwordRef = useRef(null);

//   const handleLogin = () => {
//     const credentials = {
//       identifier: emailRef.current.value,
//       password: passwordRef.current.value,
//     };

//     dispatch(signin(credentials));
//     // navigate("/");
//     try {
//     } catch (error) {
//       console.error(error, "Login Fail!");
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
//         <div className="max-w-md w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//           <h2 className="text-3xl font-bold text-center mb-4">Login</h2>
//           <div className="mb-4">
//             <input
//               type="email"
//               placeholder="Email"
//               ref={emailRef}
//               className="bg-gray-100 border-2 border-gray-200 rounded w-full py-2 px-4 mb-2"
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               ref={passwordRef}
//               className="bg-gray-100 border-2 border-gray-200 rounded w-full py-2 px-4 mb-2"
//             />
//           </div>
//           <button
//             onClick={handleLogin}
//             className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
//           >
//             Signin
//           </button>
//           {auth.error && (
//             <p className="text-red-500 text-center mt-4">
//               Error:
//               {typeof auth.error === "object"
//                 ? JSON.stringify(auth.error)
//                 : auth.error}
//             </p>
//           )}
//         </div>
//         <p className="text-gray-600 text-sm">
//           Don't have an account?
//           <Link to="/signup" className="text-blue-500">
//             Sign Up
//           </Link>
//         </p>
//       </div>
//     </>
//   );
// };

// export default SignIn;

// // import React, { useRef } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import { useNavigate } from "react-router";
// // import { Link } from "react-router-dom";

// // import Navbar from "../Navbar";
// // import { signin } from "../../redux/rdx_features/auth/authSlice";

// // const SignIn = () => {
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();
// //   const auth = useSelector((state) => state.auth);

// //   const emailRef = useRef(null);
// //   const passwordRef = useRef(null);

// //   const handleLogin = () => {
// //     const credentials = {
// //       identifier: emailRef.current.value,
// //       password: passwordRef.current.value,
// //     };
// //     dispatch(signin(credentials));
// //     navigate("/");
// //   };

// //   return (
// //     <>
// //       <Navbar />
// //       <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
// //         <div className="max-w-md w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
// //           <h2 className="text-3xl font-bold text-center mb-4">Login</h2>
// //           <div className="mb-4">
// //             <input
// //               type="email"
// //               placeholder="Email"
// //               ref={emailRef}
// //               className="bg-gray-100 border-2 border-gray-200 rounded w-full py-2 px-4 mb-2"
// //             />
// //             <input
// //               type="password"
// //               placeholder="Password"
// //               ref={passwordRef}
// //               className="bg-gray-100 border-2 border-gray-200 rounded w-full py-2 px-4 mb-2"
// //             />
// //           </div>
// //           <button
// //             onClick={handleLogin}
// //             className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
// //           >
// //             Login
// //           </button>
// //           {auth.error && (
// //             <p className="text-red-500 text-center mt-4">Error: {auth.error}</p>
// //           )}
// //         </div>
// //         <p className="text-gray-600 text-sm">
// //           Don't have an account?
// //           <Link to="/signup" className="text-blue-500">
// //             Sign Up
// //           </Link>
// //         </p>
// //       </div>
// //     </>
// //   );
// // };

// // export default SignIn;

// // import React, { useRef } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import { signin } from "../../features/auth/authSlice";
// // import { useNavigate } from "react-router";
// // import { Link } from "react-router-dom";

// // const SignIn = () => {
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();
// //   const auth = useSelector((state) => state.auth);
// //   const emailRef = useRef(null);
// //   const passwordRef = useRef(null);

// //   const handleLogin = () => {
// //     const credentials = {
// //       email: emailRef.current.value,
// //       password: passwordRef.current.value,
// //     };
// //     dispatch(signin(credentials));
// //     navigate("/");
// //   };

// //   return (
// //     <div className="bg-sky-300 p-2 m-1 rounded-sm flex justify-center">
// //       <input
// //         type="email"
// //         placeholder="Email"
// //         ref={emailRef}
// //         className="bg-sky-300 p-2 m-1 rounded-sm"
// //       />
// //       <input
// //         type="password"
// //         placeholder="Password"
// //         ref={passwordRef}
// //         className="bg-sky-300 p-2 m-1 rounded-sm"
// //       />
// //       <button
// //         onClick={handleLogin}
// //         className="bg-black text-white  p-2 m-1 rounded-sm"
// //       >
// //         Login
// //       </button>
// //       <Link to="signup">To SignUp New Accounts</Link>
// //       {auth.error && <p>Error: {auth.error}</p>}
// //     </div>
// //   );
// // };

// // export default SignIn;
