import React, { useState, useEffect } from 'react';

const Task15 = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500); 

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedTerm) {
      const filteredResults = mockData.filter(item =>
        item.toLowerCase().includes(debouncedTerm.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  }, [debouncedTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {results.length > 0 ? (
          results.map((result, index) => <li key={index}>{result}</li>)
        ) : (
          <li>No results found</li>
        )}
      </ul>
    </div>
  );
};

const mockData = ['Apple','Banana','Orange','Grapes','Mango','Pineapple','Strawberry','Watermelon'];

export default Task15;
