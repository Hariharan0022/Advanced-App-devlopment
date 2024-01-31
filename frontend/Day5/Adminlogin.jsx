// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Adminlogin.css';
import { Link } from 'react-router-dom';

function Adminlogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Basic form validation
    if (!username.trim() || !password.trim()) {
      setError('Please enter both username and password.');
      return;
    }

    // Clear any previous error
    setError('');

    // Handle login logic here
    // console.log(`Logging in with username: ${username} and password: ${password}`);
  };

  const isFormValid = !error && !!username.trim() && !!password.trim();

  return (
    <div className='bod-adl'>
      <div className='adl'>
        <div className="login-container-ad">
          <div className="login-card-ad">
            <div className="login-ad">
              <h2>Admin Login</h2>
            </div>
            <form>
              <input
                type="text"
                id="username"
                placeholder='Enter your Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <br></br>
              <input
                type="password"
                id="password"
                placeholder='Enter your Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {error && <p className="error-message">{error}</p>}

              <Link to="/admhome">
                <button className='butt-adm' type="button" onClick={handleLogin} disabled={!isFormValid}>
                  Log In
                </button>
              </Link>
              <br></br>
              <div className="new">
                <p className="link-text">
                  New here? <a href="/Adminregister">Create an account</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adminlogin;
