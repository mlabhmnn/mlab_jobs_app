import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

import Navbar from "../Navbar";
import { signup } from "../../redux/rdx_features/auth/authSlice";

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  console.log(auth)

  const identifierRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const userTypeRef = useRef("employer"); // Default user type
  const agreementRef = useRef(false); // User agreement

  const handleSignup = () => {
    const credentials = {
      identifier: identifierRef.current.value,
      password: passwordRef.current.value,
      confirmPassword: confirmPasswordRef.current.value,
      userType: userTypeRef.current,
    };
    console.log(
      credentials.identifier,
      credentials.password,
      credentials.confirmPassword,
      credentials.userType,
      "at SignUp"
    );
    // if (
    //   !identifier ||
    //   !password ||
    //   !credentials.confirmPassword ||
    //   !agreementRef.current
    // ) {
    //   alert("Please fill in all fields and agree to the terms.");
    //   return;
    // }

    if (credentials.password !== credentials.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    dispatch(signup(credentials))
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error(error, "Sign Up Failed!");
      });
  };

  const handleUserTypeChange = (event) => {
    userTypeRef.current = event.target.value;
  };

  const handleAgreementChange = () => {
    agreementRef.current = !agreementRef.current;
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
        <div className="max-w-md w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-3xl font-bold text-center mb-4">Sign Up</h2>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Signin With Email / Username"
              ref={identifierRef}
              className="bg-gray-100 border-2 border-gray-200 rounded w-full py-2 px-4 mb-2"
            />
            <input
              type="password"
              placeholder="Password"
              ref={passwordRef}
              className="bg-gray-100 border-2 border-gray-200 rounded w-full py-2 px-4 mb-2"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              ref={confirmPasswordRef}
              className="bg-gray-100 border-2 border-gray-200 rounded w-full py-2 px-4 mb-2"
            />
            <div className="mb-4">
              <label className="mr-2">
                <input
                  type="radio"
                  name="userType"
                  value="jobseeker"
                  defaultChecked={true}
                  onChange={handleUserTypeChange}
                />
                Jobseeker
              </label>
              <label className="mr-2">
                <input
                  type="radio"
                  name="userType"
                  value="employer"
                  onChange={handleUserTypeChange}
                />
                Employer
              </label>
            </div>
            <div className="mb-4">
              <label>
                <input type="checkbox" onChange={handleAgreementChange} />
                <span className="ml-2">
                  I agree to the terms and conditions
                </span>
              </label>
            </div>
          </div>

          <button
            onClick={handleSignup}
            className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Sign Up
          </button>
          {/* {auth.error && (
            <p className="text-red-500 text-center mt-4">Error: {auth.error}</p>
          )} */}
        </div>
        <p className="text-gray-600 text-sm">
          Already have an account?
          <Link to="/signin" className="text-blue-500">
            Sign In
          </Link>
        </p>
        <p className="text-gray-600 text-sm">
          SignUp With Username
          <Link to="/signup-username" className="text-blue-500">
            With Username
          </Link>
        </p>
        <p className="text-gray-600 text-sm">
          SignUp With PhoneNumber{" "}
          <Link to="/signup-phone" className="text-blue-500">
            With Phone Number
          </Link>
        </p>
      </div>
    </>
  );
}

export default SignUp;
