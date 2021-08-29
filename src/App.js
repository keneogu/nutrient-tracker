import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Home from './container/Home';
import Login from './container/Login';
import SignUp from './container/SignUp';
import postCurrentUser from './actions';
import currentUserApi from './API/currentUserApi';

function App() {
  const dispatch = useDispatch();

  useEffect(async () => {
    try {
      const { user } = await currentUserApi();
      dispatch(postCurrentUser(user));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route exact path="/sign_up" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
