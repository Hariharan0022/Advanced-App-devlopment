// eslint-disable-next-line no-unused-vars
import {React,useState} from 'react'
import './Adminlogin.css';
function Adminlogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      // Handle login logic here
      // console.log(Logging in with username: ${username} and password: ${password});
    };
  
    return (
        <div className='bod-adl'>
        <div className='adl'>
            <div className="login-container-ad">
      <div className="login-card-ad">
        <div className="login-ad">
        <h2>Admin Login</h2>
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

export default Adminlogin