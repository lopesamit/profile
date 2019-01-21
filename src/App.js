import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Making from './components/Making/Making';
import Feedback from './components/Feedback/Feedback';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as routes from './constants/routes'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      
    }
  }

  render() {
    return (
      <Router>
        <div className="container-fluid">
          <Route exact path={routes.LANDING} component={Landing}/>
          <Route exact path={routes.HOME} component={Home}/>
          <Route exact path={routes.PROFILE} component={Profile}/>
          <Route exact path={routes.FEEDBACK} component={Feedback}/>
          <Route exact path={routes.MAKING} component={Making}/>
        </div>
      </Router>
    );
  }
}

export default App;
