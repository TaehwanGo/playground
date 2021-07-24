import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from '../pages/Home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
