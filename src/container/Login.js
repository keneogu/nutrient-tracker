import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { TOKEN_NAME } from '../constants';
// import { Redirect } from 'react-router-dom';
import postCurrentUser from '../actions';
import loginApi from '../API/loginApi';

function Login() {
  const logout = () => Cookies.remove(TOKEN_NAME);
  const dispatch = useDispatch();
  // const [redirect, setRedirect] = useState();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await loginApi({ username, password });
      // setRedirect(<Redirect to={{ pathname: '/' }} />);
      dispatch(postCurrentUser(user));
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
        <Link
          to="/sign_up"
          onClick={logout}
        >
          Logout
        </Link>
      </form>
    </div>
  );
}

export default Login;
