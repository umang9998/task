import React, { useState } from 'react';

const Task4= () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateLogin = () => {
    const { username, password } = formData;

    if (username === '' || password === '') {
      setErrorMessage('Both fields are required.');
      setSuccessMessage(''); 
      return false;
    }

    if (username !== 'user123' || password !== 'pass123') {
      setErrorMessage('Invalid username or password.');
      setSuccessMessage('');
      return false;
    }

    setErrorMessage('');
    setSuccessMessage('Login successful!');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateLogin();
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', textAlign: 'center' }}>
      <h1>Login Form</h1>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={{ padding: '10px', width: '100%' }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ padding: '10px', width: '100%' }}
          />
        </div>

        <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' , backgroundColor:"rosybrown" }}>
          Login
        </button>
      </form>

      {errorMessage && <p style={{ color: 'red', marginTop: '20px' }}>{errorMessage}</p>}

      {successMessage && <p style={{ color: 'green', marginTop: '20px' }}>{successMessage}</p>}
    </div>
  );
};

export default Task4;
