import React, { useState, useEffect } from 'react';

const Task20 = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []); 

  return (
    <div>
      <h1>Network Status</h1>
      {isOnline ? (
        <p style={{ color: 'green' }}>You are Online</p>
      ) : (
        <p style={{ color: 'red' }}>You are Offline</p>
      )}
    </div>
  );
};

export default Task20;
