import React, { useState } from 'react';

const Task2 = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  
  const [password, setPassword] = useState('');

  const [validationMessage, setValidationMessage] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const validatePassword = (value) => {
    setPassword(value);

    const lengthCheck = value.length >= 8;
    const upperCaseCheck = /[A-Z]/.test(value);
    const specialCharCheck = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    
    if (!lengthCheck) {
      setValidationMessage('Password must be at least 8 characters long.');
    } else if (!upperCaseCheck) {
      setValidationMessage('Password must contain at least one uppercase letter.');
    } else if (!specialCharCheck) {
      setValidationMessage('Password must contain at least one special character.');
    } else {
      setValidationMessage('');
    }
  };

  return (
    <div style={{ marginTop: '50px' , marginLeft:'20px' }}>
      <h1>Password Toggle & Validation</h1>

      <div style={{ margin: '20px 0' }}>
        <input
          type={passwordVisible ? 'text' : 'password'}
          value={password}
          onChange={(e) => validatePassword(e.target.value)}
          placeholder="Enter your password"
          style={{ padding: '10px', width: '300px', fontSize: '16px' }}
        />
        <button onClick={togglePasswordVisibility} style={{ marginLeft: '20px', backgroundColor:"white" }}>
          {passwordVisible ? 'Hide' : 'Show'}
        </button>
      </div>

      {validationMessage && (
        <p style={{ color: 'red' }}>{validationMessage}</p>
      )}
    </div>
  );
};

export default Task2;
