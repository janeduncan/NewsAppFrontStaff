import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from './NavBar.js';
import './App.css';
import StaffContainer from './containers/StaffContainer.js';
import JournalistListContainer from './containers/journalists/JournalistListContainer';
import ArticleListContainer from './containers/articles/ArticleListContainer';
import ArticleFormContainer from './containers/articles/ArticleFormContainer';
import JournalistFormContainer from './containers/journalists/JournalistFormContainer';
import ArticleDetails from './components/ArticleDetails';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar/>
          <Switch>
            <Route exact path="/staff" component={StaffContainer}/>
            <Route exact path="/staff/journalists" component={JournalistListContainer}/>
            <Route exact path="/staff/journalists/new" component={JournalistFormContainer}/>
            <Route exact path="/staff/articles" component={ArticleListContainer}/>
            {/* <Route exact path="/staff/articles/:id" component={ArticleDetails}/> */}
            <Route exact path="/staff/articles/new" render={()=><ArticleFormContainer/>}/>
          </Switch>
        </React.Fragment>
      </Router>
    )
  }
}

export default App;
