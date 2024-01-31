// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Login.css';

 // eslint-disable-next-line no-unused-vars
 import user from "./Asserts/user.png";
import NavBar from './navbar';

 // eslint-disable-next-line no-unused-vars
//  import pass from "./Asserts/padlock(1).png";


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    // console.log(Logging in with username: ${username} and password: ${password});
  };

  return (
    <div className='bod-log'>
    <div className="login-container">
        <NavBar/>
      <div className="login-card">
        <div className="login">
        <h2>User Login</h2>
        </div>
        <form>
          {/* <label htmlFor="username">Username:</label> */}
          <input
            type="text"
            id="username"
            placeholder='Enter your Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {/* <img src={user} alt='' className="absolute top-4 right-4 "></img> */}
<br></br>

          {/* <label htmlFor="password">Password:</label> */}
          <input
            type="password"
            id="password"
            placeholder='Enter your Password'
            value={password}
            
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="button" onClick={handleLogin}>
            Log In
          </button>
          <br></br>
          <div className="new">
          <p className="link-text">
             New here? <a href="/register">Create an account</a>
          </p>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;