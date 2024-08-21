import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    // For example, make an API call to connect_login.php
  };

  return (
    <div>
      {/* <div className="header">
        <img className="img-log" src="assets/images/log in.png" alt="Log In Icon" />
        <div className="h2">
          <h3 className="h3">Log In</h3>
        </div>
      </div> */}
      <form onSubmit={handleSubmit}>
        <div className="wrapper">
          <div className="title">Log In</div>
          <div className="form">
            <div className="inputfield">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                className="input"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="inputfield">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="input"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="inputfield">
              <input type="submit" value="LOG IN" className="btn" />
            </div>
            <p className="alter">
              Not a Member? <Link className="login" to="/register">Register now!</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
