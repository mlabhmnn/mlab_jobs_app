import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownRenderer = ({ file }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(file)
      .then((response) => response.text())
      .then((text) => setContent(text));
  }, [file]);

  return <ReactMarkdown className="prose">{content}</ReactMarkdown>;
};

export default MarkdownRenderer;
