import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
// import store from '../store';
import { Redirect } from 'react-router-dom';
import postCurrentUser from '../actions';
import signupApi from '../API/signupApi';

function SignUp() {
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordconfirmation, setPasswordconfirmation] = useState('');
  const [, setErrors] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== passwordconfirmation) return;
    try {
      const { user } = await signupApi({ username, password });
      dispatch(postCurrentUser(user));
      setRedirect(<Redirect to={{ pathname: '/' }} />);
    } catch (error) {
      setErrors(error.response.data.errors);
    }
  };

  return (
    <div>
      {/* {redirect} */}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={username}
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
            id="user-name"
          />
        </div>

        <div>
          <input
            type="password"
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            id="password"
          />
        </div>
        <div>
          <input
            type="password"
            value={passwordconfirmation}
            placeholder="confirm password"
            onChange={(e) => setPasswordconfirmation(e.target.value)}
            id="passwordconfirmation"
          />
        </div>

        <button type="submit">Signup</button>
        <p className="pt-5 text-center">Have an account?</p>
        {/* <Link
          to="/login"
          className="text-center"
        >
          Login
        </Link> */}
      </form>
    </div>
  );
}

export default SignUp;
