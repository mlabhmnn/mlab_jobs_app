import React from "react";
import MarkdownRenderer from "./MarkdownRenderer";
import md from "../../markdown/markdown.md";

import JobPostingForm from "./JobPostingForm";

const Markdown = () => {
  return (
    <div>
      <div>
        <JobPostingForm />
      </div>
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-xl">React Markdown with Tailwind CSS</h1>
      </header>
      <main className="p-4">
        <MarkdownRenderer file={md} />
      </main>
    </div>
  );
};

export default Markdown;
