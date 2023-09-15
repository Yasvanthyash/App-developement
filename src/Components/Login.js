import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const authenticate = (e) => {
    e.preventDefault();

    if (username.length === 0) {
      alert('Enter Username');
    } else if (password.length === 0) {
      alert('Enter Password');
    }
    else if(username.length !== 0 && password.length !== 0) {
    alert("Logged in!!")
  };}

  return (
    <div id="body">
      <div className="signup-form">
        <div className="container">
          <div className="header">
            <h1>UNPLUGGED EVENTS</h1>
            <p>User Login</p>
          </div>

          <form>
            <div className="input">
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
              />
            </div>
            <div className="input">
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            <input
              onClick={authenticate}
              className="login-button"
              type="submit"
              value="LOGIN"
            />
          </form>
          <Link to="/usersignup">
            <p>No Account? Register Now!</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
