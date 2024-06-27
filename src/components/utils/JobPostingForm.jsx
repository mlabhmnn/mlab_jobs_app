import React, { useState } from "react";
import axios from "axios";

const JobPostingForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const userId = 1; // Replace with actual user ID

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/job-postings",
        {
          userId,
          title,
          content,
        }
      );
      console.log("Job posting added:", response.data);
    } catch (error) {
      console.error("Error adding job posting:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Content:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      <button type="submit">Submit Job Posting</button>
    </form>
  );
};

export default JobPostingForm;
