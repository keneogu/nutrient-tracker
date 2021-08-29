import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import postCurrentUser from '../actions';
import loginApi from '../API/loginApi';

function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await loginApi({ username, password });
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

      {errors.length ? <p>{errors[0].detail}</p> : null}

      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
