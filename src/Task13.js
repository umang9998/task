import React, { useState, useEffect } from 'react';

const Task13 = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  return (
    <div>
      <h1>Timer: {time} seconds</h1>
      <button onClick={handleStartStop} style={{backgroundColor:"blue" , marginLeft:"5px"}}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <button onClick={handleReset} disabled={isRunning} style={{backgroundColor:"gold", marginLeft:"5px"}}> 
        Reset
      </button>
    </div>
  );
};

export default Task13;
