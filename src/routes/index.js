import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import Login from '../pages/Auth/Login';
import Signup from '../pages/Auth/SignUp';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
