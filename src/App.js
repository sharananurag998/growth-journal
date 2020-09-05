import React from 'react';
import Header from './components/header.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './screens/home';
import SignIn from './screens/signin';
import Register from './screens/register';
import Todo from './screens/todo';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/todo">
            <Todo />
          </Route>
        </Switch> 
      </div>
    </Router>
  );
}

export default App;
