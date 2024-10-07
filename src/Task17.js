import React, { useState, useEffect } from 'react';

const Task17 = () => {
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    if (timeLeft === 0) return; 

    const intervalId = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]); 

  return (
    <div>
      <h1>Countdown Timer</h1>
      <h2>{timeLeft > 0 ? timeLeft : 'Time’s up!'}</h2>
    </div>
  );
};

export default Task17;
