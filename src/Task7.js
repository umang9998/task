import React, { useState } from 'react';

function Task7() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);  
      setTask('');                 
    }
  };

  return (
    <div>
      <h1>To-Do List</h1>
      
      <input
        type="text"
        value={task}
        onChange={handleInputChange}
        placeholder="Enter a new task"
      />

      <button onClick={addTask} style={{marginLeft:10 ,backgroundColor:"royalblue"}}>Add Task</button>
      
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default Task7;
