import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from './NavBar.js';
import './App.css';
import StaffContainer from './containers/StaffContainer.js';

//
class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar/>
          <Switch>
            <Route exact path="/staff" component={StaffContainer}/>
          </Switch>
        </React.Fragment>
      </Router>
    )
  }
}

export default App;
