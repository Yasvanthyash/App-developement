import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'; // Import useDispatch
import { setUserName } from '../redux/actions/userAction'; // Import your action
import './login.css';

function UserLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();
  const dispatch = useDispatch(); // Get the dispatch function

  const authenticate = (e) => {
    e.preventDefault();

    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    if (trimmedUsername.length === 0) {
      alert('Enter Username');
    } else if (trimmedPassword.length === 0) {
      alert('Enter Password');
    } else {
      dispatch(setUserName(trimmedUsername)); 
      alert("Logged in Successfully!!");
      setTimeout(() => {
        nav("/dashboard");
      }, 1000);
    }
  };

  return (
    <div id="body">
      <div className="login-form">
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

export default UserLogin;
