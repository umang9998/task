import React, { useState } from 'react';

const  Task3 = () => {
  const [formData, setFormData] = useState({
    text: '',
    checkbox: false,
    radio: '',
    select: '',
    color: '#000000',
    date: '',
    number: 0,
    password: '',
    range: 50,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto' }}>
      <h1> Multiple From</h1>

      <div>
        <label>Full Nmae</label>
        <input
          type="text"
          name="text"
          value={formData.text}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Checkbox: </label>
        <input
          type="checkbox"
          name="checkbox"
          checked={formData.checkbox}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Gender:</label>
        <input
          type="radio"
          name="radio"
          value="male"
          checked={formData.radio === 'male'}
          onChange={handleChange}
        />
        Male
        <input
          type="radio"
          name="radio"
          value="option2"
          checked={formData.radio === 'option2'}
          onChange={handleChange}
        />
        Female
        
        <input
          type="radio"
          name="radio"
          value="Other"
          checked={formData.radio === 'other'}
          onChange={handleChange}
        />
        Other

      </div>

      <div>
        <label>Select: </label>
        <select
          name="select"
          value={formData.select}
          onChange={handleChange}
        >
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
      </div>

      <div>
        <label>Color: </label>
        <input
          type="color"
          name="color"
          value={formData.color}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Date: </label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Number: </label>
        <input
          type="number"
          name="number"
          value={formData.number}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Password: </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Range: </label>
        <input
          type="range"
          name="range"
          value={formData.range}
          onChange={handleChange}
          min="0"
          max="100"
        />
        <span>{formData.range}</span>
      </div>

      <button type="submit" style={{ marginTop: '20px' , backgroundColor:"blue", display:"flex"}}>Submit</button>
    </form>
  );
};

export default Task3;
