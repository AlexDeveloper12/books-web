import './App.css';

import Signup from './Signup';
import Signin from './Signin';
import Profile from './Profile';
import ErrorPage from './Error';
import { Switch, Route } from 'react-router-dom';
import Books from './Books';
import Search from './Search';
import HorizontalNavigator from './HorizontalNavigator';

function App() {
  return (

    <main>
      <HorizontalNavigator />
      <Switch>
        <Route path="/" component={Signup} exact />
        <Route path="/signup" component={Signup} exact />
        <Route path="/signin" component={Signin} exact />
        <Route path="/profile" component={Profile} exact />
        <Route path="/books" component={Books} exact />
        <Route path="/search" component={Search} exact />
        <Route component={ErrorPage} />
      </Switch>
    </main>
  );
}

export default App;
