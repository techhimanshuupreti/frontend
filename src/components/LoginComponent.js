import React, { useState } from 'react';
import AuthService from '../services/AuthService';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is included

function LoginComponent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    AuthService.login(email, password).then(
      () => {
        window.location.href = "/home";
      },
      error => {
        setMessage("Invalid email or password");
      }
    );
  };
  const inputStyle = {
    width: '100%',  // Full width of the container
    borderColor: '#007bff', // Customize border color (Bootstrap primary color)
    borderWidth: '2px'  // Border width
  };
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className=" mt-5 text-center ">
        <h2 className="mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              id="username"
              className="form-control"
              value={email}
              style={inputStyle}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              style={inputStyle}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">Login</button>
            <span >&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <a href='/register' type="button" className="btn btn-primary">Register</a>
          </div>
        </form>
        {message && <div className="alert alert-danger mt-3">{message}</div>}
      </div>
    </div>
  );
};

export default LoginComponent;