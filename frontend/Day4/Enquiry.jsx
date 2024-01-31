// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Enquiry.css';



import { Link } from 'react-router-dom';

const Enquiry = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [coursename, setCourseName] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    // console.log(Logging in with username: ${username} and password: ${password});
  };

  return (
    <div className='bod-log-en'>
    <div className="login-container-en">
    
      <div className="login-card-en">
        <div className="login-en">
        <h2>Enquiry form</h2>
        </div>
        <form>
          <label htmlFor="username">Name:</label>
          <input
            type="text"
            id="name"
            placeholder='Enter your Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {/* <img src={user} alt='' className="absolute top-4 right-4 "></img> */}


          <label htmlFor="email">Email-Id:</label>
          <input
            type="email"
            id="email"
            placeholder='Enter your email-id'
            value={email}
            
            onChange={(e) => setEmail(e.target.value)}
          />

        <label htmlFor="course">CourseName:</label>
          <input
            type="text"
            id="course"
            placeholder='Enter the Course name'
            value={coursename}
            onChange={(e) => setCourseName(e.target.value)}
          />

          <label>
            Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='mess'
            required
          ></textarea>
          </label>

          <button type="button" onClick={handleLogin}><Link to="/Userhome">Submit</Link>
            
          </button>
          <br></br>
          {/* <div className="new-en">
          <p className="link-text-en">
             New here? <a href="/register">Create an account</a>
          </p>
          </div> */}
        </form>
      </div>
    </div>
    </div>
  );
};

export default Enquiry;