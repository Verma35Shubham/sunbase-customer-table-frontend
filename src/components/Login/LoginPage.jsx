import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./login.css"

const LoginPage = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiURL = 'http://localhost:8080'; // Replace with your actual API URL

    try {
      const response = await axios.post(`${apiURL}/sunbase/portal/api/assignment_auth.jsp`, {
        email: username,
        password: password,
      });

      // Checking if the JWT token is received
      if (response.data.jwtToken) {
        // Saving token in cookies
        const token =  "jwt=" + response.data.jwtToken + "; path=/";

        localStorage.setItem('jwtToken', token);

        // Redirect to home page
        navigate("/table");

      } else {
        setError('Authentication failed. Please check your credentials.');
      }
    } catch (error) {
      setError('Invalid username and password!');
      console.error("Error:", error);
    }
  };

  return (
    <div className='login-container'>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Login ID:
          <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};


export default LoginPage;