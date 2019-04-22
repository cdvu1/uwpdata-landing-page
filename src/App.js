import React, { Component } from 'react';
import './App.css';

import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import constants from './components/constants';
import Home from './components/Home';
import API from './components/API';
import Data from './components/Data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curr: "home"
    }
  }


  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <div className="nav">
              <Link className="nav-home nav-item nav-item-selected" 
                to={constants.routes.home} 
                onClick={() => {
                  console.log("clicked");
                  let selected = document.querySelector('.nav-item-selected');
                  console.log(selected);
                  selected.classList.remove('nav-item-selected');
                  
                  let curr = document.querySelector('.nav-home');
                  curr.classList.add('nav-item-selected');
                }}
              >
                Home
              </Link>

              <Link className="nav-api nav-item" to={constants.routes.api} onClick={() => {
                console.log("clicked");
                let selected = document.querySelector('.nav-item-selected');
                console.log(selected);
                selected.classList.remove('nav-item-selected');
                
                let curr = document.querySelector('.nav-api');
                curr.classList.add('nav-item-selected');
              }}>
                Meet the API
              </Link>

              <Link className="nav-data nav-item" to={constants.routes.data} onClick={() => {
                console.log("clicked");
                let selected = document.querySelector('.nav-item-selected');
                console.log(selected);
                selected.classList.remove('nav-item-selected');
                
                let curr = document.querySelector('.nav-data');
                curr.classList.add('nav-item-selected');
              }}>
                Visualization
              </Link>
            </div>
            <div className="header">
              <span className="header-1">UWP</span>
              <span className="header-2">Data</span>
            </div>
            <div className="header-description">
              An easy to use, informative, access controlled API for enabling 
              visualizations and other research from UWPD data.
            </div>
          </header>


          <Switch>
            <Route exact path={constants.routes.home} component={Home} />
            <Route path={constants.routes.api} component={API} />
            <Route path={constants.routes.data} component={Data} />
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
