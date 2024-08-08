import React, { useState } from 'react';
import AuthService from '../services/AuthService';

function RegisterComponent() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    AuthService.register(username, password).then(
      () => {
        setMessage("User registered successfully");
      },
      error => {
        setMessage("Error registering user");
      }
    );
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Username</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
      {message && <div>{message}</div>}
    </div>
  );
}

export default RegisterComponent;