import React, { useState } from 'react';
import './App.css'; 

function Task5() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <header>
        <h1>{darkMode ? 'Dark Mode' : 'Light Mode'}</h1>
        <button onClick={toggleTheme} style={{backgroundColor:"brown"}}>
          {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </header>
      <main>
        <p>
          {darkMode
            ? 'Dark mode is currently enabled.'
            : 'Light mode is currently enabled.'}
        </p>
      </main>
    </div>
  );
}

export default Task5
