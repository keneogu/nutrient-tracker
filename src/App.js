import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './container/Home';
import Login from './container/Login';
import SignUp from './container/SignUp';

function App() {
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
