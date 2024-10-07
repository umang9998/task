import React, { useState } from 'react';

const Task1 = () => {
const [count, setCount] = useState(0);
const increment = () => {
    setCount(count + 1);
  };
const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Number:{count}</h2>
      <button onClick={increment} style={{ marginRight: '10px' ,backgroundColor:"red"}} >+</button>
      <button onClick={decrement} style={{backgroundColor:"green"}}>-</button>
    </div>
  );
};

export default Task1;
