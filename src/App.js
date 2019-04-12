import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="nav">
            <div className="nav-item nav-item-selected">
              Home
            </div>

            <div className="nav-item" onClick={() => {
              
            }}>
              Meet the API
            </div>

            <div className="nav-item">
              Visualization
            </div>
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

        <div className="home">
          <div className="uwpd-header">UWPD's Mission</div>
          <div className="uwpd">
            <div className="uwpd-logo">
              <img src={require("./pics/New_patch.png")} />
            </div>

            <div className="uwpd-mission">“Although no campus is free from crime, we are committed to partnering 
              together with you to create a safe place to live, work, and study.”</div>
          </div>

          <div className="team">
            <div className="team-header">MEET THE TEAM</div>
            <div className="team-cards">
            <div>
              <img src={require("./pics/ben.jpeg")} />
              <div className="team-item-name">Ben Walchenbach</div>
              <div>University of Washington</div>
              <div>Incoming Security Engineer</div>
            </div>

            <div>
              <img src={require("./pics/godwin.jpeg")} />
              <div className="team-item-name">Godwin Vincent</div>
              <div>University of Washington</div>
              <div>Incoming Security Analyst</div>
            </div>

            <div>
              <img src={require("./pics/maggie.jpeg")} />
              <div className="team-item-name">Maggie Tsang</div>
              <div>University of Washington</div>
              <div>Incoming Project Manager</div>
            </div>

            <div>
              <img src={require("./pics/cece.jpg")} />
              <div className="team-item-name">Cecilia Vu</div>
              <div>University of Washington</div>
              <div>Incoming Software Engineer</div>
            </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
