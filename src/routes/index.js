import React from 'react';
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom';
import StorePage from '../pages/Store/store';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={StorePage}></Route>
      </Switch>
    </Router>
  )
}

export default Routes;