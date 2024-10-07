import React, { useState } from 'react';

function Task8() {
  const [text, setText] = useState('');

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h1>Character Counter</h1>
      
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        placeholder="Type something..."
      />

      <p>Character Count: {text.length}</p>
    </div>
  );
}

export default Task8;
