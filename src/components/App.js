import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './Home';
import CallBack from '../containers/Callback';
import { withSession } from '../containers/WithSession';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={withSession(Home)} />
        <Route path="/callback" component={CallBack} />
      </Switch>
    </Router>
  );
} 
