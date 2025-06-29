import React, { createContext, useContext, useEffect, useState } from 'react';

const docsContext = createContext(null);

const DocsProvider = ({ children }) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    // Check if there's data in localStorage and parse it, otherwise use empty array
    const savedDocs = localStorage.getItem('docs');
    if (savedDocs) {
      try {
        const parsedDocs = JSON.parse(savedDocs);
        // Ensure it's an array
        if (Array.isArray(parsedDocs)) {
          setDocs(parsedDocs);
        }
      } catch (error) {
        console.error('Error parsing docs from localStorage:', error);
        // If parsing fails, clear the corrupted data
        localStorage.removeItem('docs');
      }
    }
  }, []);

  useEffect(() => {
    // Only save to localStorage if docs is not empty
    if (docs.length > 0) {
      localStorage.setItem('docs', JSON.stringify(docs));
    }
  }, [docs]);

  const addDocs = (isDownload, progress, bgcolor, dataAmount, data) => {
    const newDoc = { isDownload, progress, bgcolor, dataAmount, data };
    setDocs(prev => [...prev, newDoc]);
  };

  return (
    <docsContext.Provider value={{ docs, addDocs }}>
      {children}
    </docsContext.Provider>
  );
};

export default DocsProvider;

export const useDocs = () => useContext(docsContext);