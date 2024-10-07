import React, { useState, useEffect } from 'react';

function Task9() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
    }
  };

  const stopTimer = () => {
    if (isRunning) {
      setIsRunning(false);
    }
  };

  
  const resetTimer = () => {
    setTime(0);
    setIsRunning(false);
  };

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000); 
    } else if (!isRunning && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval); 
  }, [isRunning, time]);

  return (
    <div>
      <h1>Timer</h1>
      <p>{time} seconds</p>

      <button onClick={startTimer} style={{backgroundColor:"red"}}>Start</button>
      <button onClick={stopTimer} style={{marginLeft:5 , backgroundColor:"yellow"}}>Stop</button>
      <button onClick={resetTimer} style={{marginLeft:5 , backgroundColor:"green"}}>Reset</button>
    </div>
  );
}

export default Task9;
