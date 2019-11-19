import React from 'react';
import './App.css';
import logo from './logo.svg';
import $ from 'jquery';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './js/Login'
import LogedIn from './js/LogedIn';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
            <Login/>
        </Route>
        <Route>
            <LogedIn/>
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
