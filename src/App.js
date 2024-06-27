// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home.jsx";
import SignUp from "./components/utils/SignUp.jsx";
import SignIn from "./components/utils/SignIn.jsx";
import Dashboard from "./components/Dashboard.jsx";
import JobDetail from "./components/utils/jobDetail.jsx";
import PageNotFound from "./components/PageNotFound.jsx";
import Markdown from "./components/utils/Markdown.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/post/:id" element={<JobDetail />} />

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="*" element={<PageNotFound />} />
        <Route path='/markdown' element={<Markdown />} />
      </Routes>
    </Router>
  );
}

export default App;
