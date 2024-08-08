import React, { useState } from 'react';
import AuthService from '../services/AuthService';

function LoginComponent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    AuthService.login(email, password).then(
      () => {
        window.location.href = "/categories";
      },
      error => {
        setMessage("Invalid email or password");
      }
    );
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username</label>
          {/* <input type="text" value={} onChange={(e) => setEmail(e.target.value)} /> */}
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
      {message && <div>{message}</div>}
    </div>
  );
}

export default LoginComponent;