import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import postCurrentUser from '../actions';
import signupApi from '../API/signupApi';

function Signup() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [, setErrors] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signupApi({ username, password });
      dispatch(postCurrentUser(user));
    } catch (error) {
      setErrors(error.response.data.errors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          id="user-name"
        />
      </div>

      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
        />
      </div>

      <button type="submit">Signup</button>
    </form>
  );
}

export default Signup;
