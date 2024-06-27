import React, { useState } from 'react';
import axios from 'axios';

const UserManagement = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');
  const [users, setUsers] = useState([]);
  const [token, setToken] = useState('');

  // Function to handle user registration
  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:8080/users/register', {
        username,
        password,
        userType,
      });
      console.log(response.data);
    } catch (error) {
      console.error('Registration Error:', error.response.data);
    }
  };

  // Function to handle user login
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/users/login', {
        username,
        password,
      });
      setToken(response.data.token);
      console.log('Login Successful');
    } catch (error) {
      console.error('Login Error:', error.response.data);
    }
  };

  // Function to fetch all users (for admin)
  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/users/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(response.data);
    } catch (error) {
      console.error('Fetch Users Error:', error.response.data);
    }
  };

  return (
    <div>
      <h2>User Management</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="User Type"
        value={userType}
        onChange={(e) => setUserType(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
      <button onClick={handleLogin}>Login</button>
      <button onClick={fetchUsers}>Fetch Users</button>

      <div>
        <h3>Users:</h3>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.username} - {user.userType}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserManagement;
