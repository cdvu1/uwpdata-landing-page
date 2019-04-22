import React, { Component } from 'react';


export default class Home extends Component {

    render() {
        return (
            <div className="home">
                <div className="uwpd-header">UWPD'S MISSION</div>
                <div className="uwpd">
                <div className="uwpd-logo">
                    <img src={require("../pics/New_patch.png")} />
                </div>

                <div className="uwpd-mission">“Although no campus is free from crime, we are committed to partnering 
                    together with you to create a safe place to live, work, and study.”</div>
                </div>

                <div className="team">
                    <div className="team-header">MEET THE TEAM</div>
                    <div className="team-cards">
                    <div>
                        <img src={require("../pics/ben.jpeg")} />
                        <div className="team-item-name">Ben Walchenbach</div>
                        <div>University of Washington</div>
                        <div>Incoming Security Engineer</div>
                    </div>

                    <div>
                        <img src={require("../pics/godwin.jpeg")} />
                        <div className="team-item-name">Godwin Vincent</div>
                        <div>University of Washington</div>
                        <div>Incoming Security Analyst</div>
                    </div>

                    <div>
                        <img src={require("../pics/maggie.jpeg")} />
                        <div className="team-item-name">Maggie Tsang</div>
                        <div>University of Washington</div>
                        <div>Incoming Project Manager</div>
                    </div>

                    <div>
                        <img src={require("../pics/cece.jpg")} />
                        <div className="team-item-name">Cecilia Vu</div>
                        <div>University of Washington</div>
                        <div>Incoming Software Engineer</div>
                    </div>
                    </div>
                </div>
          </div>
        );
    }
}