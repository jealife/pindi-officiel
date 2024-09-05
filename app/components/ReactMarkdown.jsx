import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownReader = ({ content }) => {
  return (
    <div>
      <h2>Contenu Markdown</h2>
      <ReactMarkdown
        components={{
          // Gérer les balises HTML dans le contenu Markdown
          html: ({ children }) => <div dangerouslySetInnerHTML={{ __html: children }} />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownReader;
